import { API, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getUser, listAccounts, listUsers } from "../graphql/queries";
import StafNavbar from "../components/StafNavbar";


export default function UserAccountList(){  
    const { state } = useLocation();
    const { item } = state;
    const [Accounts, setAccount] = useState([])
    const [UserAccountList, setUserAccountList] = useState([])
    const [loading, setLoading] = useState(false)
    const [userList, setUserList] = useState([])
    const navigate = useNavigate();


    const handleupdate = (data)=>{
        navigate("/click-account", { state: {  item: data } }) 
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

            const response= await API.graphql(graphqlOperation(listAccounts));
            setAccount(response.data.listAccounts.items)
         }catch(e){
                console.log(e)

        }
        setLoading(false)

 
       }

       const getUserAccount = () => {
            let list = []
            for(let i=0;i<=Accounts.length;i++){
                if(Accounts[i] != null){
                    if(Accounts[i].userID == item){
                        list.push(Accounts[i])
                     }
                }
            }
            setUserAccountList(list)
            console.log(UserAccountList)

       }

    
    useEffect(() => {
        getAccount()
       getListUsers()
       console.log(UserAccountList)

     }, [ ])

   
    useEffect(()=>{
        getUserAccount()
    
     }, [Accounts])
  

     const handleName = (userid)=>{
        let username = " "
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
                            <th>fin compte</th>
                            <th>pin</th>
                            <th>utilisateur</th>
                            <th>numero</th>
                            <th>fin du profil</th>
                         </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <h2>Loading...</h2>
                        ) : (
                            UserAccountList.filter(item =>{
                                if (!item._deleted) {
                                        return item;
                                        }     
                                }).map(item => (
                                    <tr key={item.id} onClick={()=>{
                                        handleupdate(item)
 
                                         }}>
                                        <td>{item.mail}</td>
                                        <td>{item.passe}</td>
                                        <td>{item.profil}</td>
                                        <td>{item.endDateAccount}</td>
                                        <td>{item.pin}</td>
                                        <td>{handleName(item.userID)}</td>
                                        <td>{handleNum(item.userID)}</td>
                                        <td>{item.endDateProfil}</td>
                                     </tr>
                                ))
                        )} 
                        
                    </tbody>
                </table>

        </div>

        </section>
     )


}  
