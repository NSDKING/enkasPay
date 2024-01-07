import { useState } from "react";
import StafNavbar from "../components/StafNavbar";
import { listAccounts } from "../graphql/queries";
import { API, graphqlOperation } from 'aws-amplify';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { updateAccount } from "../graphql/mutations";


export default function AccountList() {
  const { state } = useLocation();
  const { service } = state;
  const [editMode, setEditMode] = useState({ rowId: null, colName: null });
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

  const handleUpdtateAccount = async (data) => {
    setLoading(true);
  
    try {
      if (data.mail) {
        // Filter all accounts that match the edited email
        const accountsToUpdate = AccountList.filter(
          (item) => item.mail === data.mailClick
        );
  
        // Update each matching account
        const updatePromises = accountsToUpdate.map(async (account) => {
          const input = {
            id: account.id,
            mail: data.mail,
            _version: account._version,
          };
          const response = await API.graphql(
            graphqlOperation(updateAccount, { input: input })
          );
          console.log(response);
        });
  
        await Promise.all(updatePromises);
        alert("changement effectué");
      }
  
      if (data.passe) {
        // Filter all accounts that match the edited email
        const accountsToUpdate = AccountList.filter(
          (item) => item.mail === data.mailClick
        );
  
        // Update each matching account
        const updatePromises = accountsToUpdate.map(async (account) => {
          const input = {
            id: account.id,
            passe: data.passe,
            _version: account._version,
          };
          const response = await API.graphql(
            graphqlOperation(updateAccount, { input: input })
          );
          console.log(response);
        });
  
        await Promise.all(updatePromises);
        window.location.reload();
        alert("changement effectué");
      }
  
      if (data.endDateAccount) {
        // Filter all accounts that match the edited email
        const accountsToUpdate = AccountList.filter(
          (item) => item.mail === data.mailClick
        );

        // Update each matching account
        const updatePromises = accountsToUpdate.map(async (account) => {
          const input = {
            id: account.id,
            endDateAccount: data.endDateAccount,
            _version: account._version,
          };
          const response = await API.graphql(
            graphqlOperation(updateAccount, { input: input })
          );
          console.log(response);
        });
        await Promise.all(updatePromises);
        window.location.reload();
        alert("changement effectué");
      }
      setEditMode({ rowId: null });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  

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
              <th>remplissage</th>
             </tr>
          </thead>
          <tbody>
            {loading ? (
              <h2>Loading...</h2>
            ) : (
              filteredAccountList.map(item => (
                <tr key={item.id} >

                  <td className="std" onDoubleClick={() => {setEditMode({rowId:item.id, colName:item.mail})}}>
                  {
                    editMode.rowId===item.id && editMode.colName==item.mail? (
                          <input
                          className='input-click'
                          type='text'
                          onBlur={(e) =>{ 
                            const data = {
                              id: item.id,
                              version:item._version,
                              mail:e.target.value,
                              mailClick:item.mail,
                              endDateAccount:null,
                              passe:null,
                            }
                            handleUpdtateAccount(data)}}
                          defaultValue={item.mail}
                        />
                          ):(
                            <h3>
                              {item.mail}
                            </h3>
                          )
                    }
                  </td>

                  <td className="std" onDoubleClick={() => {setEditMode({rowId:item.id, colName:item.passe})}}>
                  {
                    editMode.rowId===item.id && editMode.colName==item.passe? (
                          <input
                          className='input-click'
                          type='text'
                          onBlur={(e) =>{ 
                            const data = {
                              id: item.id,
                              version:item._version,
                              passe:e.target.value,
                              endDateAccount:null,
                              mail:null,
                              mailClick:item.mail,

                             }
                            handleUpdtateAccount(data)}}
                          defaultValue={item.passe}
                        />
                          ):(
                            <h3>
                              {item.passe}
                            </h3>
                          )
                    }
                  </td>

                  <td className="std" onDoubleClick={() => {setEditMode({rowId:item.id, colName:item.endDateAccount})}}>
                  {
                    editMode.rowId===item.id && editMode.colName==item.endDateAccount? (
                          <input
                          className='input-click'
                          type='text'
                          onBlur={(e) =>{ 
                            const data = {
                              id: item.id,
                              version:item._version,
                              endDateAccount:e.target.value,
                              mail:null,
                              passe:null,
                              mailClick:item.mail,

                            }
                            handleUpdtateAccount(data)}}
                          defaultValue={item.endDateAccount}
                        />
                          ):(
                            <h3>
                              {item.endDateAccount}
                            </h3>
                          )
                    }
                  </td>
                  

          
                  <td className="std" onClick={() => {handleClick(item)
                }}>{item.service}</td>
                  <td className="std"  onClick={() => { handleClick(item)
                }}>{item.remplissage}</td>
                 </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}


