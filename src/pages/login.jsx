import logo from './img/logo.png'
import "./css/login.css"
import DefaultButton from '../components/DefaultButton'
import { Link } from 'react-router-dom'
import DefaultButtonLink from '../components/DefaultbuttonLink'
 
export default function LoginPage() {
    return(
        <section className='loginpage'>
            <div className="logo">
                <img src={logo} width="90%"/>
            </div>

            <div className='loginpage-body'>
                <h2>Connectez vous à enkasPay</h2>

                <input placeholder='   saisissez votre adresse mail'/>
                <input placeholder='   saisissez votre adresse mot de passe'/>


                <Link className='p1' style={{ textDecoration: 'none' }} to={"/password-reset"}>mot de passe oublié ?</Link>

                <DefaultButton text={"continuer"} bgcolor={"#eb0625"} textcolor={"white"} width={"100%"} height={"50px"} marginTop={"30px"} WebkitBoxShadow={'10px 10px 15px -10px rgba(245,59,80,1)'} MozBoxShadow={'10px 10px 15px -10px rgba(245,59,80,1)'} boxShadow={'10px 10px 15px -10px rgba(245,59,80,1)'}/>

                <p className='p2'>vous n'avez pas de compte ?</p>
                <DefaultButtonLink text={"S'inscrire"} bgcolor={" #f6dfe2"} textcolor={"#eb0625"} width={"100%"} height={"50px"} marginTop={"10px"} location={"/register"}/>
        
            </div>
            
        </section>
    )   
}