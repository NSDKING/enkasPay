import logo from './img/logo.png'
import "./css/PasswordForgotPage.css"
import DefaultButton from '../components/DefaultButton'
import { useForm } from "react-hook-form";
import { Auth } from 'aws-amplify';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
 
export default function PasswordForgotPage() {
    const {formState: {errors}, handleSubmit, register, watch} = useForm();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false);

          
    const onSingUpPressed = async (data) =>{
        if(loading){
            return;
        }

        setLoading(true)  
        try {
            const response = await Auth.forgotPassword(data.email);
            navigate('/password-reset-confirmation')

             
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

                <p className='p1'>
                    Entrez l'<b>adresse e-mail</b> avec laquelle vous vous êtes inscrit. Nous allons vous envoyer un e-mail avec un lien pour réinitialiser votre mot de passe.
                </p>
                <input
                    {...register('email', { required: 'ceci est obligatoire'})}
                    placeholder="   saisissez votre adresse mail"
                />                
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