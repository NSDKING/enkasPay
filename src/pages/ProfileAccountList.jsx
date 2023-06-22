import { useState } from "react";
import StafNavbar from "../components/StafNavbar";
import { listAccounts,listUsers } from "../graphql/queries";
import { API, graphqlOperation } from 'aws-amplify';
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";


export default function ProfilAccountList() {    
    const [loading, setLoading] = useState(false)
    const [AccountList, setAccountList] = useState([])
    const [profileList, setProfileList] = useState([])
    const [searchNum, setSearchNum] = useState('');
    const [userList, setUserList] = useState([])
    const { state } = useLocation();
    const { mail } = state;

        
    const handleupdate = (data)=>{
        navigate("/click-account", { state: {  item: data } }) 
     }

    const navigate = useNavigate();

    const getAccount = async()=>{
        if(loading){
            return;
        }
        setLoading(true)  

        try {

            const response= await API.graphql(graphqlOperation(listAccounts));
            setAccountList(response.data.listAccounts.items)
         }catch(e){
                console.log(e)

        }
        setLoading(false)

       }

       const getListUsers = async()=>{
        if(loading){
          return;
      }
      
      setLoading(true)
      try {
      
        const response= await API.graphql(graphqlOperation(listUsers));
        setUserList(response.data.listUsers.items)
       }catch(e){
              console.log(e)
    
      }
      setLoading(false)
     
      }


    useEffect(() => {
        getAccount()    
        getListUsers()
           
     }, [ ])


    useEffect(()=>{
        getProfile();
        console.log(profileList)
    },[AccountList])
    // get the profil of the current account

    const getProfile =()=>{
        let profile = []
        AccountList.forEach((item)=>{
            if(item.mail == mail){
                profile.push(item)

            }
        })

        setProfileList(profile)

    }



     return(
        <div>
            <StafNavbar></StafNavbar>
            <h3>{state.mail} : {state.remplissage}</h3>
            <div className="tableContainer">
            <table>
                    <thead>
                        <tr>
                            <th>profile</th>
                            <th>pin</th>                           
                            <th>fin</th>
                            <th>service</th>
                            <th>free</th>
                          </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <h2>Loading...</h2>
                        ) : (
                            profileList.map(item => (
                                    <tr key={item.id} onClick={()=>{
                                        handleupdate(item) 
                                         }}>
                                        <td className="std">{item.profil}</td>
                                        <td className="std">{item.pin}</td>
                                        <td className="std">{item.endDateProfil}</td> 
                                        <td className="std">{item.service}</td> 
                                        <td className="std">{String(item.free)}</td> 
                                     </tr>
                                ))
                        )} 
                        
                    </tbody>
                </table>

        </div>

        </div>
     )
}
