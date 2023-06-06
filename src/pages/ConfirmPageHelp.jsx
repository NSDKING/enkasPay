import { useState, useRef, useEffect} from 'react';
import logo from './img/logo.png'
import "./css/register.css"
import DefaultButton from '../components/DefaultButton';
import DefaultButtonLink from '../components/DefaultbuttonLink';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { useForm } from "react-hook-form";
import { createUser } from '../graphql/mutations';
import { useLocation, useNavigate } from "react-router-dom";




export default function ConfirmPageHelp() {
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const {formState: {errors}, handleSubmit, register, watch} = useForm();
    const [loading, setLoading] = useState(false)
 
    const username = watch("email")


 
    const onConfirmPressed = async (data) =>{

        if(loading){
            return;
        }
        
        setLoading(true)  
        console.log(data)
        try {
            const response = await Auth.confirmSignUp(data.email, data.code);
            const signresponse = await Auth.signIn(data.email, data.password);
            navigate("/data-registration");
            
         }catch(e){
            setError(e.message)

         }
        setLoading(false)
     }   

     const onResendPress = async () =>{
        if(loading){
            return;
        }
        setLoading(true)  
         try {
            const response = await Auth.resendSignUp(username);
            alert("code renvoyé")
        
            }catch(e){
                setError(e.message)
            }
        setLoading(false)


     }


    return(
        <section className='registerPage'>
            <div className="logo" onClick={()=>{
                    navigate("/")
                }}>               
                <img src={logo} width="90%"/>
            </div>    
            <form className='registerPage-body' onSubmit={handleSubmit((data=>{
                            onConfirmPressed(data)
                        }))}> 
 
                        <h2>confirme ton email</h2>

                        <p className={error? 'text-error': 'none'} >{error}</p>

                        <input
                            className='form-input'
                            {...register('email', { required: 'ceci est obligatoire'})}
                            type='mail'
                            placeholder="   saisissez votre adresse mail"
                        />
                        {errors.email && <p className="text-error">{errors.email?.message}</p>}

                        <input
                            className='form-input'
                            {...register('password', { required: 'ceci est obligatoire'})}  
                            type='password'
                            placeholder="   saisissez votre mot de passe"
                        />
                        {errors.password && <p className="text-error">{errors.password?.message}</p>}


                        
                        <input 
                            className='form-input'
                                {...register('code', { required: 'ceci est obligatoire'})}
                                placeholder='  entre ton code de confirmation'
                        />
                        {errors.code && <p className="text-error">{errors.code?.message}</p>}
                            
                        
                        <DefaultButton 
                            text={"continuer"} 
                            bgcolor={"#eb0625"} 
                            textcolor={"white"} 
                            width={"100%"} 
                            height={"50px"} 
                            marginTop={"30px"} 
                            WebkitBoxShadow={'10px 10px 15px -10px rgba(245,59,80,1)'} 
                            MozBoxShadow={'10px 10px 15px -10px rgba(245,59,80,1)'} 
                            boxShadow={'10px 10px 15px -10px rgba(245,59,80,1)'}
                            type={'submit'}
                        />

                        <DefaultButton
                            text={"renvoyer"} 
                            bgcolor={" #f6dfe2"} 
                            textcolor={"#eb0625"} 
                            width={"90%"} 
                            height={"50px"} 
                            marginTop={"25px"} 
                            location={"/login"}
                            onPress={onResendPress}

                                />


                        </form>

            <p className='p2'>vous avez un  compte ?</p>
            <DefaultButtonLink text={"connexion"} bgcolor={" #f6dfe2"} textcolor={"#eb0625"} width={"90%"} height={"50px"} marginTop={"10px"} location={"/login"}/>
            
        </section>
    )
}
