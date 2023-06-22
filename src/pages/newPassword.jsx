import logo from './img/logo.png'
import "./css/PasswordForgotPage.css"
import DefaultButton from '../components/DefaultButton'
import { useForm } from "react-hook-form";
import { Auth } from 'aws-amplify';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
 
export default function NewPassword() {
    const {formState: {errors}, handleSubmit, register, watch} = useForm();
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false);

    const navigate = useNavigate();
    

    const onSingUpPressed = async (data) =>{
        if(loading){
            return;
        }

        setLoading(true)  
        try {
            const response = await Auth.forgotPasswordSubmit(data.username, data.code, data.password);
            navigate('/')
          }catch(e){
            setError(e.message)
        }
        setLoading(false)
     }   
    return(
        <form className='PasswordForgotPage' 
            onSubmit={handleSubmit((data=>{
                onSingUpPressed(data)
            }))}
        >
            <div className="logo">
                <img src={logo} width="90%"/>
            </div>  
            <div className='PasswordForgotPage-body'>
                <h2>
                    Réinitialisation du mot de passe
                </h2>

                <p className={error? 'text-error': 'none'} >{error}</p>
               
                <input
                    {...register('code', { required: 'ceci est obligatoire'})}
                    placeholder="   saisissez le code envoyez par email"
                />  
                
                {errors.code && <p className="text-error">{errors.code?.message}</p>}

                   <input
                    {...register('username', { required: 'ceci est obligatoire'})}
                    placeholder="   saisissez votre adresse mail "
                />   
                {errors.username && <p className="text-error">{errors.username?.message}</p>}

                <input
                    {...register('password', { required: 'ceci est obligatoire'})}
                    placeholder="   saisissez votre nouveau mot de passe "
                    type="password"
                />                
                {errors.password && <p className="text-error">{errors.password?.message}</p>}
                
                <DefaultButton 
                    text={"continuer"}  
                    bgcolor={"#eb0625"} 
                    textcolor={"white"} 
                    width={"100%"} 
                    height={"50px"} 
                    marginTop={"10px"}
                    WebkitBoxShadow={'10px 10px 15px -10px rgba(245,59,80,1)'} 
                    MozBoxShadow={'10px 10px 15px -10px rgba(245,59,80,1)'} 
                    boxShadow={'10px 10px 15px -10px rgba(245,59,80,1)'}
                    type="submit"
                    
                    />

            </div>

        </form>
    )   
}