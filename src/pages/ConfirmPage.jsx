import { useState, useRef, useEffect} from 'react';
import logo from './img/logo.png'
import "./css/register.css"
import DefaultButton from '../components/DefaultButton';
import DefaultButtonLink from '../components/DefaultbuttonLink';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { useForm } from "react-hook-form";
import { createUser } from '../graphql/mutations';
import { useLocation, useNavigate } from "react-router-dom";



export default function ConfirmPage() {
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const {formState: {errors}, handleSubmit, register} = useForm();
    const [loading, setLoading] = useState(false)
    const { state } = useLocation();
    const { password, email } = state || {};


 
    const onConfirmPressed = async (data) =>{

        if(loading){
            return;
        }
        
        setLoading(true)  
        console.log(data)
        try {
            console.log(state)
            const response = await Auth.confirmSignUp(email, data.code);
            const signresponse = await Auth.signIn(email, password);
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
            const response = await Auth.resendSignUp(email);
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
