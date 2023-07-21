import { API, Auth, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createAffiliation } from "../graphql/mutations";
import logo from './img/logo.png'
import { useForm } from "react-hook-form";
import DefaultButton from "../components/DefaultButton";
import { getUser } from "../graphql/queries";


export default function AffiliationForm() {
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const {formState: {errors}, handleSubmit, register} = useForm();
    const [loading, setLoading] = useState(false)
    const [user, setUser]= useState(null)
    const [userData, setUserData]= useState(null)
    
    const GetUserData = async ()=>{
        setLoading(true)
        try{
            const authUser = await Auth.currentAuthenticatedUser({
                bypassCache: true,
              });
            const userData = await API.graphql(
                graphqlOperation(getUser, { id: authUser.attributes.sub })
              );
            setUserData(userData.data.getUser)
            navigate("/affiliation-main")
        }catch(e){
            console.log(e)
        }
        setLoading(false)
    }

    const checkUser = async ()=>{
        setLoading(true)
        try {
            const authUser = await Auth.currentAuthenticatedUser({
                bypassCache: true,
              });
          
          setUser(authUser)
      
        } catch(e){
            setUser(null);
    
        }
        setLoading(false)
     
        }
  
        useEffect(
            () => {
              checkUser()
              GetUserData()
            },
            [],
          )
    
  
        const getDay = () => {
            let today = new Date(),
              day = today.getDate();
            return(day)
          };

        const onSingUpPressed = async (data) =>{
        if(loading){
            return;
        }

        setLoading(true)  
        try {
   
            if(user===null){
                alert("tu n'es pas connecté")
                navigate('/login')
            }
            else{
                const authUser = await Auth.currentAuthenticatedUser({
                    bypassCache: true,
                  });
                // code partenaire
                let code = userData.city[0]+ userData.city[1]  + userData.FamilyName[0]  + userData.FamilyName[1] + userData.LastName[0]+ data.age + getDay()

                //create the affiliation account  
                const input = { 
                    userID: authUser.attributes.sub,
                    code:code,
                    utilisations:0,
                    ca:0,
                    statut: "amateur",

                }
                const response = await API.graphql(graphqlOperation(createAffiliation,{
                    input: input,
                }));
                console.log(response)
                console.log(code)
             }
          }catch(e){
            console.log(e.message)
            setError(e.message)

         }
        setLoading(false)
     }   

    const handleLink = async () => {
        if(user===null){
            alert("tu n'es pas connecté")
            navigate('/login')
        }else{
            navigate('/affiliation-form')

        }

       };
    return(
        <section className='registerPage'>
                <div className="logo" onClick={()=>{
                                    navigate("/")
                                }}>               
                                <img src={logo} width="90%"/>
                </div>   


                <form className='registerPage-body' 
                        onSubmit={handleSubmit((data=>{
                        onSingUpPressed(data)
                    }))}>

                        <h2>devenir partenaire</h2>

                        <p className={error? 'text-error': 'none'} >{error}</p>
                        
 
                        <input
                            className='form-input'
                            {...register('age', { required: 'ceci est obligatoire'})}
                            placeholder="   saisissez votre age"
                            type="text"
                        />

                        
                            {errors.age && <p className="text-error">{errors.age?.message}</p>}



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

        </section>
    )
}
