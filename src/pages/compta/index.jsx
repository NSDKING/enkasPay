import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listComptas, listUsers } from '../../graphql/queries';
import { deleteCompta, createCompta, updateCompta } from '../../graphql/mutations';
import './index.css';
import StafNavbar from '../../components/StafNavbar';
import Modal from 'react-modal';

export default function Compta() {
  const [comptaList, setComptaList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userList, setUserList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddComptaModalOpen, setIsAddComptaModalOpen] = useState(false);
  const [newCompta, setNewCompta] = useState({
    title: '',
    amount: '',
    type: '',
    userID: '',
    date: '', // Added the date field
  });
  const [editMode, setEditMode] = useState({ rowId: null, colName: null, newValue: null });

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
    } finally {
      setLoading(false);
    }
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
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (item) => {
    try {
      const input = { 
        id: item.id,  
        _version: item._version
      };
      await API.graphql(graphqlOperation(deleteCompta, { input }));
      alert('Delete successful');

      // After successful deletion, fetch the updated data
      getComptaData();
    } catch (error) {
      console.error('Error deleting Compta:', error);
    }
  };

  const handleUpdate = async (item) => {
    try {
      setLoading(true);

      // Create a copy of the Compta item to track changes
      const updatedCompta = { ...item };

      // Check if the title is being edited
      if (editMode.colName === 'title') {
        updatedCompta.title = editMode.newValue;
      }

      // Check if the amount is being edited
      if (editMode.colName === 'amount') {
        updatedCompta.amount = editMode.newValue;
      }

      // Check if the type is being edited
      if (editMode.colName === 'type') {
        updatedCompta.type = editMode.newValue;
      }

      // Check if the userID is being edited
      if (editMode.colName === 'userID') {
        updatedCompta.userID = editMode.newValue;
      }

      // Check if the date is being edited
      if (editMode.colName === 'date') {
        updatedCompta.date = editMode.newValue;
      }

      // Prepare the input for the update mutation
      const input = {
        id: updatedCompta.id,
        _version: updatedCompta._version,
        title: updatedCompta.title,
        amount: updatedCompta.amount,
        type: updatedCompta.type,
        userID: updatedCompta.userID,
        date: updatedCompta.date,
      };

      // Call the update mutation
      await API.graphql(graphqlOperation(updateCompta, { input }));

      alert('Update successful');

      // Reset edit mode
      setEditMode({ rowId: null, colName: null, newValue: null });

      // Fetch the updated data
      getComptaData();
    } catch (error) {
      console.error('Error updating Compta:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddCompta = async () => {
    try {
      // Validate the new Compta data
      if (!newCompta.title || !newCompta.amount || !newCompta.type || !newCompta.userID || !newCompta.date) {
        console.error('Please fill in all the fields for the new Compta element.');
        return;
      }

      await API.graphql(graphqlOperation(createCompta, { input: newCompta }));

      // After successful addition, close the modal and fetch the updated data
      setIsAddComptaModalOpen(false);
      alert('Addition successful');

      getComptaData();
    } catch (error) {
      console.error('Error adding new Compta element:', error);
    }
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
        <button className='addComptaButton' onClick={() => setIsAddComptaModalOpen(true)}>
          Add Compta
        </button>
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
              <th>Date</th> {/* Added Date column */}
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
                  <td 
                    onDoubleClick={() => {setEditMode({rowId:item.id, colName:'title', newValue: item.title})}}
                  >
                    {editMode.rowId === item.id && editMode.colName === 'title' ? (
                      <input
                        className='input-click'
                        type='text'
                        onBlur={(e) => setEditMode({ ...editMode, newValue: e.target.value })}
                        defaultValue={item.title}
                      />
                    ) : (
                      <h3>{item.title}</h3>
                    )}
                  </td>
                  <td 
                    onDoubleClick={() => {setEditMode({rowId:item.id, colName:'amount', newValue: item.amount})}}
                  >
                    {editMode.rowId === item.id && editMode.colName === 'amount' ? (
                      <input
                        className='input-click'
                        type='text'
                        onBlur={(e) => setEditMode({ ...editMode, newValue: e.target.value })}
                        defaultValue={item.amount}
                      />
                    ) : (
                      <h3>{item.amount}</h3>
                    )}
                  </td>
                  <td 
                    onDoubleClick={() => {setEditMode({rowId:item.id, colName:'type', newValue: item.type})}}
                  >
                    {editMode.rowId === item.id && editMode.colName === 'type' ? (
                      <input
                        className='input-click'
                        type='text'
                        onBlur={(e) => setEditMode({ ...editMode, newValue: e.target.value })}
                        defaultValue={item.type}
                      />
                    ) : (
                      <h3>{item.type}</h3>
                    )}
                  </td>
                  <td 
                    onDoubleClick={() => {setEditMode({rowId:item.id, colName:'userID', newValue: item.userID})}}
                  >
                    {editMode.rowId === item.id && editMode.colName === 'userID' ? (
                      <>
                        <input
                          type="text" 
                          value={newCompta.userID} 
                          onChange={(e) => setNewCompta({ ...newCompta, userID: e.target.value })}
                          onBlur={(e) => setEditMode({ ...editMode, newValue: e.target.value })}
                          list="user" 
                        />
                        <datalist id="user">
                          <option value="">Select...</option>
                          {userList.map(item => (
                            <option value={item.id} key={item.id}>{item.FamilyName +" "+ item.LastName}</option>
                          ))}
                        </datalist>
                      </>
                    ) : (
                      <h3>
                        {userList.find((user) => user.id === item.userID)?.LastName + ' ' + userList.find((user) => user.id === item.userID)?.FamilyName}
                      </h3>
                    )}
                  </td>
                  <td>{userList.find((user) => user.id === item.userID)?.phoneNumber}</td>
                  <td 
                    onDoubleClick={() => {setEditMode({rowId:item.id, colName:'date', newValue: item.date})}}
                  >
                    {editMode.rowId === item.id && editMode.colName === 'date' ? (
                      <input
                        className='input-click'
                        type='date'
                        onBlur={(e) => setEditMode({ ...editMode, newValue: e.target.value })}
                        defaultValue={item.date}
                      />
                    ) : (
                      <h3>{item.date}</h3>
                    )}
                  </td>
                  <td>
                    <button onClick={() => handleDelete(item)}>Delete</button>
                    <button onClick={() => handleUpdate(item)}>Update</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modal for adding a new Compta element */}
      <Modal
        isOpen={isAddComptaModalOpen}
        onRequestClose={() => setIsAddComptaModalOpen(false)}
        contentLabel='Add Compta Modal'
      >
        <h2>Add New Compta Element</h2>
        <form>
          <label>Title:</label>
          <input type='text' value={newCompta.title} onChange={(e) => setNewCompta({ ...newCompta, title: e.target.value })} />
          <label>Amount:</label>
          <input type='text' value={newCompta.amount} onChange={(e) => setNewCompta({ ...newCompta, amount: e.target.value })} />
          <label>Type:</label>
          <input type='text' value={newCompta.type} onChange={(e) => setNewCompta({ ...newCompta, type: e.target.value })} />
          <label>User ID:</label>
          <input
            type="text" 
            value={newCompta.userID} 
            onChange={(e) => setNewCompta({ ...newCompta, userID: e.target.value })}
            list="user" 
          />
          <datalist id="user">
            <option value="">Select...</option>
            {userList.map(item => (
              <option value={item.id} key={item.id}>{item.FamilyName +" "+ item.LastName}</option>
            ))}
          </datalist>
          {/* New date field */}
          <label>Date:</label>
          <input 
            type="date" 
            value={newCompta.date} 
            onChange={(e) => setNewCompta({ ...newCompta, date: e.target.value })} 
          />
          <button type='button' onClick={handleAddCompta}>Add Compta Element</button>
        </form>
      </Modal>
    </section>
  );
}
