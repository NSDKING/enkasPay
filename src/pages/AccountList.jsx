import { useState } from "react";
import StafNavbar from "../components/StafNavbar";
import { listAccounts } from "../graphql/queries";
import { API, graphqlOperation } from 'aws-amplify';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';


export default function AccountList() {
  const { state } = useLocation();
  const { service } = state;

  const [loading, setLoading] = useState(false);
  const [AccountList, setAccountList] = useState([]);
  const [UaccountList, setUaccountList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleClick = (item) => {
    navigate("/click-accountList", { state: { item:item } }) 

  }

  const getAccount = async () => {
    if (loading) {
      return;
    }
    setLoading(true);

    try {
      let list= []
      const response= await API.graphql(graphqlOperation(listAccounts, { limit: 10000 }));
      const availableAccounts = response.data.listAccounts.items.filter((item) => item.service === service && !item._deleted );

       availableAccounts.forEach((item)=>{
        if(item.service == service && item._deleted != true ){
          list.push(item)
        }

      })
      setAccountList(list);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  }

  

   

  const uniqueAccount = () => {
    let listAccount = [];
    let listAccountMail = [];
  
    AccountList.forEach((item) => {
      if (!listAccountMail.includes(item.mail) && !item._deleted) {
        // Create a new account item if it's unique
        let newItem = {
          id: item.id,
          mail: item.mail,
          passe: item.passe,
          endDateAccount: item.endDateAccount,
          service: item.service,
          _version: item._version,
          _deleted: item._deleted,
          remplissage: item.free ? 0 : 1,
        };
        listAccount.push(newItem);
        listAccountMail.push(newItem.mail);
      } else {
        // Find the existing account with the same email and update it immutably
        listAccount = listAccount.map((account) => {
          if (account.mail === item.mail && !item.free && !item._deleted) {
            console.log(account)
            return { ...account, remplissage: account.remplissage + 1 };
          }
          return account;
        }); 
      }
    });
  
    // Set the updated list of unique accounts
    setUaccountList(listAccount);
    console.log(listAccount);
  };
  

  useEffect(() => {
    getAccount();
  }, [])

  useEffect(() => {
    uniqueAccount();
  }, [AccountList])

  const filteredAccountList = UaccountList.filter(item =>
    item.mail.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
    
      <StafNavbar></StafNavbar>
      <input
          type="text"
          placeholder="Search by mail"
          value={searchQuery}
          onChange={event => setSearchQuery(event.target.value)}
          className="searchInput"
          
        />

      <h3>comptes: {filteredAccountList.length}</h3>


      <div className="tableContainer">


        <table>
          <thead>
            <tr>
              <th>mail</th>
              <th>password</th>
              <th>fin</th>
              <th>service</th>
             </tr>
          </thead>
          <tbody>
            {loading ? (
              <h2>Loading...</h2>
            ) : (
              filteredAccountList.map(item => (
                <tr key={item.id} onClick={() => {
                  handleClick(item)
                }}>
                  <td className="std">{item.mail}</td>
                  <td className="std">{item.passe}</td>
                  <td className="std">{item.endDateAccount}</td>
                  <td className="std">{item.service}</td>
                 </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
