import { listUsers } from "../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import { listAccounts } from "../graphql/queries";
import { useEffect, useState } from "react";
import StafNavbar from "../components/StafNavbar";
import { useNavigate } from 'react-router-dom';



export default function ProfileSoon() {
    const [loading, setLoading] = useState(false)
    const [Accounts, setAccount] = useState([])
    const [userList, setUserList] = useState([])
    const [finishSoon, setFinishSoon] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        getListUsers()
        getAccount();
        AccountFinishSoon();
        }, [userList, Accounts]);
      
    function add10Days() {
        const date = new Date();
        date.setDate(date.getDate() + 10);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
      } 
      
      function daysBetween(dateString1, dateString2) {
        const date1 = new Date(dateString1);
        const date2 = new Date(dateString2);
        const timeDiff = Math.abs(date2.getTime() - date1.getTime());
        const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
        return dayDiff;
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

    
    const getAccount = async()=>{
        if(loading){
            return;
        }
        setLoading(true)  

        try {

             const response= await API.graphql(graphqlOperation(listAccounts, { limit: 1000 }));
            const NotDeleted = response.data.listAccounts.items.filter((item) => !item.deleted);
      
            setAccount(NotDeleted)
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

    const AccountFinishSoon = () => {
        let newDate = add10Days();
        let today = getCurrentDate();
 
        let finishSoonAccounts = Accounts.filter(item => {
          return today < item.endDateProfil && item.endDateProfil < newDate;
        });
    
        setFinishSoon(finishSoonAccounts);
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
                                <th>day left</th>

                             </tr>
                        </thead>
                        <tbody>
                            {
                                
                                finishSoon.filter(item =>{
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
                                            <td>{daysBetween(item.endDateProfil, getCurrentDate())}</td>
                                         </tr>

                                    ))
                            } 
                            
                        </tbody>
                    </table>

            </div>

        </section>
    )
}
