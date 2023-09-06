import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { API, graphqlOperation } from "aws-amplify";
import { useLocation } from "react-router-dom";
import DefaultButton from "../../../components/DefaultButton";
import { updateUser } from "../../../graphql/mutations";



export default function Good() {
    const { state } = useLocation();
    const user = state  ;

    const { formState: { errors }, handleSubmit, register, control } = useForm();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        console.log(user.user.user._version)
    },[])

    const onPressed = async(data) => {
        let newCount   
        if(user.user.user.goodcount != null){
                newCount = parseInt(data.count) + user.user.user.goodcount
  
        }else{
                newCount = data.count
         }

        const input = {
            id:user.user.user.id,
            goodcount:newCount,
            _version:user.user.user._version,
          }
         
        const response = await API.graphql(graphqlOperation(updateUser, {
            input: input,
        }));
        navigate(-4)
        console.log(response)
    }

    return(
        <section>
            <form
                className='registerPage-body'
                onSubmit={handleSubmit((data) => {
                    onPressed(data);
                })}
            >
                <h2>nbre de point en plus</h2>
                <p className={error ? 'text-error' : 'none'}>{error}</p>

                <input
                    className='form-input'
                    {...register('count', { required: 'ceci est obligatoire' })}
                    placeholder="   en plus"
                    type="number"
                />
                {errors.contrat && <p className="text-error">{errors.count?.message}</p>}
 
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
                 />
            </form>
        </section>
    )

}

