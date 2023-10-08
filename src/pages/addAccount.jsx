import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './css/AddAccount.css'
import { useForm, Controller } from "react-hook-form";
import { API, graphqlOperation } from 'aws-amplify';
import { createAccount } from '../graphql/mutations';
import { listUsers } from '../graphql/queries';
import { useNavigate } from 'react-router-dom';
import StafNavbar from '../components/StafNavbar';
import DefaultButton from '../components/DefaultButton';
 

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
        console.log(data)
        setLoading(true)  
        try {
            let freeValue;
            let endDateProfilValue;
            if(data.endDateProfil==""){
                endDateProfilValue=null
            }else{
                endDateProfilValue=data.endDateProfil
            }
            if(data.user==" "){
                freeValue= true
            }else{
                freeValue=false
            }
            const newAccount = {
                mail: data.mail,
                profil: data.profil,
                passe:data.passe,
                endDateAccount:data.endDateAccount,
                endDateProfil:endDateProfilValue,
                pin:data.pin,
                numero:data.numero,
                userID:data.user,
                service:data.service,
                free:freeValue,
              };
        
              const response =  await API.graphql(
                graphqlOperation(createAccount, { input: newAccount })
            );

            console.log(response)
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
                    type="number" 
                    id="profil" 
                    name="profil"
                    {...register('profil', { required: false })}
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
                    {...register('endDateProfil')}
                    
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
                
                    
                <input type="text" list="user" {...register('user', { required: false })} />

                <datalist id="user">
                    <option value=" ">Select...</option>

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

                    <DefaultButton text={loading? 'Loading ....': 'enregistrer'} bgcolor={"#eb0625"} textcolor={"white"} width={"100%"} height={"50px"} marginTop={"30px"} WebkitBoxShadow={'10px 10px 15px -10px rgba(245,59,80,1)'} MozBoxShadow={'10px 10px 15px -10px rgba(245,59,80,1)'} boxShadow={'10px 10px 15px -10px rgba(245,59,80,1)'} type={'submit'}/>

         
                </form>
        </section>
    )

}

