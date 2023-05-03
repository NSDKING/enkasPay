import { useState } from 'react';
import logo from './img/logo.png'
import "./css/register.css"
import DefaultButton from '../components/DefaultButton';
import DefaultButtonLink from '../components/DefaultbuttonLink';
import { CSSTransition } from 'react-transition-group';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { useForm } from "react-hook-form";
import { createUser, updateUser } from '../graphql/mutations';
import { useNavigate } from "react-router-dom";

  

export default function RegisterPage() {
    const [step, setStep] = useState(1);
    const [useriD, setUserID] = useState(null);
    const navigate = useNavigate();
    const {formState: {errors}, handleSubmit, register, watch} = useForm();
    const [loading, setLoading] = useState(false)
 
    const username = watch("email")
      
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
            console.log(e.name)
       
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
            console.log(e)
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
            console.log(e)
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
            console.log(e)
         }
        setLoading(false)


     }

 
    return(
        <section className='registerPage'
        >
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

                        <input
                            {...register('email', { required: 'ceci est obligatoire'})}
                            type="email"
                            placeholder="   saisissez votre adresse mail"
                            />

                        <input
                            {...register('password', { required: 'ceci est obligatoire'})}
                            placeholder="   saisissez votre mot de passe"
                            type="password"
                                                        />

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

                        <input
                            {...register('nom', { required: 'ceci est obligatoire'})}
                            placeholder="   saisissez votre nom de famille"
                            />

                        <input
                            {...register('prenom', { required: 'ceci est obligatoire'})}
                            placeholder="   saisissez votre prenom"
                            />

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

                        
                        
                            <input 
                                    {...register('code', { required: 'ceci est obligatoire'})}
                                    placeholder='  entre ton code de confirmation'
                                />
                                
                        
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
                                onPress={onResendPress}
                                />

                            <DefaultButton
                                text={"renvoyer"} 
                                bgcolor={" #f6dfe2"} 
                                textcolor={"#eb0625"} 
                                width={"90%"} 
                                height={"50px"} 
                                marginTop={"25px"} 
                                location={"/login"}/>


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

                            <input 
                                {...register('city', { required: 'ceci est obligatoire'})}
                                placeholder='   saisissez votre ville de residence'
                            />
                            <input 
                                {...register('birthday', { required: 'ceci est obligatoire'})}
                                type="date"
                                placeholder='   saisissez votre date de naissance'
                            />
                            <input 
                                {...register('number', { required: 'ceci est obligatoire'})}
                                placeholder='   saisissez votre numero de telephone'
                            />
                        

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