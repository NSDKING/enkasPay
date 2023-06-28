import { useState, useEffect } from "react";
import StafNavbar from "../components/StafNavbar";
import { listUsers } from "../graphql/queries";
import { API, graphqlOperation } from 'aws-amplify';
import { useNavigate } from "react-router-dom";

export default function CustomerList() {
  const [loading, setLoading] = useState(false);
  const [userList, setUserList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleClick = (UserID) => {
    navigate("/customer-data", { state: { item: UserID } });
  }

  const getListUsers = async () => {
    if (loading) {
      return;
    }

    setLoading(true);
    try {
      const response = await API.graphql(graphqlOperation(listUsers));
      setUserList(response.data.listUsers.items);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  }

  const filteredUsers = userList.filter((user) => {
    const { FamilyName, LastName, phoneNumber, mail } = user;
    const searchLower = searchQuery.toLowerCase();

    return (
      FamilyName.toLowerCase().includes(searchLower) ||
      LastName.toLowerCase().includes(searchLower) ||
      (phoneNumber && phoneNumber.includes(searchQuery)) ||
      (mail && mail.toLowerCase().includes(searchLower))
    );
  });

  useEffect(() => {
    getListUsers();
    console.log(userList)
  }, []);

  return (
    <section>
      <StafNavbar></StafNavbar>
      <h3>clients: {userList.length}</h3>
      <div className="searchContainer">
        <input
          type="text"
          className="searchInput"
          placeholder="Search by name, number, or mail"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
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
              filteredUsers.filter(item => !item._deleted).map(item => (
                <tr key={item.id} onClick={() => { handleClick(item.id) }}>
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
