import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listAccounts, listComptas, listUsers } from '../../graphql/queries';
import './index.css';

export default function Board() {
  const [comptasMonth, setComptasMonth] = useState([]);
  const [comptasAnnual, setComptasAnnual] = useState([]);
  const [comptastoDay, setComptastoDay] = useState([]);
  const [users, setUsers] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(false);

  function getCurrentYear() {
    const today = new Date();
    const yearNumber = today.getFullYear();
    return yearNumber;
  }

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

  function getYearFromDate(dateString) {
    const dateObject = new Date(dateString);
    const yearNumber = dateObject.getFullYear();
    return yearNumber;
  }

  function getDayFromDate(dateString) {
    const dateObject = new Date(dateString);
    const day = dateObject.getDate();
    return day;
  }
  
  const calculateMonthlyBenefit = () => {
    const monthlyBenefit = parseFloat(totalCa) + parseFloat(totalExpense);
    return monthlyBenefit.toFixed(2);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch Comptas
        const responseComptas = await API.graphql(graphqlOperation(listComptas, { limit: 1000 }));
        const NondeletedCompta = responseComptas.data.listComptas.items.filter(item=>!item._deleted)
        const filteryearComptas = NondeletedCompta.filter(item => getYearFromDate(item.date) === getCurrentYear());
        const filterComptas = filteryearComptas.filter(item => getMonthNumberFromDate(item.date) === getCurrentMonthNumber());
        setComptasMonth(filterComptas);
        setComptasAnnual(filteryearComptas);

        // Fetch Users
        const responseUsers = await API.graphql(graphqlOperation(listUsers, { limit: 1000 }));
        const nonDeletedUser = responseUsers.data.listUsers.items.filter(user=>!user._deleted);

        const filterUsers = nonDeletedUser.filter(user => getMonthNumberFromDate(user.createdAt) === getCurrentMonthNumber());
        setUsers(filterUsers);

        // Fetch Accounts
        const responseAccounts = await API.graphql(graphqlOperation(listAccounts, { limit: 1000 }));
        const nonDeletedAccount = responseAccounts.data.listAccounts.items.filter(account=>!account._deleted);
        const filterAccounts = nonDeletedAccount.filter(account => !account.free); // Active customers
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
  const totalCa = comptasMonth.reduce((sum, compta) => (compta.amount >= 0 ? sum + parseFloat(compta.amount) : sum), 0);
  const totalExpense = comptasMonth.reduce((sum, compta) => (compta.amount < 0 ? sum + parseFloat(compta.amount) : sum), 0);
  const newUserCount = users.length;
  const annualCa = comptasAnnual.reduce((sum, compta) =>(compta.amount >= 0 ? sum + parseFloat(compta.amount) : sum), 0)
  const annualExpense = comptasAnnual.reduce((sum, compta) =>(compta.amount <= 0 ? sum + parseFloat(compta.amount) : sum), 0)
  const solde = annualCa + annualExpense;

 


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

 
  const calculateAnnualReturn = () => {
    const annualReturnPercentage = (annualCa + annualExpense) / -annualExpense * 100;
    return annualReturnPercentage.toFixed(2);
  };

  const calculateAnnualMargin = () => {
    const annualMarginPercentage = (annualCa + annualExpense) / annualCa * 100;
  
    return annualMarginPercentage.toFixed(2);
  };

  useEffect(() => {
     
    console.log("test")
  }, [])
  

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

      <div className="dashboard-box">
        <h2>Monthly Benefit</h2>
        <p>{calculateMonthlyBenefit()}</p>
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
        <p>{annualCa}</p>
      </div>

      <div className="dashboard-box">
        <h2>Annual Expense</h2>
        <p>{annualExpense}</p>
      </div>
    </section>
  );
}
