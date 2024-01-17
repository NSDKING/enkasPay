import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import { useForm, Controller } from "react-hook-form";
import { API, graphqlOperation } from 'aws-amplify';
import { createAccount } from '../../graphql/mutations';
import { listUsers } from '../../graphql/queries';
import { useNavigate } from 'react-router-dom';
import StafNavbar from '../../components/StafNavbar';
import DefaultButton from '../../components/DefaultButton';
 

export default function AddAccount() {
    const [loading, setLoading] = useState(false)
    const [userList, setUserList] = useState([])
    const {formState: {errors}, handleSubmit, register, control} = useForm();
    const navigate = useNavigate();
    
    const getListUsers = async()=>{
        if(loading){
          return;
      }
      
      setLoading(true)
      try {
      
     const response= await API.graphql(graphqlOperation(listUsers, { limit: 1000 }));
        setUserList(response.data.listUsers.items)
     
      }catch(e){
              console.log(e)
    
      }
      setLoading(false)
     
      }
    useEffect(() => {
        getListUsers()
    
      
    }, [])
    
    const onPress = async (data) => {
        if (loading) {
          return;
        }
      
        setLoading(true);
      
        try {
          const accountsToCreate = [];
      
          for (let i = 1; i <= 5; i++) {
            const newAccount = {
              mail: data.mail,
              profil: i,
              passe: data.passe,
              endDateAccount: data.endDateAccount,
              endDateProfil: "2000-01-01",
              userID: null,
              service: data.service,
              free: true,
            };
      
            accountsToCreate.push(newAccount);
          }
      
          const createAccountPromises = accountsToCreate.map(async (account) => {
            await API.graphql(graphqlOperation(createAccount, { input: account }));
          });
      
          await Promise.all(createAccountPromises);
      
          alert('Accounts created successfully');
          navigate("/ManageAccount");
        } catch (e) {
          console.log(e);
          alert('Error creating accounts');
        }
      
        setLoading(false);
      };
       

    return(
        <section className="AddAccountPage">

            <StafNavbar></StafNavbar>
            <form id="my-form"
                    onSubmit={handleSubmit((data=>{
                         onPress(data)
                    }))}>

                <label for="mail">mail :</label>
                <input 
                    type="mail" 
                    id="mail" 
                    {...register('mail', { required: 'ceci est obligatoire'})}

                />


                <label for="profil">passe :</label>
                <input 
                    type="text" 
                    id="passe" 
                    name="passe"
                    {...register('passe', { required: 'ceci est obligatoire'})}
                    
                    />


                <label for="fin-abonnement">fin du compte :</label>
                <input 
                    type="date" 
                    id="endAccount" 
                    name="endAccount"
                    {...register('endDateAccount', { required: 'ceci est obligatoire'})}

                        
                    />
                <label for="pin">service :</label>
                <Controller
                        name="service"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                        <select {...field} >
                            <option value="">Select...</option>
                            <option value="netflix">netflix</option>
                            <option value="adn">adn</option>
                            <option value="spotify">spotify</option>
                            <option value="disney">disney</option>
                            <option value="disney">Prime</option>
                        </select>
                        )}
                    />

                    <DefaultButton text={loading? 'Loading ....': 'enregistrer'} bgcolor={"#eb0625"} textcolor={"white"} width={"100%"} height={"50px"} marginTop={"30px"} WebkitBoxShadow={'10px 10px 15px -10px rgba(245,59,80,1)'} MozBoxShadow={'10px 10px 15px -10px rgba(245,59,80,1)'} boxShadow={'10px 10px 15px -10px rgba(245,59,80,1)'} type={'submit'}/>

         
                </form>
        </section>
    )

}

