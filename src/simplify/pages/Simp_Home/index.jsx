import DefaultButtonLink from "../../../components/DefaultbuttonLink"
import "./index.css"
import { useNavigate } from "react-router-dom";
import logo from './img/logo.png'
import { useState,useEffect } from "react";
import { API, Auth, graphqlOperation, Hub } from "aws-amplify";
import { getUser } from "../../../graphql/queries";
import DefaultButton from "../../../components/DefaultButton";


export default function SympHome() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [user, setUser]= useState(undefined)
 

    const checkUser = async ()=>{
        try {
            const authUser = await Auth.currentAuthenticatedUser({
                bypassCache: true,
              });
            const userData = await API.graphql(
                graphqlOperation(getUser, { id: authUser.attributes.sub })
              );
            
          setUser(authUser)
      
        } catch(e){
            setUser(null);
    
        }

        }

        useEffect(() => {
            checkUser()
          }, [ ])

    return(
        <section
            className="symlify-version"
        >

            <div className="logo" onClick={()=>{
                    navigate("/simplify-website")
                }}>
                    <img src={logo} width="90%"/>
            </div> 
            
            <div className="information-box">
                <p className="p-text">
                    cette interface te permet d'avoir des comptes netflix des <b>2850</b> en ligne en moins de 30 min apres ton paiement
                </p>
 
             
            </div>

            <DefaultButton text={'commencer'} bgcolor={"#eb0625"} textcolor={"white"} width={"80%"} height={"50px"} marginTop={"30px"} WebkitBoxShadow={'10px 10px 15px -10px rgba(245,59,80,1)'} MozBoxShadow={'10px 10px 15px -10px rgba(245,59,80,1)'} boxShadow={'10px 10px 15px -10px rgba(245,59,80,1)'} onPress={()=>{                    
                if(user==undefined){
                        navigate('/simplify-website-login')
                        }
                    else(
                        navigate("/simplify-netflix-solo-choice")
                    )}} />


             
        </section>
    )

}

