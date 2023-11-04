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
      const response = await API.graphql(graphqlOperation(listAccounts, { limit: 10000 }));
      const NotDeleted = response.data.listAccounts.items.filter((item) => !item.deleted);
      console.log("NotDeleted");
      console.log(NotDeleted);
      console.log("NotDeleted");
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

    console.log(profileNotDeleted)
    // Sort the profile list based on the "profil" number in ascending order
    profileNotDeleted.sort((a, b) => a.profil - b.profil);
    console.log(profileNotDeleted)

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
            const Response = await API.graphql(graphqlOperation(deleteAccount, { input }));
            console.log(Response)

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
      <button className="button" onClick={handleDeleteSelected}>
        Delete Selected
      </button>
  
              
    </div>
  );
}
