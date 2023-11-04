
import { useLocation, useNavigate } from "react-router-dom";
import './css/consultPage.css'
import { updateAccount } from "../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useEffect } from "react";
import { listUsers } from "../graphql/queries";


export default function UpdateAccount() {
    const { state } = useLocation();
    const { item } = state;
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const {formState: {errors}, handleSubmit, register, control, setValue} = useForm();
    const [userList, setUserList] = useState([])
    
 
    const handleFormClick = async(data) => {
        if(loading){
            return;
        }
        
        setLoading(true)
        console.log(data)
        try {
            if(data.user==""){
                const input = { 
                    id:item.id,
                    mail: data.mail,
                    profil: data.profil,
                    passe:data.passe,
                    endDateAccount:data.endDateAccount,
                    endDateProfil:data.endDateProfil,
                    pin:data.pin,
                    numero:data.numero,
                    free:data.free,
                    _version:item._version,
                  };
                const response= await API.graphql(graphqlOperation(updateAccount, { input: input }));
     

            }else{

                const input = { 
                    id:item.id,
                    mail: data.mail,
                    profil: data.profil,
                    passe:data.passe,
                    endDateAccount:data.endDateAccount,
                    endDateProfil:data.endDateProfil,
                    pin:data.pin,
                    numero:data.numero,
                    userID:data.user,
                    _version:item._version,
                    free:data.free,

                    
                  };
                const response= await API.graphql(graphqlOperation(updateAccount, { input: input }));
        
            }
              
     
            alert('ok')
            navigate(-2);

        }catch(e){
                console.log(e)
      
        }
        setLoading(false)
      }
      

    const getListUsers = async()=>{
        if(loading){
          return;
      }
      
      setLoading(true)
      try {
      
        const response= await API.graphql(graphqlOperation(listUsers, { limit: 1000 }));

        // Filter users with _deleted: false
        const filteredUsers = response.data.listUsers.items.filter((user) => user._deleted !== true);
        setUserList(filteredUsers);        
      }catch(e){
              console.log(e)
    
      }
      setLoading(false)
     
      }

      useEffect(() => {
         getListUsers()
          
     }, [ ])
     
    return(
        <section>
                             <div className="modal-content">
                            <form id="my-form"
                                    onSubmit={handleSubmit((data=>{handleFormClick(data)}))}>

                                <label for="mail">mail :</label>
                                <input 
                                    type="mail" 
                                    id="mail" 
                                    defaultValue={item.mail}
                                    {...register('mail', { required: 'ceci est obligatoire'})}

                                />

                                <label for="profil">profil :</label>
                                <input 
                                    type="text" 
                                    id="profil" 
                                    name="profil"
                                    defaultValue={item.profil}
                                    {...register('profil', { required: false })}
                                />
             

                                <label for="profil">passe :</label>
                                <input 
                                    type="text" 
                                    id="passe" 
                                    name="passe"
                                    defaultValue={item.passe}

                                    {...register('passe', { required: 'ceci est obligatoire'})}
                                    
                                    />

                                <label for="telephone">fin du profil :</label>
                                <input 
                                    type="date" 
                                    id="fin-abonnement" 
                                    name="fin-abonnement"
                                    defaultValue={item.endDateProfil}

                                    {...register('endDateProfil', { required: 'ceci est obligatoire'})}
                                    
                                    />

                                <label for="fin-abonnement">fin du compte :</label>
                                <input 
                                    type="date" 
                                    id="endAccount" 
                                    name="endAccount"
                                    defaultValue={item.endDateAccount}

                                    {...register('endDateAccount', { required: 'ceci est obligatoire'})}

                                        
                                    />

                                <label for="pin">pin :</label>
                                <input 
                                    type="number" 
                                    id="pin" 
                                    name="pin"
                                    defaultValue={item.pin}

                                    {...register('pin', { required: 'ceci est obligatoire'})}
                                    
                                    />

                                <label>utilisateur :</label>
                                
                                <input type="text" list="user" {...register('user', { required: false })} />

                                <datalist id="user">
                                    <option value=" ">Select...</option>

                                        {
                                            userList.map(item => (
                                                <option value={item.id} key={item.id}>{item.FamilyName +" "+ item.LastName}</option>
                                            ))
                                        }

                                </datalist>
                                <label for="pin">free :</label>

                            <Controller
                                                    name="free"
                                                    control={control}
                                                    defaultValue=""
                                                    render={({ field }) => (
                                                    <select {...field} >
                                                        <option value="">select....</option>
                                                        <option value={true}>true</option>
                                                        <option value={false}>false</option>
                                                
                                                
                                                    </select>
                                                    )}
                                                />

                                <input type="submit" id="add-client-btn"  />
                                </form>
                    <button onClick={()=>{ navigate("/choose-accounts-list-type") }}>close the page</button>

                             </div>
          </section>
    )
}
