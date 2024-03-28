import "./index.css";
import logo from "./img/logo.png";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createSitchi } from "../../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";
import { listSitchis } from "../../graphql/queries";
 

export default function FormPage() {
    const {formState: {errors}, handleSubmit, register} = useForm();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        const get = async()=>{
            const response = await API.graphql(graphqlOperation(listSitchis));
            console.log(response)
        }
        get();
    
    }, [])
    
    const onSingUpPressed = async (data) =>{
        if(loading){
            return;
        }

        setLoading(true)  
        try {
            
            const newUser = {
                Nom:data.nom,
                Prenom: data.prenom,
                numero: data.phoneNumber,
                cite:data.citéUniversitaire,
              };
            console.log(newUser) 
            alert("le procecuss est lancé tu vas etre redirigé sur whatsapp")
            const response = await  API.graphql(graphqlOperation(createSitchi, {input: newUser}))
            console.log(response) 
          }catch(e){
            setError(e.message)
        
         }
        setLoading(false)
     }   



    return(
        <div className="sitchi-page">
            <img src={logo} alt="Logo" className="fistImage"/>
            <div className="smarge"></div>
            <div className="main_section">
            <form className="form" onSubmit={handleSubmit(data => onSingUpPressed(data))}>
                    <p className={error ? 'text-error' : 'none'}>{error}</p>
                    <input
                        className='form-input'
                        {...register('nom', { required: 'Ce champ est obligatoire' })}
                        type="text"
                        placeholder="Nom"
                    />
                    {errors.nom && <p className="text-error">{errors.nom.message}</p>}

                    <input
                        className='form-input'
                        {...register('prenom', { required: 'Ce champ est obligatoire' })}
                        type="text"
                        placeholder="Prenom"
                    />
                    {errors.prenom && <p className="text-error">{errors.prenom.message}</p>}

                    <input
                        className='form-input'
                        {...register('phoneNumber', { required: 'Ce champ est obligatoire' })}
                        type="number"
                        placeholder="Numero de téléphone"
                    />
                    {errors.phoneNumber && <p className="text-error">{errors.phoneNumber.message}</p>}

                    <select
                        className='form-input'
                        {...register('citéUniversitaire', { required: 'Ce champ est obligatoire' })}
                    >
                        <option value="">Choisir une cité universitaire</option>
                        <option value="Terrasse">Terrasse</option>
                        <option value="Prison">Prison</option>
                        <option value="Commissariat">Commissariat</option>
                        <option value="Labyrinthe">Labyrinthe</option>
                        <option value="Cité des anges">Cité des anges</option>
                        <option value="Fatma">Fatma</option>
                        <option value="Residence ucac">Residence ucac</option>
                    </select>
                    {errors.citéUniversitaire && <p className="text-error">{errors.citéUniversitaire.message}</p>}

                    <button 
                        type="submit"
                        disabled={loading}
                    >precommande</button>
                </form>
            </div>
        </div>
    );
}

