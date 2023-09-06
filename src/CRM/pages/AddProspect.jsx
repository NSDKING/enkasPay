import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import DefaultButton from "../../components/DefaultButton";
import { createProspect } from "../../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";
import { listUsers } from "../../graphql/queries";
import { useLocation } from "react-router-dom";

export default function AddProspect() {
    const { state } = useLocation();
    const userID = state  ;

    const { formState: { errors }, handleSubmit, register, control } = useForm();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [userList, setUserList] = useState([]);
    const navigate = useNavigate();

    const getListUsers = async () => {
        if (loading) {
            return;
        }

        setLoading(true);
        try {
            const response = await API.graphql(graphqlOperation(listUsers, { limit: 1000 }));
            setUserList(response.data.listUsers.items);
        } catch (e) {
            console.log(e);
        }
        setLoading(false);
    }

    useEffect(() => {
        getListUsers();
        console.log(userID);
        console.log(userID.userID);
    }, []);

    const onPressed = async (data) => {
        const input = {
            contrat: data.contrat,
            valeur: data.valeur,
            statut: data.statut,
            userID: userID.userID,
        }
        const response = await API.graphql(graphqlOperation(createProspect, {
            input: input,
        }));
        console.log(response);
        navigate(-1);
    }

    // Conditionally disable the button if user.id is null or falsy
    const isButtonDisabled = !userID.userID;

    return (
        <section>
            <form
                className='registerPage-body'
                onSubmit={handleSubmit((data) => {
                    onPressed(data);
                })}
            >
                <h2>ajouter un prospect</h2>
                <p className={error ? 'text-error' : 'none'}>{error}</p>

                <input
                    className='form-input'
                    {...register('contrat', { required: 'ceci est obligatoire' })}
                    placeholder="   contrat"
                    type="text"
                />
                {errors.contrat && <p className="text-error">{errors.contrat?.message}</p>}

                <Controller
                    name="statut"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <select {...field} >
                            <option value=" ">statut</option>
                            <option value="conclue">Conclue</option>
                            <option value="Nouveau">Nouveau</option>
                            <option value="perdu">Perdu</option>
                            <option value="proposition">Proposition</option>
                            <option value="decouverte">Découverte</option>
                            <option value="negotiation">Négociation</option>
                        </select>
                    )}
                />

                {errors.statut && <p className="text-error">{errors.statut?.message}</p>}

                <input
                    className='form-input'
                    {...register('valeur', { required: 'ceci est obligatoire' })}
                    placeholder="   valeur"
                    type="number"
                />
                {errors.valeur && <p className="text-error">{errors.valeur?.message}</p>}

                <DefaultButton
                    text={loading ? 'Loading ....' : 'continuer'}
                    bgcolor={"#eb0625"}
                    textcolor={"white"}
                    width={"100%"}
                    height={"50px"}
                    marginTop={"30px"}
                    WebkitBoxShadow={'10px 10px 15px -10px rgba(245,59,80,1)'}
                    MozBoxShadow={'10px 10px 15px -10px rgba(245,59,80,1)'}
                    boxShadow={'10px 10px 15px -10px rgba(245,59,80,1)'}
                    type={'submit'}
                    disabled={isButtonDisabled} // Conditionally disable the button
                />
            </form>
        </section>
    )
}
