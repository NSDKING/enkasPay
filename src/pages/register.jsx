import { useState, useRef, useEffect} from 'react';
import logo from './img/logo.png'
import "./css/register.css"
import DefaultButton from '../components/DefaultButton';
import DefaultButtonLink from '../components/DefaultbuttonLink';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { useForm } from "react-hook-form";
import { createUser } from '../graphql/mutations';
import { useNavigate } from "react-router-dom";


export default function RegisterPage() {
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const {formState: {errors}, handleSubmit, register} = useForm();
    const [loading, setLoading] = useState(false)
 
 
    useEffect(() => {
        const handleClick = () => {
          setError(false);
        };
    
        window.addEventListener('click', handleClick);
    
        return () => {
          window.removeEventListener('click', handleClick);
        };
      }, []);

      
    const onSingUpPressed = async (data) =>{
        if(loading){
            return;
        }

        setLoading(true)  
        try {
            const response = await Auth.signUp({
                username: data.email,
                password:data.password,
            });
          
            navigate("/register-confirmation", { state: { 
                password: data.password,
                email:data.email,
            } }) 
             
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
            
                    <form className='registerPage-body' 
                        onSubmit={handleSubmit((data=>{
                        onSingUpPressed(data)
                    }))}>
                    
                        <h2>créer un compte enkasPay</h2>

                        <p className={error? 'text-error': 'none'} >{error}</p>
                        <input
                            className='form-input'

                            {...register('email', { required: 'ceci est obligatoire'})}
                            type="email"
                            placeholder="   saisissez votre adresse mail"
                            />
                            {errors.email && <p className="text-error">{errors.email?.message}</p>}


                        <input
                            className='form-input'
                            {...register('password', { required: 'ceci est obligatoire'})}
                            placeholder="   saisissez votre mot de passe"
                            type="password"
                        />
                            {errors.password && <p className="text-error">{errors.password?.message}</p>}


                        <DefaultButton 
                            text={loading? 'Loading ....': 'continuer'} 
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
    
                    </form>
                  
            <p className='p2'>vous avez un  compte ?</p>
            <DefaultButtonLink text={"connexion"} bgcolor={" #f6dfe2"} textcolor={"#eb0625"} width={"90%"} height={"50px"} marginTop={"10px"} location={"/login"}/>
        </section>
    )   
}