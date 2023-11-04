import { useState, useRef, useEffect} from 'react';
import logo from './img/logo.png'
import "./index.css"
import DefaultButton from '../components/DefaultButton';
import DefaultButtonLink from '../components/DefaultbuttonLink';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { useForm, Controller } from "react-hook-form";
import { createUser } from '../graphql/mutations';
import { useLocation, useNavigate } from "react-router-dom";
 


export default function SympDataRegistration() {
    const [step, setStep] = useState(1);
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const {formState: {errors}, handleSubmit, register, control} = useForm();
    const [loading, setLoading] = useState(false)

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
                mail: authUser.attributes.email,
                city: data.city,
                FamilyName:data.nom,
                birthdate:data.birthday,
                LastName:data.prenom,
                phoneNumber:data.number
              };
        
            const response = await API.graphql(graphqlOperation(createUser, {input: newUser}))
             
            navigate("/simplify-website")
           }catch(e){
            setError(e.message)
         }
        setLoading(false)
     }

    return(
    <section className='registerPage'>
                <div className="logo" onClick={()=>{
                        navigate("/simplify-website")
                    }}>               
                    <img src={logo} width="90%"/>
                </div>    

                {
                    step==1&&(  
                    <form className='registerPage-body' 
                        onSubmit={handleSubmit((data=>{
                            setStep(2)
                    }))}>
                     
                        <h2>créer un compte enkasPay</h2>

                        <p className={error? 'text-error': 'none'} >{error}</p>

                        <input
                            className='form-input'
                            {...register('nom', { required: 'ceci est obligatoire'})}
                            placeholder="   saisissez votre nom de famille"
                            
                            />
                            {errors.nom && <p className="text-error">{errors.nom?.message}</p>}


                        <input
                            className='form-input'

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
                        <form className='registerPage-body' onSubmit={
                            handleSubmit((data=>{
                                onRegisterData(data)
                            }))
                        }>
                        
                            <h2>créer un compte enkasPay</h2>
                       
                        <p className={error? 'text-error': 'none'} >{error}</p>


                            <Controller
                                name="city"
                                control={control}
                                defaultValue="Douala"
                                render={({ field }) => (
                                <select {...field} placeholder="Saisissez votre ville de résidence">
                                    <option value="Douala">Douala</option>
                                    <option value="Yaounde">Yaounde</option>
                                    <option value="Bafoussam">Bafoussam</option>
                                    <option value="Edea">Edea</option>
                                    <option value="Ebolowa">Ebolowa</option>
                                    <option value="Bertoua">Bertoua</option>
                                    <option value="Bamenda">Bamenda</option>
                                    <option value="Buea">Buea</option>
                                    <option value="Garoua">Garoua</option>
                                    <option value="Maroua">Maroua</option>
                                </select>
                                )}
                            />

                            {errors.city && <p className="text-error">{errors.city?.message}</p>}

                            <input 
                                className='form-input'
                                {...register('birthday', { required: 'saisi ta date de naissance'})}
                                type="date"
                                placeholder='   saisissez votre date de naissance'
                            />
                            {errors.birthday && <p className="text-error">{errors.birthday?.message}</p>}

                            <input 
                                className='form-input'
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
