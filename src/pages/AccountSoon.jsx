import { API, graphqlOperation } from "aws-amplify";
import { listAccounts } from "../graphql/queries";
import { useEffect, useState } from "react";
import StafNavbar from "../components/StafNavbar";
import { useNavigate } from 'react-router-dom';

export default function AccountSoon() {
  const [Accounts, setAccount] = useState([]);
  const [finishSoon, setFinishSoon] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getAccount();
    AccountFinishSoon();
   }, [Accounts]);

  function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  
  function add10Days() {
    const date = new Date();
    date.setDate(date.getDate() + 10);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  } 
  
  function daysBetween(dateString1, dateString2) {
    const date1 = new Date(dateString1);
    const date2 = new Date(dateString2);
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return dayDiff;
  }
  
   
 

  const getAccount = async () => {
    if (loading) {
      return;
    }
    setLoading(true);

    try {
      const response = await API.graphql(graphqlOperation(listAccounts));
      let list = response.data.listAccounts.items.filter(item => {
        if (item._deleted !== true) {
          return item;
        }
      });

      setAccount(list);
     } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  // Get the account where the MainAccount subscription is finishing soon
  const AccountFinishSoon = () => {
    let newDate = add10Days();
    let today = getCurrentDate();
    

    let finishSoonAccounts = Accounts.filter(item => {
      return today < item.endDateAccount && item.endDateAccount < newDate;
    });
    
    let listAccount=[]
    let listAccountMail = []

    finishSoonAccounts.forEach((item)=>{
      if(!listAccountMail.includes(item.mail)){
        listAccount.push(item)
        listAccountMail.push(item.mail)

      }
    })

    setFinishSoon(listAccount);
   };

  const handleupdate = (data) => {
    navigate("/updateAccount", { state: { item: data } });
  };

  return (
    <div>
      <StafNavbar />
      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>mail</th>
              <th>passe</th>
              <th>fin compte</th>
              <th>day left</th>
            </tr>
          </thead>
          <tbody>
            {
            
              finishSoon.map(item => (
                <tr key={item.id} onClick={() => {
                  handleupdate(item);
                }}>
                  <td>{item.mail}</td>
                  <td>{item.passe}</td>
                  <td>{item.endDateAccount}</td>
                  <td>{daysBetween(item.endDateAccount, getCurrentDate())}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}
