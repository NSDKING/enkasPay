import React, { useState } from "react";
import StafNavbar from "../../components/StafNavbar";
import "./index.css";
import { useLocation } from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";
import { createOrder, createTransactions, createCompta } from '../../graphql/mutations';

export default function PaymentAdvance() {
  const { state } = useLocation();
  const { user, product } = state;  

  const [showFullPaymentForm, setShowFullPaymentForm] = useState(false);
  const [showAdvanceForm, setShowAdvanceForm] = useState(false);
  const [fullPrice, setFullPrice] = useState("");
  const [advance, setAdvance] = useState("");

  const handleFullPaymentClick = () => {
    setShowFullPaymentForm(true);
    setShowAdvanceForm(false);
  };

  const handleAdvanceClick = () => {
    setShowFullPaymentForm(false);
    setShowAdvanceForm(true);
  };

  const handleFullPaymentSubmit = async () => {
    const today = new Date();

    // Handle full payment logic
    console.log("Full Payment button clicked");
    
    // current date
    const awsDateFormat = today.toISOString();

    
    // Use the createOrder mutation to create an order
    const inputOrder = {
      price: fullPrice, 
      ProductName: product, 
      userID: user,
      date: awsDateFormat,
    }
    const orderResponse = await API.graphql(graphqlOperation(createOrder, { input: inputOrder }));
    const orderId = orderResponse.data.createOrder.id;

    // Use the createTransactions mutation to create transactions
    const inputTransaction = {
      amount: fullPrice, 
      userID: user, 
      orderID: orderId, 
      advance: false, 
      full: fullPrice,
      date: awsDateFormat,
    }

    const ResponseTransaction = await API.graphql(graphqlOperation(createTransactions, { input: inputTransaction }));
 
    // Use the createCompta mutation to create compta
    const inputCompta = {
      title: product,
      amount: fullPrice,
      type: "abonnement",
      userID: user,
      date: awsDateFormat,
    }
  
    const ResponseCompta = await API.graphql(graphqlOperation(createCompta, { input: inputCompta }));
    console.log(awsDateFormat)
    alert("tout est ok");
    // Reset the form state
    setShowFullPaymentForm(false);
    setFullPrice("");
   };

  const handleAdvanceSubmit = async () => {
    const today = new Date();

    // Handle advance payment logic
    console.log("Advance button clicked");
    const awsDateFormat = today.toISOString();

    
    // Use the createOrder mutation to create an order
    const orderInput ={ 
      price: fullPrice, 
      ProductName: product, 
      userID: user,
      date: awsDateFormat,

    }
    const orderResponse = await API.graphql(graphqlOperation(createOrder, { input: orderInput }));
    const orderId = orderResponse.data.createOrder.id;

    // Use the createTransactions mutation to create transactions
    const transactionInput = { 
      amount: advance, 
      userID: user, 
      full: fullPrice, 
      advance: true, 
      orderID: orderId,
      date: awsDateFormat,
    }

    const responseTransaction = await API.graphql(graphqlOperation(createTransactions, { input: transactionInput  }));
    console.log(responseTransaction);
 
    // Use the createCompta mutation to create compta
    const inputCompta = {
      title: product,
      amount: fullPrice,
      type: "abonnement",
      userID: user,
      date: awsDateFormat,
    }
  
    const ComptaResponse = await API.graphql(graphqlOperation(createCompta, { input: inputCompta  }));
    console.log(ComptaResponse)

    // Reset the form state
    setShowAdvanceForm(false);
    setFullPrice("");
    setAdvance("");
    alert("tout est ok")
  };

  return (
    <section>
      <StafNavbar />
      <div className="payment-buttons">
        <button className="full-payment-button" onClick={handleFullPaymentClick}>
          Full Payment
        </button>
        <button className="advance-button" onClick={handleAdvanceClick}>
          Advance
        </button>
      </div>

      <div className={`payment-form ${showFullPaymentForm ? "visible" : ""}`}>
        <label htmlFor="fullPrice">Enter Full Price:</label>
        <input
          type="number"
          id="fullPrice"
          className="price-input"
          value={fullPrice}
          onChange={(e) => setFullPrice(e.target.value)}
        />
        <button type="submit" className="submit-button" onClick={() => { handleFullPaymentSubmit() }}>
          Submit
        </button>
      </div>

      <div className={`payment-form ${showAdvanceForm ? "visible" : ""}`}>
        <label htmlFor="fullPrice">Enter Full Price:</label>
        <input
          type="number"
          id="fullPrice"
          className="price-input"
          value={fullPrice}
          onChange={(e) => setFullPrice(e.target.value)}
        />
        <label htmlFor="advance">Enter Advance:</label>
        <input
          type="number"
          id="advance"
          className="advance-input"
          value={advance}
          onChange={(e) => setAdvance(e.target.value)}
        />
        <button type="submit" className="submit-button" onClick={() => { handleAdvanceSubmit() }}>
          Submit
        </button>
      </div>
    </section>
  );
}
