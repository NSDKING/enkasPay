import { listUsers } from "../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import { listAccounts } from "../graphql/queries";
import { useEffect, useState } from "react";
import StafNavbar from "../components/StafNavbar";
import { useNavigate } from 'react-router-dom';



export default function Past() {
    const [loading, setLoading] = useState(false)
    const [Accounts, setAccount] = useState([])
    const [userList, setUserList] = useState([])
    const [finished, setFinished] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        getListUsers()
        getAccount();
        AccountFinished();
        }, [userList, Accounts]);
    

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

    
    const getAccount = async()=>{
        if(loading){
            return;
        }
        setLoading(true)  

        try {

            const response= await API.graphql(graphqlOperation(listAccounts));
            setAccount(response.data.listAccounts.items)
           }catch(e){
                console.log(e)

        }
        setLoading(false)

 
       }

       const handleupdate = (data)=>{
        navigate("/updateAccount", { state: {  item: data } }) 
     }

  

       const handleName = (userid)=>{
        let username = "test"
        userList.map((item)=>{
            if(item.id === userid){
                username = item.FamilyName +" "+ item.LastName
            }
        })
        return username

    }

    const handleNum = (userid)=>{
        let username = " "
        userList.map((item)=>{
            if(item.id === userid){
                username = item.phoneNumber
            }
        })
        return username

    }

    function getCurrentDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = (today.getMonth() + 1).toString().padStart(2, '0');
        const day = today.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
      }

    const AccountFinished = () => {
        let today = getCurrentDate();
 
        let finishedAccounts = Accounts.filter(item => {
          return today > item.endDateProfil;
        });
    
        setFinished(finishedAccounts);
       };
    
    return(
        <section>
        <StafNavbar></StafNavbar>
        <div className="tableContainer">
                <table>
                        <thead>
                            <tr>
                                <th>mail</th>
                                <th>passe</th>
                                <th>profil</th>
                                <th>utilisateur</th>
                                <th>numero</th>
                                <th>fin du profil</th>
 
                             </tr>
                        </thead>
                        <tbody>
                            {
                                
                                finished.filter(item =>{
                                    if (item._deleted !=true) {
                                            return item;
                                            }     
                                    }).map(item => (
                                        <tr key={item.id} onClick={()=>{
                                            handleupdate(item)
    
                                            }}>
                                            <td>{item.mail}</td>
                                            <td>{item.passe}</td>
                                            <td>{item.profil}</td>
                                            <td>{handleName(item.userID)}</td>
                                            <td>{handleNum(item.userID)}</td>
                                            <td>{item.endDateProfil}</td>
                                          </tr>

                                    ))
                            } 
                            
                        </tbody>
                    </table>

            </div>

        </section>
    )
}
