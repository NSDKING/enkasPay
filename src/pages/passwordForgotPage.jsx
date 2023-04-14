import logo from './img/logo.png'
import "./css/PasswordForgotPage.css"
import DefaultButton from '../components/DefaultButton'
 
export default function PasswordForgotPage() {
    return(
        <section className='PasswordForgotPage'>
            <div className="logo">
                <img src={logo} width="90%"/>
            </div>  
            <div className='PasswordForgotPage-body'>
                <h2>
                    Réinitialisation du mot de passe
                </h2>
                <p className='p1'>
                    Entrez l'<b>adresse e-mail</b> avec laquelle vous vous êtes inscrit. Nous allons vous envoyer un e-mail avec un lien pour réinitialiser votre mot de passe.
                </p>
                <input placeholder='   saisissez votre adresse mail'/>
                
                <DefaultButton text={"continuer"} bgcolor={"#eb0625"} textcolor={"white"} width={"100%"} height={"50px"} marginTop={"10px"} WebkitBoxShadow={'10px 10px 15px -10px rgba(245,59,80,1)'} MozBoxShadow={'10px 10px 15px -10px rgba(245,59,80,1)'} boxShadow={'10px 10px 15px -10px rgba(245,59,80,1)'}/>

            </div>

        </section>
    )   
}