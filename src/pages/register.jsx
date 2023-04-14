import { useState } from 'react';
import logo from './img/logo.png'
import "./css/register.css"
import DefaultButton from '../components/DefaultButton';
import DefaultButtonLink from '../components/DefaultbuttonLink';
import { CSSTransition } from 'react-transition-group';

export default function RegisterPage() {
    const [step, setStep] = useState(1);
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [city, setCity] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const handleSubmit1 = (e) => {
        e.preventDefault();
        setStep(2)
      };

    const handleSubmit2 = (e) => {
        e.preventDefault();
        setStep(3)
      };
    const handleSubmit3 = (e) => {
        e.preventDefault();
        setStep(1)
      };
 
    return(
        <section className='registerPage'>
            <div className="logo">
                <img src={logo} width="90%"/>
            </div>    
            <CSSTransition
                in={step === 1}
                timeout={200}
                classNames="step"
                unmountOnExit
            >
                <form className='registerPage-body'  onSubmit={handleSubmit1}>
                    <h2>créer un compte enkasPay</h2>

                    <input placeholder='   saisissez votre nom' />
                    <input placeholder='   saisissez votre prenom' />

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

            </CSSTransition>

            <CSSTransition
                in={step === 2}
                timeout={500}
                classNames="step"
                unmountOnExit
            >
                <form className='registerPage-body' onSubmit={handleSubmit2}> 
                    <h2>créer un compte enkasPay</h2>

                    <input placeholder='   saisissez votre ville de residence' />
                    <input placeholder='   saisissez votre date de naissance'type="date" />


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
            </CSSTransition>

 
            <CSSTransition
                in={step === 3}
                timeout={500}
                classNames="step"
                unmountOnExit
            >
                <form className='registerPage-body' onSubmit={handleSubmit3}>
                    <h2>créer un compte enkasPay</h2>

                    <input placeholder='   saisissez votre adresse mail'  />
                    <input placeholder='   saisissez votre adresse mot de passe' />


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
            </CSSTransition>

  
            <p className='p2'>vous avez un  compte ?</p>
            <DefaultButtonLink text={"connexion"} bgcolor={" #f6dfe2"} textcolor={"#eb0625"} width={"90%"} height={"50px"} marginTop={"10px"} location={"/login"}/>
        </section>
    )   
}