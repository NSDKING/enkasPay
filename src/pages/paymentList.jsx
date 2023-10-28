import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from 'aws-amplify';
import { useNavigate} from "react-router-dom";
import { listPayments } from "../graphql/queries";
import StafNavbar from "../components/StafNavbar";

import './css/PaymentList.css'

export default function PaymentList() {
  
  const [searchQuery, setSearchQuery] = useState('');
  const [paymentList, setPaymentList] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await API.graphql(graphqlOperation(listPayments, {
        filter: {
          or: [
            { sender_name: { contains: searchQuery } },
            { sender_number: { contains: searchQuery } }
          ]
        }
      }));
      setPaymentList(response.data.listPayments.items);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  const getPayments = async () => {
    if (loading) {
      return;
    }
    setLoading(true);

    try {
      const response = await API.graphql(graphqlOperation(listPayments));
      setPaymentList(response.data.listPayments.items);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    getPayments();
  }, []);

  return (
    <div className="Payments">
        <StafNavbar></StafNavbar>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search by sender name or number"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Amounts</th>
            <th>Sender Number</th>
            <th>Sender Name</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {paymentList.map((payment) => (
            <tr key={payment.id}>
              <td>{payment.transaction_id}</td>
              <td>{payment.amounts}</td>
              <td>{payment.sender_number}</td>
              <td>{payment.sender_name}</td>
              <td>{payment.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
