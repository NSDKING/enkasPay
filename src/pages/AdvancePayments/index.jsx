import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listOrders, listTransactions, listUsers } from '../../graphql/queries';
import './index.css';
import StafNavbar from '../../components/StafNavbar';
import { deleteTransactions } from '../../graphql/mutations';

export default function AdvancePayments() {
  const [transactionsList, setTransactionsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [userList, setUserList] = useState([]);
  const [OrderList, setOrderList] = useState([]);


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
    }
    setLoading(false);
  };

  useEffect(() => {
    getAdvancePaymentsData();
    getListUsers();
    getListOrder();
   }, []);

  const handleSearch = () => {
    // Implement search logic here
    // Filter transactionsList based on searchTerm
  };

  const handleDelete = async (id) => {
    try {
      await API.graphql(graphqlOperation(deleteTransactions, { input: { id } }));
      getAdvancePaymentsData();
    } catch (error) {
      console.error('Error deleting Advance Payment:', error);
    }
  };

  const getListUsers = async () => {
    if (loading) {
      return;
    }

    setLoading(true);
    try {
      const response = await API.graphql(graphqlOperation(listUsers, { limit: 100000 }));
      const NoneDeletedUser = response.data.listUsers.items.filter(item => !item._deleted);
      setUserList(NoneDeletedUser);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  const getListOrder = async () => {
    if (loading) {
      return;
    }

    setLoading(true);
    try {
      const response = await API.graphql(graphqlOperation(listOrders, { limit: 100000 }));
      const NoneDeletedOrder = response.data.listOrders.items.filter(item => !item._deleted);
      setOrderList(NoneDeletedOrder);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  const filteredTransaction = transactionsList.filter((compta) => {
    const userName = (userList.find((user) => user.id === compta.userID)?.LastName + ' ' +
                      userList.find((user) => user.id === compta.userID)?.FamilyName || '').toLowerCase();
    const phoneNumber = userList.find((user) => user.id === compta.userID)?.phoneNumber.toLowerCase();
    const productName = (OrderList.find((order) => order.id === compta.orderID)?.ProductName || '').toLowerCase();
  
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
                  <td>{parseInt(item.full)-parseInt(item.amount)}</td>
                  <td>{item.full}</td>
                  <td>{userList.find((user) => user.id === item.userID)?.LastName + ' ' +
                    userList.find((user) => user.id === item.userID)?.FamilyName}</td>
                  <td>{userList.find((user) => user.id === item.userID)?.phoneNumber}</td>
                  <td>{OrderList.find((order) => order.id === item.orderID)?.ProductName}</td>
                  <td>
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
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
