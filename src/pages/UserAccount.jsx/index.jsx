import "./index.css"
import { useState, useRef, useEffect} from 'react';
import logo from './img/logo.png'
import { useNavigate } from "react-router-dom";
import DefaultButtonLink from "../../components/DefaultbuttonLink";
import { API, Auth, graphqlOperation, Hub } from "aws-amplify";
import { getUser } from "../../graphql/queries";
import { set } from "date-fns";
  



export default function UserAccountPage() {
    const navigate = useNavigate();
    const [staf, setStaf]= useState(false)
    const [user, setUser]= useState(undefined)
    const [solde, setSolde]= useState(undefined)
    const [Name, setName]= useState(undefined)
    const [UserData, setUserData]= useState(undefined)
 
     
    const checkUser = async ()=>{
        try {
            const authUser = await Auth.currentAuthenticatedUser({
                bypassCache: true,
              });
            const userData = await API.graphql(
                graphqlOperation(getUser, { id: authUser.attributes.sub })
              );
            
          setUser(authUser.attributes.sub)
          setStaf(userData.data.getUser.staff)
          setUserData(userData.data.getUser)
          UserData.solde?(setSolde(UserData.solde)):(setSolde(0))
          setName(userData.data.getUser.FamilyName + userData.data.getUser.LastName)
      
        } catch(e){
            setUser(null);
    
        }

        }


        useEffect(()=>{
            checkUser();
        },[])
    return(
        <section className="userAccount">
            <div className="logo" onClick={()=>{
                    navigate("/")
                }}>
                    <img src={logo} width="90%"/>
            </div> 
            
            <div className="userAccount-box-head">
               <p className="p-title">{Name}</p> 
               <p className="p-title">{UserData.phoneNumber}</p> 
                <div className="soldebox">
                    <p className="p-title">{solde}</p> 
                </div>
            </div>

            <div className="horizontal-box-container">
                <div className="horizontal-box">
                    <div className="text-box" onClick={()=>{
                        user&&(navigate("/User-account-list", { state: {  item: user } }))
                    }}>
                        <p className="p-text">mes comptes</p>  
                    </div>
                </div>
                <div className="horizontal-box"onClick={() => {
                            alert('bientot pret');
                        }}>
                    <div className="text-box" >
                        <p className="p-text">mes cartes cadeaux</p>  
                    </div>
                 </div>
                 <div className="horizontal-box" onClick={() => {
                            alert('bientot pret');
                        }}>
                        <div className="text-box" >
                            <p className="p-text">mes commandes</p>
                        </div>
                 </div>

 
            </div>
             <DefaultButtonLink text={"Crediter mon solde"} bgcolor={"rgb(250, 44, 44)"} textcolor={"white"} width={"90%"} height={"50px"} marginTop={"10px"} location={"/crediter-compte"}/>

            </section>
    )

}

