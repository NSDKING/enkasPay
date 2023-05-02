import logo from './img/logo.png'
import "./css/login.css"
import DefaultButton from '../components/DefaultButton'
import { Link } from 'react-router-dom'
import DefaultButtonLink from '../components/DefaultbuttonLink'
import { Auth } from 'aws-amplify'
 import { useState } from 'react'
import { useForm } from "react-hook-form";


const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

 
export default function LoginPage() {
    const {formState: {errors}, handleSubmit, register, watch} = useForm();
    const [loading, setLoading] = useState(false)

 
    const onSingInPressed = async (data) =>{
        if(loading){
            return;
        }
        
        setLoading(true)
        try {

            console.log('okay dude')
            const response = await Auth.signIn(data.email, data.password)
             
        }catch(e){
                alert('oops '+ e.message)

        }
        setLoading(false)
        
 

     }   

    return(
        <form className='loginpage' 
            onSubmit={handleSubmit((data=>{
             onSingInPressed(data)              
        }))}>
            <div className="logo">
                <img src={logo} width="90%"/>
            </div>

            
            <div className='loginpage-body'>
                <h2>Connectez vous à enkasPay</h2>

                <input
                    {...register('email', { required: 'ceci est obligatoire'})}
                    type='mail'
                    placeholder="   saisissez votre adresse mail"
                />
                <p>{errors.email?.message}</p>
              <input
                    {...register('password', { required: 'ceci est obligatoire'})}  
                    type='password'
                    placeholder="   saisissez votre mot de passe"
                />
                <p>{errors.email?.message}</p>
                

                <Link className='p1' style={{ textDecoration: 'none' }} to={"/password-reset"}>mot de passe oublié ?</Link>

                <DefaultButton text={loading? 'Loading ....': 'Sign In'} bgcolor={"#eb0625"} textcolor={"white"} width={"100%"} height={"50px"} marginTop={"30px"} WebkitBoxShadow={'10px 10px 15px -10px rgba(245,59,80,1)'} MozBoxShadow={'10px 10px 15px -10px rgba(245,59,80,1)'} boxShadow={'10px 10px 15px -10px rgba(245,59,80,1)'} type={'submit'}/>

                <p className='p2'>vous n'avez pas de compte ?</p>
                <DefaultButtonLink text={"S'inscrire"} bgcolor={" #f6dfe2"} textcolor={"#eb0625"} width={"100%"} height={"50px"} marginTop={"10px"} location={"/register"}/>
        
            </div>
            
        </form>
    )   
}