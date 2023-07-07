import DefaultButton from '../components/DefaultButton'
import { Link } from 'react-router-dom'
import DefaultButtonLink from '../components/DefaultbuttonLink'
import { API, Auth, graphqlOperation } from 'aws-amplify'
 import { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { createUser } from '../graphql/mutations'

export default function AddGuestCust() {
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const {formState: {errors}, handleSubmit, register, control} = useForm();
    const [loading, setLoading] = useState(false)


    
    const onRegisterData = async (data) =>{
        if(loading){
            return;
        }
        const authUser = await Auth.currentAuthenticatedUser({
            bypassCache: true,
          });

        setLoading(true)  
         try {
            const newUser = {
                mail: data.mail,
                FamilyName:data.FamilyName,
                LastName:data.LastName,
                phoneNumber:data.phoneNumber
              };
        
            console.log(newUser)
            console.log(data)
  
        
            const response = await API.graphql(graphqlOperation(createUser, {input: newUser}))
            console.log(response)
            console.log(newUser)
            console.log("test donnée")
            console.log(data)
            navigate("/customer-list")
           }catch(e){
            setError(e.message)
         }
        setLoading(false)
     }

    return(
        <section>
 <form className='loginpage-body' 
                onSubmit={handleSubmit((data=>{
                    onRegisterData(data)              
                }))}>
 
                <p className={error? 'text-error': 'none'} >{error}</p>

                <input
                    className='form-input'
                    {...register('FamilyName', { required: 'ceci est obligatoire'})}
                    type='text'
                    placeholder="   Nom"
                />
                {errors.email && <p className="text-error">{errors.email?.message}</p>}

                <input
                    className='form-input'
                    {...register('LastName', { required: 'ceci est obligatoire'})}  
                    type='text'
                    placeholder="  prenom"
                />

 
                <input
                    className='form-input'
                    {...register('mail', { required: 'ceci est obligatoire'})}  
                    type='mail'
                    placeholder="  mail"
                />  

 
                
                <input 
                                className='form-input'
                                {...register('phoneNumber', { 
                                    required: 'entre ton numero comme celui ci:+237693040500',
                                    pattern: {
                                                value: /^\+(?:[0-9]\s?){6,14}[0-9]$/i,
                                                message: "entre ton numero comme celui ci:+237693040500"
                                            }
                                    })}
                                placeholder='saisissez votre numero de telephone'
                            />
                {errors.password && <p className="text-error">{errors.password?.message}</p>}



                <Link className='p1' style={{ textDecoration: 'none' }} to={"/password-reset"}>mot de passe oublié ?</Link>

                <DefaultButton text={loading? 'Loading ....': 'creer'} bgcolor={"#eb0625"} textcolor={"white"} width={"100%"} height={"50px"} marginTop={"30px"} WebkitBoxShadow={'10px 10px 15px -10px rgba(245,59,80,1)'} MozBoxShadow={'10px 10px 15px -10px rgba(245,59,80,1)'} boxShadow={'10px 10px 15px -10px rgba(245,59,80,1)'} type={'submit'}/>


            </form>
        </section>
    )
}
