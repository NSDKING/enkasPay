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
    const [step, setStep] = useState(1);
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const {formState: {errors}, handleSubmit, register, watch} = useForm();
    const [loading, setLoading] = useState(false)
 
    const username = watch("email")

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

     const onConfirmPressed = async (data) =>{
        if(loading){
            return;
        }
        
        setLoading(true)  
        console.log(data)
        try {
            const response = await Auth.confirmSignUp(data.email,data.code);
            
             setStep(3)
            const signresponse = await Auth.signIn(data.email, data.password)
            
         }catch(e){
            setError(e.message)

         }
        setLoading(false)
     }   

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
                id: authUser.attributes.sub,
                mail: data.email,
                city: data.city,
                FamilyName:data.nom,
                birthdate:data.birthday,
                LastName:data.prenom,
                phoneNumber:data.number,
              };
        
            console.log(newUser)
            console.log(data)
            const response = await API.graphql(graphqlOperation(createUser,
                {input: {
                    id: authUser.attributes.sub,
                    mail: data.email,
                    city: data.city,
                    FamilyName:data.nom,
                    birthdate:data.birthday,
                    LastName:data.prenom,
                    phoneNumber:data.number
                   }
            
            }))
             navigate("/")
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