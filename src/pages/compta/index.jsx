import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listComptas, listUsers } from '../../graphql/queries';
import { deleteCompta, updateCompta } from '../../graphql/mutations';
import './index.css';
import StafNavbar from '../../components/StafNavbar';

export default function Compta() {
  const [comptaList, setComptaList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userList, setUserList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const getComptaData = async () => {
    if (loading) {
      return;
    }

    setLoading(true);
    try {
      const response = await API.graphql(graphqlOperation(listComptas, { limit: 1000000000 }));
      const NoneDeleted = response.data.listComptas.items.filter(item => !item._deleted);

      setComptaList(NoneDeleted);
    } catch (e) {
      console.error('Error fetching Compta data:', e);
    }
    setLoading(false);
  };

  const getListUsers = async () => {
    if (loading) {
      return;
    }

    setLoading(true);
    try {
      const response = await API.graphql(graphqlOperation(listUsers, { limit: 100000 }));
      setUserList(response.data.listUsers.items);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  const handleDelete = async (item) => {
    try {
      const input = { 
        id: item.id,  
        _version: item._version
      };
      const response = await API.graphql(graphqlOperation(deleteCompta, { input: input }));
      console.log(response)

      // After successful deletion, fetch the updated data
      getComptaData();
    } catch (error) {
      console.error('Error deleting Compta:', error);
    }
  };

  const handleUpdate = async (comptaId) => {
    // Implement the logic to update the Compta element
    // You can use a modal or redirect to another page for updating
    console.log('Update Compta with ID:', comptaId);
  };

  useEffect(() => {
    getComptaData();
    getListUsers();
  }, []);

  const filteredComptas = comptaList.filter((compta) => {
    const username = (userList.find((user) => user.id === compta.userID)?.LastName + ' ' +
                      userList.find((user) => user.id === compta.userID)?.FamilyName || '').toLowerCase();
    return username.includes(searchTerm.toLowerCase());
  });

  return (
    <section>
      <StafNavbar />
      <div className='compta-controls'>
        <input
          type='text'
          className='searchInput'
          placeholder='Search...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className='compta-table-container'>
        <table className='compta-table'>
          <thead>
            <tr>
              <th>Title</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Nom</th>
              <th>Numero</th>
              <th>Actions</th>
              {/* Add more columns based on your Compta data structure */}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan='7'>Loading...</td>
              </tr>
            ) : (
              filteredComptas.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.amount}</td>
                  <td>{item.type}</td>
                  <td>{userList.find((user) => user.id === item.userID)?.LastName + ' ' +
                    userList.find((user) => user.id === item.userID)?.FamilyName}</td>
                  <td>{userList.find((user) => user.id === item.userID)?.phoneNumber}</td>
                  <td>
                    <button onClick={() => handleDelete(item)}>Delete</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
