import { API, graphqlOperation } from "aws-amplify";
import { listAccounts } from "../graphql/queries";
import { useEffect, useState } from "react";
import StafNavbar from "../components/StafNavbar";
import { useNavigate } from 'react-router-dom';


export default function AccountToday() {
    const [Accounts, setAccount] = useState([]);
    const [finishToday, setFinishToday] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        getAccount();
        AccountFinishToday();
       }, [Accounts]);

    function getCurrentDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = (today.getMonth() + 1).toString().padStart(2, '0');
        const day = today.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
      }

        
    const getAccount = async()=>{
        if(loading){
            return;
        }
        setLoading(true)  

        try {

          const response= await API.graphql(graphqlOperation(listAccounts, { limit: 1000 }));
          const NotDeleted = response.data.listAccounts.items.filter((item) => !item.deleted);

          setAccount(NotDeleted)
           }catch(e){
                console.log(e)

        }
        setLoading(false)

 
       }

       const AccountFinishToday = () => {
        let today = getCurrentDate();
 
        let finishTodayAccounts = Accounts.filter(item => {
          return  item.endDateAccount == today;
        });

        let listAccount=[]
        let listAccountMail = []

        finishTodayAccounts.forEach((item)=>{
          if(!listAccountMail.includes(item.mail)){
            listAccount.push(item)
            listAccountMail.push(item.mail)
    
          }
        })
        setFinishToday(listAccount);
       };
      
 
       const handleupdate = (data)=>{
        navigate("/updateAccount", { state: {  item: data } }) 
     }

  


    return(
        <section>
            <StafNavbar></StafNavbar>
            <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>mail</th>
              <th>passe</th>
              <th>fin compte</th>
             </tr>
          </thead>
          <tbody>
            {
             
              finishToday.map(item => (
                <tr key={item.id} onClick={() => {
                  handleupdate(item);
                }}>
                  <td>{item.mail}</td>
                  <td>{item.passe}</td>
                  <td>{item.endDateAccount}</td>
                 </tr>
              ))
            }
          </tbody>
        </table>
      </div>

        </section>
    )
}
