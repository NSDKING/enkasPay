import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listComptas, listUsers } from '../../graphql/queries';
import './index.css';

export default function Board() {
  const [comptas, setComptas] = useState([]);
  const [comptastoDay, setComptastoDay] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  function getCurrentMonthNumber() {
    const today = new Date();
    const monthNumber = today.getMonth() + 1;
    return monthNumber;
  }

  function getCurrentDay() {
    const today = new Date();
    const day = today.getDate();
    return day;
  }

  function getMonthNumberFromDate(dateString) {
    const dateObject = new Date(dateString);
    const monthNumber = dateObject.getMonth() + 1;
    return monthNumber;
  }

  function getDayFromDate(dateString) {
    const dateObject = new Date(dateString);
    const day = dateObject.getDate();
    return day;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch Comptas
        const responseComptas = await API.graphql(graphqlOperation(listComptas, { limit: 1000 }));
        const filterComptas = responseComptas.data.listComptas.items.filter(item => getMonthNumberFromDate(item.date) === getCurrentMonthNumber());
        setComptas(filterComptas);

        // Fetch Users
        const responseUsers = await API.graphql(graphqlOperation(listUsers, { limit: 1000 }));
        const filterUsers = responseUsers.data.listUsers.items.filter(user => getMonthNumberFromDate(user.createdAt) === getCurrentMonthNumber());
        setUsers(filterUsers);

        // Filter Comptas for the current day
        const filterComptastoDay = filterComptas.filter(item => getDayFromDate(item.date) === getCurrentDay());
        setComptastoDay(filterComptastoDay);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Calculate totalCa, totalExpense, solde, and new user count
  const totalCa = comptas.reduce((sum, compta) => (compta.amount >= 0 ? sum + parseFloat(compta.amount) : sum), 0);
  const totalExpense = comptas.reduce((sum, compta) => (compta.amount < 0 ? sum + parseFloat(compta.amount) : sum), 0);
  const solde = totalCa + totalExpense;
  const newUserCount = users.length;

  // Calculate totalCa for the day
  const totalCaDay = comptastoDay.reduce((sum, compta) => (compta.amount >= 0 ? sum + parseFloat(compta.amount) : sum), 0);

  return (
    <section className="dashboard">
      <div className="dashboard-box">
        <h2>Total CA</h2>
        <p>{totalCa}</p>
      </div>
      <div className="dashboard-box">
        <h2>Total Expense</h2>
        <p>{totalExpense}</p>
      </div>
      <div className="dashboard-box">
        <h2>Solde</h2>
        <p>{solde}</p>
      </div>
      <div className="dashboard-box">
        <h2>New Users</h2>
        <p>{newUserCount}</p>
      </div>
      <div className="dashboard-box">
        <h2>Total CA for Today</h2>
        <p>{totalCaDay}</p>
      </div>
    </section>
  );
}
