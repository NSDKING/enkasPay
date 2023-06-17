import { useState } from "react";
import StafNavbar from "../components/StafNavbar";
import { listUsers } from "../graphql/queries";
import { API, graphqlOperation } from 'aws-amplify';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function CustomerList() {
    const [loading, setLoading] = useState(false)
    const [userList, setUserList] = useState([])
    const [searchNum, setSearchNum] = useState('');

    const navigate = useNavigate();

      
    const handleClick = (data)=>{
        navigate("/customer-data", { state: {  users: data } }) 
     }
    
    const getListUsers = async()=>{
        if(loading){
          return;
      }
      
      setLoading(true)
      try {
      
        const response= await API.graphql(graphqlOperation(listUsers));
        setUserList(response.data.listUsers.items)
        console.log(response)
       }catch(e){
              console.log(e)
    
      }
      setLoading(false)
     
      }

      const filteredUsers = userList && userList.filter((User) => {
        const user = User.phoneNumber;
        if(user!=null){
            return(user.includes(searchNum))
        }else{
            return(userList)
        }
      });
      
    

    useEffect(() => {
        getListUsers()
        console.log(userList)
  
          
     }, [ ])
    return(
        <section>
            <StafNavbar></StafNavbar>
            <div className="searchContainer">
                <input
                    type="number"
                    className="searchInput"
                    placeholder="Search..."
                    value={searchNum}
                    onChange={(e) => setSearchNum(e.target.value)}
                    
                />
            </div>
            <div className="tableContainer">
            
            <table>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Prenom</th>
                            <th>ville</th>
                            <th>mail</th>
                            <th>birthdate</th>
                            <th>phoneNumber</th>                           
                         </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <h2>Loading...</h2>
                        ) : (
                            filteredUsers.filter(item =>{
                                if (item._deleted !=true) {
                                        return item;
                                        }     
                                }).map(item => (
                                    <tr key={item.id} onClick={()=>{
                                   
 
                                         }}>
                                        <td>{item.FamilyName}</td>
                                        <td>{item.LastName}</td>
                                        <td>{item.city}</td>
                                        <td>{item.mail}</td>
                                        <td>{item.birthdate}</td>
                                        <td>{item.phoneNumber}</td>
 
                                    </tr>
                                ))
                        )} 
                        
                    </tbody>
                </table>

        </div>

        </section>
    )
}