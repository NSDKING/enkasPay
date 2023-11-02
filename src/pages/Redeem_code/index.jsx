import "./index.css"
import { useState, useRef, useEffect} from 'react';
import logo from './img/logo.png'
import { useNavigate } from "react-router-dom";
import DefaultButton from "../../components/DefaultButton";
import { getUser, listPayments } from "../../graphql/queries";
import { API, Auth, graphqlOperation, Hub } from "aws-amplify";
import { useForm } from "react-hook-form";
import { updatePayments, updateUser } from "../../graphql/mutations";



export default function RedeemCodePage() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [payList, setPayList] = useState([]);
    const {formState: {errors}, handleSubmit, register, watch} = useForm();
    const [userID, setUserID]= useState(undefined)
    const [UserData, setUserData]= useState(undefined)
    const [error, setError] = useState(false);
  
     
     
    const checkUser = async ()=>{
        try {
            const authUser = await Auth.currentAuthenticatedUser({
                bypassCache: true,
              });
            const userData = await API.graphql(
                graphqlOperation(getUser, { id: authUser.attributes.sub })
              );
            
            setUserID(authUser.attributes.sub)
            setUserData(userData.data.getUser)

     
        } catch(e){
            setUserID(null);
        }
        }

        const updateSolde = async (data) => {
            const transactiongood = payList.find((transaction) => transaction.transaction_id === data.transactionID);
        
            if (!transactiongood) {
              setError('Numéro de transaction incorrect.');
              return;
            }
        
            if (transactiongood.used) {
              setError('Le numéro de transaction a déjà été utilisé.');
              return;
            }
        
            const newSolde = parseInt(UserData.solde) + parseInt(transactiongood.amounts);
        
            const input = {
              id: userID,
              solde: newSolde,
              _version: UserData._version,
            };

            const TransactionInput ={
                id:data.transactionID,
                used:true,
                _version:transactiongood._version
            }
        
            try {
              await API.graphql(graphqlOperation(updateUser, { input }));
              await API.graphql(graphqlOperation(updatePayments, { TransactionInput }));
              alert('Montant crédité avec succès.');
            } catch (e) {
              setError('Une erreur est survenue lors de la mise à jour du solde.');
            }
          }
        

    useEffect(() => {
      checkUser()
    }, [userID])
    



    const getPayments = async () => {
        if (loading) {
          return;
        }
        setLoading(true);
    
        try {
          let list= []
          const response= await API.graphql(graphqlOperation(listPayments, { limit: 10000000 }));
          const noneDeleted = response.data.listPayments.items.filter((item) => !item._deleted);
          setPayList(noneDeleted)
      
         } catch (e) {
          console.log(e);
        }
        setLoading(false);
      }

      useEffect(() => {
        
      
        getPayments();
      }, [])
      

    return(
        <section className="RedeemPage">
            <div className="logo" onClick={()=>{
                    navigate("/")
                }}>
                    <img src={logo} width="90%"/>
            </div> 
            <form className="body"
               onSubmit={handleSubmit((data=>{
                updateSolde(data)              
            }))}
            >
                <div className="info">
                    <p className="p-texts"> envoie le montant a crediter dans ton solde a ce numero om:693946054 ou momo:652737914</p>
                    <p className="p-texts">copie le numero de transaction et insert le dans la box en dessous</p>

                </div>
                
                <p className={error? 'text-error': 'none'} >{error}</p>
              

                <input
                    {...register('transactionID', { required: 'ceci est obligatoire'})}  
                    type='text'
                    placeholder="numero de transaction"
                />

       
                <DefaultButton text={ 'enregistrer'} bgcolor={"#eb0625"} textcolor={"white"} width={"80%"} height={"50px"} marginTop={"30px"} WebkitBoxShadow={'10px 10px 15px -10px rgba(245,59,80,1)'} MozBoxShadow={'10px 10px 15px -10px rgba(245,59,80,1)'} boxShadow={'10px 10px 15px -10px rgba(245,59,80,1)'} type={'submit'}/>
             </form>

        </section>
    )

}

