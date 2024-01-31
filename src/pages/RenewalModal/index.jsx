import { useState } from 'react';
import { createCompta, createOrder, createTransactions, updateAccount } from '../../graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';
import "./index.css"


const RenewalModal = ({ selectedProfiles, onClose, service, profileRenewal }) => {
  const [price, setPrice] = useState('');
  const [days, setDays] = useState('');
  const [advanceAmount, setAdvanceAmount] = useState('');
  const [showAdvanceInputs, setShowAdvanceInputs] = useState(false);
  const [fullPrice, setFullPrice] = useState("");

  const [loading, setLoading] = useState(false);
 
  const handleButtonClick = (isAdvance) => {
    setShowAdvanceInputs(isAdvance);
  };

  const handleRenewal = async () => {
    if (loading) {
      return;
    }
    setLoading(true);

    try {
      const today = new Date();
      today.setDate(today.getDate() + parseInt(days, 10));
      const formattedDate = today.toISOString().slice(0, 10);
      const input = {
        id: profileRenewal.id,
        _version: profileRenewal._version,
        userID: profileRenewal.userID,
        free: false,
        endDateProfil: formattedDate,
      };
      console.log(input)
      const response = await API.graphql(graphqlOperation(updateAccount, { input }));

      //current date
      const awsDateFormat = today.toISOString();

      // Create compta
      const inputCompta = {
        title: service + days,
        amount: !showAdvanceInputs? fullPrice: advanceAmount,
        type: "abonnement",
        userID: profileRenewal.userID,
        
      };
      const ResponseCompta = await API.graphql(graphqlOperation(createCompta, { input: inputCompta }));
      console.log(ResponseCompta);
      console.log(inputCompta);

      // Create Order

      const OrderInput = { 
        price: fullPrice, 
        ProductName: service + days, 
        userID:profileRenewal.userID,
        
      } 
      const orderResponse = await API.graphql(graphqlOperation(createOrder, { input:  OrderInput}));
      const orderId = orderResponse.data.createOrder.id;
  
      // Create transaction
 
      const inputTransaction= { 
         amount: advanceAmount,
         userID: profileRenewal.userID, 
         full:fullPrice, 
         advance:showAdvanceInputs && advanceAmount ? true : false, 
         orderID: orderId,
         

        }
      const responseTransaction = await API.graphql(graphqlOperation(createTransactions, { input: inputTransaction }));
      console.log(responseTransaction);

      onClose();  

     } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="renewal-modal">
      <h2>Renewal Modal</h2>
      <button onClick={() => handleButtonClick(false)}>Full Price</button>
      <button onClick={() => handleButtonClick(true)}>Advance</button>

      {showAdvanceInputs && (
        <>
          <label>Advance Amount:</label>
          <input type="text" value={advanceAmount} onChange={(e) => setAdvanceAmount(e.target.value)} />
        </>
      )}

      <label htmlFor="fullPrice">Enter Full Price:</label>
        <input
          type="number"
          id="fullPrice"
          className="price-input"
          value={fullPrice}
          onChange={(e) => setFullPrice(e.target.value)}
        />

      <label>Days:</label>
      <input type="text" value={days} onChange={(e) => setDays(e.target.value)} />

      <button onClick={handleRenewal}>Renew</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default RenewalModal;
