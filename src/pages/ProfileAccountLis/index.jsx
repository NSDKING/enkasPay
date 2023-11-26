import { useState, useEffect } from "react";
import StafNavbar from "../../components/StafNavbar";
import { listAccounts, listUsers } from "../../graphql/queries";
import { deleteAccount, updateAccount } from "../../graphql/mutations";
import { API, graphqlOperation } from 'aws-amplify';
import { useLocation, useNavigate } from "react-router-dom";
import DefaultButton from "../../components/DefaultButton";
import { useForm } from "react-hook-form";
import "./index.css"


export default function ProfilAccountList() {
  const [loading, setLoading] = useState(false);
  const [AccountList, setAccountList] = useState([]);
  const [profileList, setProfileList] = useState([]);
  const [userList, setUserList] = useState([]);
  const [theAccount, setTheAccount] = useState({})
  const [selectedProfiles, setSelectedProfiles] = useState([]);
  const [show, setShow] = useState(false)
  const [daysToAdd, setDaysToAdd] = useState(0);
  const { state } = useLocation();
  const navigate = useNavigate();
  const [disp, setDisp] = useState(0)
  const [freeAccount, setFreeAccount] = useState({})


  const {formState: {errors}, handleSubmit, register, control} = useForm();
 




  const handleupdate = (data) => {
    navigate("/click-account", { state: { item: data } });
  }

  const getAccount = async () => {
    if (loading) {
      return;
    }

    setLoading(true);

    try {
      const response = await API.graphql(graphqlOperation(listAccounts, { limit: 10000 }));
      const NotDeleted = response.data.listAccounts.items.filter((item) => !item.deleted);
 
      setAccountList(NotDeleted);
    } catch (e) {
      console.log(e);
    }

    setLoading(false);
  }

  const getListUsers = async () => {
    if (loading) {
      return;
    }

    setLoading(true);

    try {
      const response = await API.graphql(graphqlOperation(listUsers, { limit: 10000 }));
      setUserList(response.data.listUsers.items);
    } catch (e) {
      console.log(e);
    }

    setLoading(false);
  }

  const getProfile = () => {
    let profile = [];
    let profileNotDeleted = [];

    AccountList.forEach((item) => {
      if (item.mail === state.mail) {
        profile.push(item);
      }
    });

    profileNotDeleted= profile.filter((item)=>!item._deleted)

    // Sort the profile list based on the "profil" number in ascending order
    profileNotDeleted.sort((a, b) => a.profil - b.profil);
 
    setProfileList(profileNotDeleted);
  };

  const handleName = (userid) => {
    let username = " ";
    userList.forEach((item) => {
      if (item.id === userid) {
        username = item.FamilyName + " " + item.LastName;
      }
    });
    return username;
  }

  const handleNum = (userid) => {
    let username = " ";
    userList.forEach((item) => {
      if (item.id === userid) {
        username = item.phoneNumber;
      }
    });
    return username;
  }

  
const handleLibererSelected = async () => {
  const confirmLiberer = window.confirm("Are you sure you want to release the selected profiles?");

  if (confirmLiberer && selectedProfiles.length > 0) {
    try {
      // Update selected profiles to set date to "2000-01-01", user to null, and free to true
      const libererPromises = selectedProfiles.map(async (profileId) => {
        const profileToUpdate = profileList.find((profile) => profile.id === profileId);

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
    } catch (error){
      console.log(error)
    }finally {
        // Refresh the page after updating the profiles
        window.location.reload();
      }


  }

}

function getRandomElement(arr) {
    // Check if the array is not empty
    if (arr.length === 0) {
      return undefined; // or handle the empty array case as needed
    }
  
    // Generate a random index between 0 and the length of the array minus 1
    const randomIndex = Math.floor(Math.random() * arr.length);
  
    // Return the element at the random index
    return arr[randomIndex];
  }

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

  const handleDeleteSelected = async () => {
    // Implement deletion logic for selected profiles
    const confirmDelete = window.confirm("Are you sure you want to delete the selected profiles?");

    if (confirmDelete && selectedProfiles.length > 0) {
      try {
        // Delete selected profiles
        const deletePromises = selectedProfiles.map(async (profileId) => {
          const profileToDelete = profileList.find((profile) => profile.id === profileId);

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


  useEffect(() => {
    getAccount();
    getListUsers();

  }, []);

  useEffect(() => {
    getProfile();
   }, [AccountList]);

  useEffect(()=>{
    handleAccount();
    console.log(freeAccount)
    console.log(theAccount)
  },[profileList])

 
  const handleTakeAccount = ()=>{
    setShow(true);
  }

  const handleUseAccount= async (data)=> {
    if(loading){
        return;
    }
    
    setLoading(true)
     
    try {
    
        const today = new Date();
        today.setDate(today.getDate() + daysToAdd);
        
        // Convert to a string in the correct format (e.g., AWSDate format)
        const formattedDate = today.toISOString().slice(0, 10); // Extract YYYY-MM-DD
        
        // Include 'endDateProfil' in the input object with the formatted date
        const input = {
          id: theAccount.id,
          _version: theAccount._version,
          userID: data.user,
          free: false,
          endDateProfil: formattedDate,
        };
          
        const response= await API.graphql(graphqlOperation(updateAccount, { input: input }));
        setShow(false)
   
    }catch(e){
            console.log(e)
  
    }
    setLoading(false)

}

   

    const handleAccount = () => {
        let freeAccountList = [];
        profileList.forEach(item => {
            if (item.free && !item._deleted) {
                freeAccountList.push(item)
            }
        });

        setDisp(freeAccountList.length)
        setFreeAccount(freeAccountList)
        setTheAccount(getRandomElement(freeAccountList))
 
    }

    const handleTerminer = async () => {
        const userConfirmation = window.confirm("Are you sure you want to terminate profiles with past end dates? This action cannot be undone.");
      
        if (userConfirmation) {
          const confirmTerminer = window.confirm("This action will release profiles with past end dates. Are you absolutely sure you want to proceed?");
      
          if (confirmTerminer) {
            try {
              // Filter out profiles with past end dates
              const profilesToTerminate = profileList.filter((profile) => new Date(profile.endDateProfil) < new Date());
      
              if (profilesToTerminate.length > 0) {
                const terminerPromises = profilesToTerminate.map(async (profileToTerminate) => {
                  const input = {
                    id: profileToTerminate.id,
                    _version: profileToTerminate._version,
                    endDateProfil: "2000-01-01", // Update end date as needed
                    userID: null,
                    free: true,
                  };
      
                  await API.graphql(graphqlOperation(updateAccount, { input }));
                });
      
                await Promise.all(terminerPromises);
                alert("Profiles terminated successfully");
                window.location.reload(); // Refresh the page after updating the profiles
              } else {
                alert("No profiles with past end dates found");
              }
            } catch (error) {
              console.error(error);
              alert("An error occurred during termination");
            }
          }
        }
      };
      
    

  return (
    <>
      
      {
        show?(
                  <section> 
                    <p className='pp'>il reste {disp} disponible</p>

                            <form className='miniform'
                                  onSubmit={handleSubmit((data=>{
                                    handleUseAccount(data)
                                  }))}
                            >
                                <div className='account-box'>
                                    <p>mail: {theAccount?.mail}</p>
                                    <p>passe: {theAccount?.passe}</p>
                                    <p>profil: {theAccount?.profil}</p>
                                    <p>pin: {theAccount?.pin}</p>
                                </div>
                            
                                <label>Nombre de jours à ajouter:</label>
                                <input
                                type="number"
                                value={daysToAdd}
                                onChange={(e) => setDaysToAdd(Number(e.target.value))}
                                />
        
        
                            <label>utilisateur :</label>
                            <input type="text" 
                                            list="user" 
                                            {...register('user', { required: 'ceci est obligatoire'})}
        
                                        />
                                        <datalist id="user">
                                            <option value="">Select...</option>
        
                                                {
                                                    userList.map(item => (
                                                        <option value={item.id} key={item.id}>{item.FamilyName +" "+ item.LastName}</option>
                                                    ))
                                                }
        
                                        </datalist>
                                <DefaultButton text={'utiliser'} bgcolor={"black"} textcolor={"white"} width={"50%"} height={"50px"} type={"submit"} marginTop={"20px"}/>
                                <DefaultButton text={'annuler'} bgcolor={"black"} textcolor={"white"} width={"50%"} height={"50px"} onPress={()=>{setShow(false)}} marginTop={"20px"}/>
        
                            </form>
                        </section>
                        
                        ):(
                 
              <div>
                <StafNavbar></StafNavbar>
          
                <div className="button-profile-box">
                    {theAccount?.id && (
                    <button className="button-profile" onClick={handleTakeAccount}>
                        take Account
                    </button>
                    )}
                  <button className="button-profile" onClick={handleDeleteSelected}>
                    Delete Selected
                  </button>                  
                  <button className="button-profile" onClick={handleLibererSelected}>
                    Liberer
                  </button>
                    <button className="button-profile" onClick={handleTerminer}>
                        Terminer
                    </button>

                </div>
                <div className="tableContainer">
                  <table>
                    <thead>
                      <tr>
                        <th>Select</th>
                        <th>profile</th>
                        <th>pin</th>
                        <th>fin</th>
                        <th>service</th>
                        <th>free</th>
                        <th>utilisateur</th>
                        <th>numero</th>
                      </tr>
                    </thead>
                    <tbody>
                      {loading ? (
                        <h2>Loading...</h2>
                      ) : (
                        profileList.filter((item) => !item.deleted).map(item => (
                          <tr key={item.id}>
                            <td>
                              <input
                                type="checkbox"
                                checked={selectedProfiles.includes(item.id)}
                                onChange={() => handleCheckboxChange(item.id)}
                              />
                            </td>
                            <td className="std" onClick={() => { handleupdate(item) }}>
                              {item.profil}
                            </td>
                            <td className="std" onClick={() => { handleupdate(item) }}>
                              {item.pin}
                            </td>
                            <td className="std" onClick={() => { handleupdate(item) }}>
                              {item.endDateProfil}
                            </td>
                            <td className="std" onClick={() => { handleupdate(item) }}>
                              {item.service}
                            </td>
                            <td className="std" onClick={() => { handleupdate(item) }}>
                              {String(item.free)}
                            </td>
                            <td onClick={() => { handleupdate(item) }}>{handleName(item.userID)}</td>
                            <td onClick={() => { handleupdate(item) }}>{handleNum(item.userID)}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
        
            
                        
              </div>        
            )
              
            
            
      }
    </>
  );
}




