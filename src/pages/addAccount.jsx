import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './css/AddAccount.css'
import { useForm, Controller } from "react-hook-form";
import { API, graphqlOperation } from 'aws-amplify';
import { createAccount } from '../graphql/mutations';
import { listUsers } from '../graphql/queries';
import { useNavigate } from 'react-router-dom';
import StafNavbar from '../components/StafNavbar';
 

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
      
        const response= await API.graphql(graphqlOperation(listUsers));
         setUserList(response.data.listUsers.items)
     
      }catch(e){
              console.log(e)
    
      }
      setLoading(false)
     
      }
    useEffect(() => {
        getListUsers()
    
      
    }, [])
    
    const linkStyle = {
        float: "left",
        display: "block",
        color: '#fff',
        textAlign: "center",
        textDecoration: "none",
        paddingTop: "14px",
        paddingBottom: "14px",
        paddingRight:"16px",
        paddingLeft:"16px",
    }
     
    const onPress = async (data) =>{
        if(loading){
            return;
        }

        setLoading(true)  
        try {
            const newAccount = {
                mail: data.mail,
                profil: data.profil,
                passe:data.passe,
                endDateAccount:data.endDateAccount,
                endDateProfil:data.endDateProfil,
                pin:data.pin,
                numero:data.numero,
                userID:data.user,
                service:data.service,
                free:false,
              };
        
              const response =  await API.graphql(
                graphqlOperation(createAccount, { input: newAccount })
            );
             alert('ok')
            navigate("/ManageAccount")
          }catch(e){
            console.log(e)
         }
        setLoading(false)
     }   

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

                <label for="profil">profil :</label>
                <input 
                    type="text" 
                    id="profil" 
                    name="profil"
                    {...register('profil', { required: 'ceci est obligatoire'})}
                    
                    />

                <label for="profil">passe :</label>
                <input 
                    type="text" 
                    id="passe" 
                    name="passe"
                    {...register('passe', { required: 'ceci est obligatoire'})}
                    
                    />

                <label for="telephone">fin du profil :</label>
                <input 
                    type="date" 
                    id="fin-abonnement" 
                    name="fin-abonnement"
                    {...register('endDateProfil', { required: 'ceci est obligatoire'})}
                    
                    />

                <label for="fin-abonnement">fin du compte :</label>
                <input 
                    type="date" 
                    id="endAccount" 
                    name="endAccount"
                    {...register('endDateAccount', { required: 'ceci est obligatoire'})}

                        
                    />

                <label for="pin">pin :</label>
                <input 
                    type="number" 
                    id="pin" 
                    name="pin"
                    {...register('pin', { required: 'ceci est obligatoire'})}
                    
                    />

                <label for="pin">utilisateur :</label>
                
                    
                <input type="text" 
                    list="user" 
                    {...register('user', { required: 'ceci est obligatoire'})}

                />
                <datalist id="user">
                    <option value="">Select...</option>

                        {
                            userList.map(item => (
                                <option value={item.id} key={item.id}>{item.FamilyName +" "+ item.LastName}</option>
                            ))
                        }

                </datalist>
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
                        </select>
                        )}
                    />


                <input type="submit" id="add-client-btn"  />
                </form>
        </section>
    )

}