import "./index.css"

 
import { API, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import StafNavbar from "../../components/StafNavbar";
import { listAccounts, listUsers } from "../../graphql/queries";
import { createOrder, deleteAccount, updateAccount } from "../../graphql/mutations";
 

 export default function ProfileFinish() {
    const [loading, setLoading] = useState(false)
    const [Accounts, setAccount] = useState([])
    const [userList, setUserList] = useState([])
    const [finish, setFinish] = useState([]);
    const [selectedProfiles, setSelectedProfiles] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getListUsers()
        getAccount();
        AccountFinish();
        }, [userList, Accounts]);
      

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
      
        const response= await API.graphql(graphqlOperation(listUsers, { limit: 100000 }));
        const NotDeleted = response.data.listUsers.items.filter((item) => !item.deleted);
        setUserList(NotDeleted)
 
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

            const response= await API.graphql(graphqlOperation(listAccounts, { limit: 100000 }));
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

  

     const handleName = (userId) => {
        const user = userList.find((item) => item.id === userId);
        if(!user){
            console.log(userId)
        }
        return user ? `${user.FamilyName} ${user.LastName}` : "N/A";
      };
      
      const handleNum = (userId) => {
        const user = userList.find((item) => item.id === userId);
        return user ? user.phoneNumber : "N/A";
      };
      
      const handleCheckboxChange = (profileId) => {
        // Toggle the selection status of the profile
        setSelectedProfiles((prevSelected) => {
          if (prevSelected.includes(profileId)) {
            // Deselect if already selected
            return prevSelected.filter((id) => id !== profileId);
          } else {
            // Select if not selected
            return [...prevSelected, profileId];
          }
        });
      };

    function getCurrentDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = (today.getMonth() + 1).toString().padStart(2, '0');
        const day = today.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
      }

    const AccountFinish = () => {
        let today = getCurrentDate();
 
        let finishAccounts = Accounts.filter(item => {
          return today > item.endDateProfil && !item.free  && !item._deleted;
        });
    
        setFinish(finishAccounts);
         };
    
      const handleLibererSelected = async () => {
          const confirmLiberer = window.confirm("Are you sure you want to release the selected profiles?");
        
          if (confirmLiberer && selectedProfiles.length > 0) {
            try {
              // Update selected profiles to set date to "2000-01-01", user to null, and free to true
              const libererPromises = selectedProfiles.map(async (profileId) => {
                const profileToUpdate = finish?.find((profile) => profile.id === profileId);
        
                if (profileToUpdate) {
                  const input = {
                    id: profileToUpdate.id,
                    _version: profileToUpdate._version,
                    endDateProfil: "2000-01-01",
                    userID: null,
                    free: true,
                  };
                  const response = await API.graphql(graphqlOperation(updateAccount, { input }));
                 }
              });
        
              await Promise.all(libererPromises);
              alert("Selected profiles released successfully");                
              window.location.reload();

            } catch (error){
              console.log(error)
              alert('probleme')
            }
        
        
          }
        
        }

        const handleDeleteSelected = async () => {
          // Implement deletion logic for selected profiles
          const confirmDelete = window.confirm("Are you sure you want to delete the selected profiles?");
      
          if (confirmDelete && selectedProfiles.length > 0) {
            try {
              // Delete selected profiles
              const deletePromises = selectedProfiles.map(async (profileId) => {
                const profileToDelete = AccountFinish.find((profile) => profile.id === profileId);
      
                if (profileToDelete) {
                  const input = {
                    id: profileToDelete.id,
                    _version: profileToDelete._version,
                  };
                  const Response = await API.graphql(graphqlOperation(deleteAccount, { input }));
       
                }
              });
      
             await Promise.all(deletePromises);
              alert("Selected profiles deleted successfully");
            } catch (error) {
              console.error(error);
              alert("An error occurred during deletion");
            }
          } else {
            alert("Deletion canceled or no profiles selected");
          }
        };
      
      
 
      
      
    return(
        <section>
        <StafNavbar></StafNavbar>
            <div className="tableContainer">
            <div className="button-profile-box">
                  
                  <button className="button-profile" onClick={handleDeleteSelected}>
                    Delete Selected
                  </button>                  
                  <button className="button-profile" onClick={handleLibererSelected}>
                    Liberer
                  </button>
               

                </div>
            <table>
                    <thead>
                        <tr>
                            <th>Select</th>
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
                            
                            finish.map(item => (
                                    <tr key={item.id} onClick={()=>{
                                        }}>
                                      <td>
                                          <input
                                            type="checkbox"
                                            checked={selectedProfiles.includes(item.id)}
                                            onChange={() => handleCheckboxChange(item.id)}
                                          />
                                        </td>
                                        <td onClick={()=>{handleupdate(item)}}>{item.mail}</td>
                                        <td onClick={()=>{handleupdate(item)}}>{item.passe}</td>
                                        <td onClick={()=>{handleupdate(item)}}>{item.profil}</td>
                                        <td onClick={()=>{handleupdate(item)}}>{handleName(item.userID)}</td>
                                        <td onClick={()=>{handleupdate(item)}}>{handleNum(item.userID)}</td>
                                        <td onClick={()=>{handleupdate(item)}}>{item.endDateProfil}</td>
                                        <td onClick={()=>{handleupdate(item)}}>{daysBetween(item.endDateProfil, getCurrentDate())}</td>
                                     </tr>

                                ))
                        } 
                        
                    </tbody>
                </table>

        </div> 

        </section>
    )
}

