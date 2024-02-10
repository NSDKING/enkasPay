import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listAccounts, listComptas, listUsers } from '../../graphql/queries';
import './index.css';

export default function Board() {
  const [comptas, setComptas] = useState([]);
  const [comptastoDay, setComptastoDay] = useState([]);
  const [users, setUsers] = useState([]);
  const [accounts, setAccounts] = useState([]);
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

        // Fetch Accounts
        const responseAccounts = await API.graphql(graphqlOperation(listAccounts, { limit: 1000 }));
        const filterAccounts = responseAccounts.data.listAccounts.items.filter(account => !account.free); // Active customers
        setAccounts(filterAccounts);

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

  // Calculate active customer count
  const activeCustomerCount = accounts.length;

  // Calculate monthly return and margin
  const calculateMonthlyReturn = () => {
    const monthlyReturnPercentage = (parseFloat(totalCa) + parseFloat(totalExpense)) / -parseFloat(totalExpense) * 100;
    return monthlyReturnPercentage.toFixed(2);
  };

  const calculateMonthlyMargin = () => {
    const monthlyMarginPercentage = (parseFloat(totalCa) + parseFloat(totalExpense)) / parseFloat(totalCa) * 100;
    return monthlyMarginPercentage.toFixed(2);
  };

  // Calculate annual return and margin
  const calculateAnnualCa = () => {
    const annualCa = comptas.reduce((sum, compta) => (getMonthNumberFromDate(compta.date) === getCurrentMonthNumber() ? sum + parseFloat(compta.amount) : sum), 0);
    return annualCa.toFixed(2);
  };

  const calculateAnnualExpense = () => {
    const annualExpense = comptas.reduce((sum, compta) => (getMonthNumberFromDate(compta.date) === getCurrentMonthNumber() && compta.amount < 0 ? sum + parseFloat(compta.amount) : sum), 0);
    return Math.abs(annualExpense).toFixed(2);
  };

  const calculateAnnualReturn = () => {
    const annualReturnPercentage = (parseFloat(calculateAnnualCa()) + parseFloat(calculateAnnualExpense())) / parseFloat(calculateAnnualExpense()) * 100;
    return annualReturnPercentage.toFixed(2);
  };

  const calculateAnnualMargin = () => {
    const annualMarginPercentage = (parseFloat(calculateAnnualCa()) + parseFloat(calculateAnnualExpense())) / parseFloat(calculateAnnualCa()) * 100;
    return annualMarginPercentage.toFixed(2);
  };

  return (
    <section className="dashboard">
      <div className="margin-box">
        <h2>Monthly Margin</h2>
        <p>{calculateMonthlyMargin()}%</p>
      </div>

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
      <div className="dashboard-box">
        <h2>Active Customers</h2>
        <p>{activeCustomerCount}</p>
      </div>

      <div className="return-box">
        <h2>Monthly Return</h2>
        <p>{calculateMonthlyReturn()}%</p>
      </div>

      <div className="margin-box">
        <h2>Annual Margin</h2>
        <p>{calculateAnnualMargin()}%</p>
      </div>

      <div className="return-box">
        <h2>Annual Return</h2>
        <p>{calculateAnnualReturn()}%</p>
      </div>

      <div className="dashboard-box">
        <h2>Annual CA</h2>
        <p>{calculateAnnualCa()}</p>
      </div>

      <div className="dashboard-box">
        <h2>Annual Expense</h2>
        <p>{calculateAnnualExpense()}</p>
      </div>
    </section>
  );
}
