import { useState, useEffect } from "react";
import StafNavbar from "../components/StafNavbar";
import { listAccounts, listUsers } from "../graphql/queries";
import { deleteAccount } from "../graphql/mutations";
import { API, graphqlOperation } from 'aws-amplify';
import { useLocation, useNavigate } from "react-router-dom";

export default function ProfilAccountList() {
  const [loading, setLoading] = useState(false);
  const [AccountList, setAccountList] = useState([]);
  const [profileList, setProfileList] = useState([]);
  const [userList, setUserList] = useState([]);
  const [selectedProfiles, setSelectedProfiles] = useState([]);
  const { state } = useLocation();
  const navigate = useNavigate();

  const handleupdate = (data) => {
    navigate("/click-account", { state: { item: data } });
  }

  const getAccount = async () => {
    if (loading) {
      return;
    }

    setLoading(true);

    try {
      const response = await API.graphql(graphqlOperation(listAccounts, { limit: 1000 }));
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
      const response = await API.graphql(graphqlOperation(listUsers, { limit: 1000 }));
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

    profile.filter((item) => {
      if (!item._deleted) {
        profileNotDeleted.push(item);
      }
    });

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
            await API.graphql(graphqlOperation(deleteAccount, { input }));
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

  const handleLogDuplicates = () => {
    const profileMap = new Map(); // Map to keep track of profiles based on the userID and profil
    const profilesToDelete = []; // List of profiles to delete
  
    profileList.forEach((profile) => {
      // Check if profile is of "1" or "2" or another number
      if (profile.profil === "1" || profile.profil === "2") {
        const key = `${profile.userID}_${profile.profil}`;
  
        // Check if the account is not already in the map
        if (!profileMap.has(key)) {
          profileMap.set(key, profile);
        } else {
          profilesToDelete.push(profile);
        }
      } else if (["3", "4", "5"].includes(profile.profil)) {
        // Check if the profile is 3, 4, or 5 and doesn't have a userID
        if (!profile.userID) {
          profilesToDelete.push(profile);
        }
      }
    });
  
    // Ensure that the list contains two profiles "1", two profiles "2," and three profiles (3, 4, 5)
    let countProfiles1 = 0;
    let countProfiles2 = 0;
    let countProfiles345 = 0;
    const userIds = new Set();
  
    const profilesToKeep = [];
    profilesToDelete.forEach((profile) => {
      if (["1", "2"].includes(profile.profil)) {
        if (profile.userID) {
          if (profile.profil === "1" && countProfiles1 < 2) {
            if (!userIds.has(profile.userID)) {
              profilesToKeep.push(profile);
              userIds.add(profile.userID);
              countProfiles1++;
            }
          } else if (profile.profil === "2" && countProfiles2 < 2) {
            if (!userIds.has(profile.userID)) {
              profilesToKeep.push(profile);
              userIds.add(profile.userID);
              countProfiles2++;
            }
          }
        } else {
          if (countProfiles345 < 3) {
            profilesToKeep.push(profile);
            countProfiles345++;
          }
        }
      }
    });
  
    console.log("Profiles to delete:", profilesToDelete);
    console.log("Profiles to keep:", profilesToKeep);
  
    // Commented out the deletion part
    // try {
    //   const deletePromises = profilesToDelete.map(async (profile) => {
    //     const input = {
    //       id: profile.id,
    //       _version: profile._version,
    //     };
    //     await API.graphql(graphqlOperation(deleteAccount, { input }));
    //   });
  
    //   await Promise.all(deletePromises);
  
    //   alert("Duplicate profiles removed successfully");
    //   getProfile(); // Refresh the profile list after deletion
    // } catch (error) {
    //   console.error(error);
    //   alert("An error occurred during deletion");
    // }
  };
  
  

  useEffect(() => {
    getAccount();
    getListUsers();
  }, []);

  useEffect(() => {
    getProfile();
  }, [AccountList]);

  function removeDuplicates(profileList) {
    const profileMap = new Map(); // Map pour suivre les profils en fonction de l'utilisateur et du profil
    const profilesToDelete = []; // Liste des profils à supprimer
  
    // Parcourir la liste des profils
    profileList.forEach((profile) => {
      const key = `${profile.userID}_${profile.profil}`;
  
      // Vérifier si le profil est déjà dans la map
      if (profileMap.has(key)) {
        // Règle 1: Éviter de supprimer un profil avec un utilisateur dessus, sauf s'il y a deux profils identiques avec le même utilisateur
        if (profileMap.get(key).length === 1) {
          profilesToDelete.push(profileMap.get(key)[0]);
          profilesToDelete.push(profile); // Supprimer le profil en cours
        } else {
          // Deux profils identiques avec le même utilisateur, ne supprimez pas
        }
      } else {
        // Ajouter le profil à la map
        if (!profileMap.has(key)) {
          profileMap.set(key, []);
        }
        profileMap.get(key).push(profile);
      }
    });
  
    return profilesToDelete;
  }
  

  return (
    <div>
      <StafNavbar></StafNavbar>
      <h3>
        {state.mail} : {state.remplissage}
      </h3>
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
              profileList.map(item => (
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
                  <td>{handleName(item.userID)}</td>
                  <td>{handleNum(item.userID)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <button className="button" onClick={handleDeleteSelected}>
        Delete Selected
      </button>
  
              
    </div>
  );
}
