import { useLocation, useNavigate } from "react-router-dom";
import './css/consultPage.css'
import { updateAccount } from "../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useEffect } from "react";
import { listAccounts } from "../graphql/queries";
import StafNavbar from "../components/StafNavbar";

export default function UpdateAccountList() {
    const { state } = useLocation();
    const { item } = state;
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [AccountList, setAccountList] = useState([]);
    const [profileList, setProfileList] = useState([])

    const {formState: {errors}, handleSubmit, register, control, setValue} = useForm();
 
    const getAccount = async () => {
        if (loading) {
          return;
        }
        setLoading(true);
    
        try {
          const response= await API.graphql(graphqlOperation(listAccounts, { limit: 1000 }));
          const NotDeleted = response.data.listAccounts.items.filter((item) =>  !item.deleted);
    
          setAccountList(NotDeleted);
        } catch (e) {
          console.log(e);
        }
        setLoading(false);
      }


    
    useEffect(() => {
        getAccount() 
      }, [ ])

    useEffect(()=>{
        getProfile();
      },[AccountList])

    // get the profil of the current account

    const getProfile =()=>{
            let profile = []
            AccountList.forEach((item)=>{
                if(item.mail == state.item.mail){
                    profile.push(item)
    
                }
            })
    
            setProfileList(profile)
    
        }

        const handleFormClick = async(data) => {
            if(loading){
                return;
            }
            
            setLoading(true)
            console.log(data)
            try {
                profileList.forEach(async (item)=>{

                    const input ={
                        id:item.id,
                        passe:data.passe,
                        endDateAccount:data.endDateAccount,
                        _version:item._version,
                    }
                    const response= await API.graphql(graphqlOperation(updateAccount, { input: input }));
                    console.log(response)
                      
                })
         
                alert('ok')
                navigate(-2)
    
           
            }catch(e){
                    console.log(e)
          
            }
            setLoading(false)
          }


    return(
       
        <div>
            <StafNavbar></StafNavbar>
                <div className="modal">
                            <div className="modal-content">
                            <form id="my-form"
                                    onSubmit={handleSubmit((data=>{handleFormClick(data)}))}>
                                <h3>mail: {item.mail}</h3>
                                <label for="profil">passe :</label>
                                <input 
                                    type="text" 
                                    id="passe" 
                                    name="passe"
                                    defaultValue={item.passe}

                                    {...register('passe', { required: 'ceci est obligatoire'})}
                                    
                                    />

 

                                <label for="fin-abonnement">fin du compte :</label>
                                <input 
                                    type="date" 
                                    id="endAccount" 
                                    name="endAccount"
                                    defaultValue={item.endDateAccount}

                                    {...register('endDateAccount', { required: 'ceci est obligatoire'})}

                                        
                                    />

                                <input type="submit" id="add-client-btn"  />
                                </form>
                                <button onClick={()=>{ navigate("/accounts-list")}}>close the page</button>

                             </div>
                        </div>
        </div>
    )

}