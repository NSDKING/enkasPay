import { API, graphqlOperation } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { listAccounts, listUsers } from '../graphql/queries';
import './css/consultPage.css';
import { useNavigate } from 'react-router-dom';
import StafNavbar from '../components/StafNavbar';
import { createAccount } from '../graphql/mutations'; // Import your createAccount mutation

export default function TestPage() {
  const navigate = useNavigate();
  const [Accounts, setAccount] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isButtonEnabled, setButtonEnabled] = useState(false);

 

  const getAccount = async () => {
    if (loading) {
      return;
    }
    setLoading(true);

    try {
      const response = await API.graphql(graphqlOperation(listAccounts, { limit: 1000 }));
 
      setAccount(response.data.listAccounts.items);
      console.log(response.data.listAccounts.items);
      setButtonEnabled(true); // Enable the button once the account list is ready
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  }

  useEffect(() => {
    getAccount();
   }, []);

  const handleDuplicateDeletedAccounts = async () => {
    try {
      console.log("starting")
      const deletedAccounts = Accounts.filter((item) => !item.deleted);
      console.log(deletedAccounts)

      Accounts.forEach(async element => {
            const newAccountInput = {
                mail:element.mail,
                passe:element.passe,
                profil:element.profil,
                endDateAccount:element.endDateAccount,
                endDateProfil:element.endDateProfil,
                pin:element.pin,
                free:element.free,
                service:element.service,
                userID:element.userID,
              };      

        // Execute the mutation to create a new account
        const response = await API.graphql(graphqlOperation(createAccount, { input: newAccountInput }));
        console.log(`Duplicated account for user ID ${element.userID}`);
        console.log(response);

     
        
      });

    } catch (error) {
      console.error('Error duplicating deleted accounts:', error);
    }
  };

  return (
    <>
      <section className='ConsultPage'>
        <StafNavbar></StafNavbar>

        <div className="buttonContainer">
          <button
            onClick={handleDuplicateDeletedAccounts}
            disabled={!isButtonEnabled} // Disable the button if the list is not ready
          >
            Duplicate Deleted Accounts with Users
          </button>
        </div>
      </section>
    </>
  );
}
