import { useEffect, useState } from "react";
import StafNavbar from "../components/StafNavbar";
import { listAccounts, listUsers } from "../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import { useNavigate } from 'react-router-dom';



export default function ProfileToday() {

    const [Accounts, setAccount] = useState([]);
    const [finishToday, setFinishToday] = useState([]);
    const [loading, setLoading] = useState(false);
    const [userList, setUserList] = useState([])

    const navigate = useNavigate();
    

    useEffect(() => {
        getListUsers()
        getAccount();
        AccountFinishToday();

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
        
      

    function getCurrentDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = (today.getMonth() + 1).toString().padStart(2, '0');
        const day = today.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
      }


      const getAccount = async () => {
        if (loading) {
          return;
        }
        setLoading(true);
    
        try {
          const response= await API.graphql(graphqlOperation(listAccounts, { limit: 1000 }));
          const NotDeleted = response.data.listAccounts.items.filter((item) => !item.deleted);
    
         
          setAccount(NotDeleted);
          console.log(Accounts)
         } catch (e) {
          console.log(e);
        }
        setLoading(false);
      };


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

    const AccountFinishToday = () => {
        let today = getCurrentDate();
 
        let finishTodayAccounts = Accounts.filter(item => {
          return  item.endDateProfil == today;
        });

        setFinishToday(finishTodayAccounts);
       };
      
      const handleupdate = (data)=>{
        navigate("/updateAccount", { state: {  item: data } }) 
     }


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
                                finishToday.filter(item =>{
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
