import React, { useState } from "react";
import StafNavbar from "../../components/StafNavbar";
import "./index.css";
import { useLocation } from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";

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
    // Handle full payment logic
    console.log("Full Payment button clicked");
    
    // Use the createOrder mutation to create an order
    const inputOrder = {
      price: fullPrice, 
      ProductName: product, 
      userID:user
    }
    const orderResponse = await API.graphql(graphqlOperation(createOrder, { input: inputOrder }));
    const orderId = orderResponse.data.createOrder.id;

    // Use the createTransactions mutation to create transactions
    const inputTransaction = {
      amount: fullPrice, 
      userID: user, 
      orderID: orderId, 
      advance:false, 
      full:fullPrice
    }

    const ResponseTransaction = await API.graphql(graphqlOperation(createTransactions, { input: inputTransaction }));
 
    // Use the createCompta mutation to create compta

    const inputCompta = {
      title:product,
      amount:fullPrice,
      type:"abonnement",
      userID:user,
    }
  
    const ResponseCompta = await API.graphql(graphqlOperation(createCompta, { input: inputCompta }));
    console.log(ResponseCompta)

    alert("tout est ok");
    // Reset the form state
    setShowFullPaymentForm(false);
    setFullPrice("");
   };

  const handleAdvanceSubmit = async () => {
    // Handle advance payment logic
    console.log("Advance button clicked");
    
    // Use the createOrder mutation to create an order
    const orderResponse = await API.graphql(graphqlOperation(createOrder, { input: { price: fullPrice, ProductName: product, userID:user } }));
    const orderId = orderResponse.data.createOrder.id;

    // Use the createTransactions mutation to create transactions
    const responseTransaction = await API.graphql(graphqlOperation(createTransactions, { input: { amount: advance, userID: user, full:fullPrice, advance:true, orderID: orderId } }));
    console.log(responseTransaction);

    // Use the createCompta mutation to create compta

    const inputCompta = {
      title:product,
      amount:fullPrice,
      type:"abonnement",
      userID:user,
    }
  
    const ComptaResponse = await API.graphql(graphqlOperation(createCompta, { input: { inputCompta } }));
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
        <button type="submit" className="submit-button" onClick={()=>{handleFullPaymentSubmit()}}>
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
        <button type="submit" className="submit-button" onClick={()=>{handleAdvanceSubmit()}}>
          Submit
        </button>
      </div>
    </section>
  );
}

 
 


export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      price
      userID
      productID
      ProductName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createTransactions = /* GraphQL */ `
  mutation CreateTransactions(
    $input: CreateTransactionsInput!
    $condition: ModelTransactionsConditionInput
  ) {
    createTransactions(input: $input, condition: $condition) {
      id
      amount
      advance
      full
      userID
      orderID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;

export const createCompta = /* GraphQL */ `
  mutation CreateCompta(
    $input: CreateComptaInput!
    $condition: ModelComptaConditionInput
  ) {
    createCompta(input: $input, condition: $condition) {
      id
      title
      amount
      type
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;