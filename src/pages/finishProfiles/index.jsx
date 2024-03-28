import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import StafNavbar from "../../components/StafNavbar";
import { listAccounts, listUsers } from "../../graphql/queries";
import { deleteAccount, updateAccount } from "../../graphql/mutations";

export default function ProfileFinish() {
  const [loading, setLoading] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const [userList, setUserList] = useState([]);
  const [finish, setFinish] = useState([]);
  const [selectedProfiles, setSelectedProfiles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getListUsers();
    getAccount();
    AccountFinish();
  }, [userList, accounts]);

  const getListUsers = async () => {
    if (loading) {
      return;
    }

    setLoading(true);
    try {
      const response = await API.graphql(graphqlOperation(listUsers, { limit: 100000 }));
      const notDeleted = response.data.listUsers.items.filter((item) => !item.deleted);
      setUserList(notDeleted);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  const getAccount = async () => {
    if (loading) {
      return;
    }
    setLoading(true);

    try {
      const response = await API.graphql(graphqlOperation(listAccounts, { limit: 100000 }));
      const notDeleted = response.data.listAccounts.items.filter((item) => !item.deleted);
      setAccounts(notDeleted);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  const AccountFinish = () => {
    let today = getCurrentDate();

    let finishAccounts = accounts.filter((item) => {
      return today > item.endDateProfil && !item.free && !item._deleted;
    });

    setFinish(finishAccounts);
  };

  function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const day = today.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  const handleupdate = (data) => {
    navigate("/updateAccount", { state: { item: data } });
  };

  const handleName = (userId) => {
    const user = userList.find((item) => item.id === userId);
    return user ? `${user.FamilyName} ${user.LastName}` : "N/A";
  };

  const handleNum = (userId) => {
    const user = userList.find((item) => item.id === userId);
    return user ? user.phoneNumber : "N/A";
  };

  const handleCheckboxChange = (profileId) => {
    setSelectedProfiles((prevSelected) => {
      if (prevSelected.includes(profileId)) {
        return prevSelected.filter((id) => id !== profileId);
      } else {
        return [...prevSelected, profileId];
      }
    });
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProfiles = finish.filter((profile) =>
    profile.mail.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDeleteSelected = async () => {
    // Implement deletion logic for selected profiles
    const confirmDelete = window.confirm("Are you sure you want to delete the selected profiles?");

    if (confirmDelete && selectedProfiles.length > 0) {
      try {
        // Delete selected profiles
        const deletePromises = selectedProfiles.map(async (profileId) => {
          const profileToDelete = finish.find((profile) => profile.id === profileId);

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

  const daysBetween = (dateString1, dateString2) => {
    const date1 = new Date(dateString1);
    const date2 = new Date(dateString2);
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return dayDiff;
  };

  return (
    <section>
      <StafNavbar />
      <div className="tableContainer">
        <div className="button-profile-box">
          <input
            type="text"
            placeholder="Search by email..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button className="button-profile" onClick={handleDeleteSelected}>
            Delete Selected
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
            {filteredProfiles.map((item) => (
              <tr key={item.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedProfiles.includes(item.id)}
                    onChange={() => handleCheckboxChange(item.id)}
                  />
                </td>
                <td onClick={() => handleupdate(item)}>{item.mail}</td>
                <td onClick={() => handleupdate(item)}>{item.passe}</td>
                <td onClick={() => handleupdate(item)}>{item.profil}</td>
                <td onClick={() => handleupdate(item)}>{handleName(item.userID)}</td>
                <td onClick={() => handleupdate(item)}>{handleNum(item.userID)}</td>
                <td onClick={() => handleupdate(item)}>{item.endDateProfil}</td>
                <td onClick={() => handleupdate(item)}>
                  {daysBetween(item.endDateProfil, getCurrentDate())}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
