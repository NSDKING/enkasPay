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
    const [useriD, setUserID] = useState(null);
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
          
            setStep(2)
            console.log(response)
            
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
            setUserID(response.userSub)
            console.log(response)
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
        console.log(data)
        try {
            const newUser = {
                id: authUser.attributes.sub,
                mail: data.email,
                city: data.city,
                FamilyName:data.nom,
                LastName:data.prenom,
                phoneNumber:6054,
                 
              };
        
             
            const response =  await API.graphql(
                graphqlOperation(createUser, { input: newUser })
            );
            console.log(response)
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
            <div className="logo">
                <img src={logo} width="90%"/>
            </div>    
        
            {
                    step==1&&(  
                    <form className='registerPage-body' 
                        onSubmit={handleSubmit((data=>{
                        onSingUpPressed(data)
                    }))}>
                    
                        <h2>créer un compte enkasPay</h2>

                        <p className={error? 'text-error': 'none'} >{error}</p>
                        <input
                            {...register('email', { required: 'ceci est obligatoire'})}
                            type="email"
                            placeholder="   saisissez votre adresse mail"
                            />
                            {errors.email && <p className="text-error">{errors.email?.message}</p>}


                        <input
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
                 )
                }
                {
                    step==3&&(  
                    <form className='registerPage-body' 
                        onSubmit={handleSubmit((data=>{
                            setStep(4)
                    }))}>
                     
                        <h2>créer un compte enkasPay</h2>

                        <p className={error? 'text-error': 'none'} >{error}</p>

                        <input
                            {...register('nom', { required: 'ceci est obligatoire'})}
                            placeholder="   saisissez votre nom de famille"
                            
                            />
                            {errors.nom && <p className="text-error">{errors.nom?.message}</p>}


                        <input
                            {...register('prenom', { required: 'ceci est obligatoire'})}
                            placeholder="   saisissez votre prenom"
                            />
                            {errors.prenom && <p className="text-error">{errors.prenom?.message}</p>}


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
                 )
                }
                {
                    step==2&&(
                        <form className='registerPage-body' onSubmit={handleSubmit((data=>{
                            onConfirmPressed(data)
                        }))}> 
 
                            <h2>confirme ton email</h2>

                            <p className={error? 'text-error': 'none'} >{error}</p>
                        
                        
                            <input 
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
                    )  
                }
                {
                    step==4&&(
                        <form className='registerPage-body' onSubmit={
                            handleSubmit((data=>{
                                onRegisterData(data)
                            }))
                        }>
                        
                            <h2>créer un compte enkasPay</h2>
                       
                        <p className={error? 'text-error': 'none'} >{error}</p>


                            <input 
                                {...register('city', { required: 'ceci est obligatoire'})}
                                placeholder='   saisissez votre ville de residence'
                            />
                            {errors.city && <p className="text-error">{errors.city?.message}</p>}

                            <input 
                                {...register('birthday', { required: 'saisi ta date de naissance'})}
                                type="date"
                                placeholder='   saisissez votre date de naissance'
                            />
                            {errors.birthday && <p className="text-error">{errors.birthday?.message}</p>}

                            <input 
                                {...register('number', { 
                                    required: 'entre ton numero comme celui ci:+237693040500',
                                    pattern: {
                                                value: /^\+(?:[0-9]\s?){6,14}[0-9]$/i,
                                                message: "entre ton numero comme celui ci:+237693040500"
                                            }
                                    })}
                                placeholder='saisissez votre numero de telephone'
                            />
                            {errors.number && <p className="text-error">{errors.number?.message}</p>}

                        

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
                                />

                        </form>
                    )  
                }

 

            <p className='p2'>vous avez un  compte ?</p>
            <DefaultButtonLink text={"connexion"} bgcolor={" #f6dfe2"} textcolor={"#eb0625"} width={"90%"} height={"50px"} marginTop={"10px"} location={"/login"}/>
        </section>
    )   
}