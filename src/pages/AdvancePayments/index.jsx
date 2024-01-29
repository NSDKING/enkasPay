import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listTransactions, listUsers, listOrders } from '../../graphql/queries';
import './index.css';
import StafNavbar from '../../components/StafNavbar';
import { deleteTransactions, updateTransactions } from '../../graphql/mutations';
import { createCompta } from '../../graphql/mutations';

export default function AdvancePayments() {
  const [transactionsList, setTransactionsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [userList, setUserList] = useState([]);
  const [orderList, setOrderList] = useState([]);
  const [editMode, setEditMode] = useState({ rowId: null, colName: null });

  const getAdvancePaymentsData = async () => {
    if (loading) {
      return;
    }

    setLoading(true);
    try {
      const response = await API.graphql(graphqlOperation(listTransactions, { limit: 1000000000 }));
      const advancePayments = response.data.listTransactions.items.filter(item => item.advance);
      const advancePaymentsNotdeleted = advancePayments.filter(item => !item._deleted);
      setTransactionsList(advancePaymentsNotdeleted);
    } catch (e) {
      console.error('Error fetching Advance Payments data:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAdvancePaymentsData();
    getListUsers();
    getListOrders();
  }, []);

  const handleSearch = () => {
    // Implement search logic here
    // Filter transactionsList based on searchTerm
  };

  const handleDelete = async (item) => {
    try {
      const input = { 
        id: item.id,  
        _version: item._version
      };
      await API.graphql(graphqlOperation(deleteTransactions, { input }));
      getAdvancePaymentsData();
    } catch (error) {
      console.error('Error deleting Advance Payment:', error);
    }
  };

  const handleSetAdvanceFalse = async (id) => {
    try {
      setLoading(true);

      // Set advance to false
      const item = transactionsList.find(item => item.id === id);
      await API.graphql(graphqlOperation(updateTransactions, { input: { id, advance: false, _version: item._version } }));

      // Create a new compta with the "reste à payer" as a transaction
      const remainingAmount = parseInt(item.full) - parseInt(item.amount);
      const newComptaInput = {
        title: 'Reste à Payer',
        amount: remainingAmount.toString(),
        type: 'abonnement-complet',
        userID: item.userID,
      };
      await API.graphql(graphqlOperation(createCompta, { input: newComptaInput }));

      // Refresh the data
      getAdvancePaymentsData();
    } catch (error) {
      console.error('Error setting advance to false and creating compta:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (id, colName, value) => {
    try {
      setLoading(true);

      // Prepare the input for the update mutation
      const input = {
        id,
        _version: transactionsList.find(item => item.id === id)._version,
        [colName]: value,
      };

      // Call the update mutation
      await API.graphql(graphqlOperation(updateTransactions, { input }));

      // Refresh the data
      getAdvancePaymentsData();
    } catch (error) {
      console.error('Error updating Advance Payment:', error);
    } finally {
      setLoading(false);
      setEditMode({ rowId: null, colName: null });
    }
  };

  const getListUsers = async () => {
    if (loading) {
      return;
    }

    setLoading(true);
    try {
      const response = await API.graphql(graphqlOperation(listUsers, { limit: 100000 }));
      const noneDeletedUser = response.data.listUsers.items.filter(item => !item._deleted);
      setUserList(noneDeletedUser);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const getListOrders = async () => {
    if (loading) {
      return;
    }

    setLoading(true);
    try {
      const response = await API.graphql(graphqlOperation(listOrders, { limit: 100000 }));
      const noneDeletedOrder = response.data.listOrders.items.filter(item => !item._deleted);
      setOrderList(noneDeletedOrder);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const filteredTransaction = transactionsList.filter((compta) => {
    const userName = (userList.find((user) => user.id === compta.userID)?.LastName + ' ' +
                      userList.find((user) => user.id === compta.userID)?.FamilyName || '').toLowerCase();
    const phoneNumber = userList.find((user) => user.id === compta.userID)?.phoneNumber.toLowerCase();
    const productName = (orderList.find((order) => order.id === compta.orderID)?.ProductName || '').toLowerCase();

    const searchTermLower = searchTerm.toLowerCase();

    return (
      userName.includes(searchTermLower) ||
      phoneNumber.includes(searchTermLower) ||
      productName.includes(searchTermLower)
    );
  });

  return (
    <section>
      <StafNavbar />
      <div className="searchContainer">
        <input
          type="text"
          className="searchInput"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="searchButton" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="compta-table-container">
        <table className="compta-table">
          <thead>
            <tr>
              <th>reste à payer</th>
              <th>Full Payment</th>
              <th>nom</th>
              <th>numéro</th>
              <th>produit</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="6">Loading...</td>
              </tr>
            ) : (
              filteredTransaction.map((item) => (
                <tr key={item.id}>
                  <td>{parseInt(item.full) - parseInt(item.amount)}</td>
                  <td
                    onDoubleClick={() => setEditMode({ rowId: item.id, colName: 'full' })}
                  >
                    {editMode.rowId === item.id && editMode.colName === 'full' ? (
                      <input
                        className="input-click"
                        type="text"
                        onBlur={(e) => handleUpdate(item.id, 'full', e.target.value)}
                        defaultValue={item.full}
                      />
                    ) : (
                      <h3>{item.full}</h3>
                    )}
                  </td>
                  <td>{userList.find((user) => user.id === item.userID)?.LastName + ' ' +
                    userList.find((user) => user.id === item.userID)?.FamilyName}</td>
                  <td>{userList.find((user) => user.id === item.userID)?.phoneNumber}</td>
                  <td>{orderList.find((order) => order.id === item.orderID)?.ProductName}</td>
                  <td>
                    <button onClick={() => handleDelete(item)}>Delete</button>
                    <button onClick={() => handleSetAdvanceFalse(item.id)}>Set Advance False</button>
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
