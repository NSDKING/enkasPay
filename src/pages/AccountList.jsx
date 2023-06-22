import { useState } from "react";
import StafNavbar from "../components/StafNavbar";
import { listAccounts } from "../graphql/queries";
import { API, graphqlOperation } from 'aws-amplify';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AccountList() {    
    const [loading, setLoading] = useState(false)
    const [AccountList, setAccountList] = useState([])
    const [UaccountList, setUaccountList] = useState([])
    const [searchNum, setSearchNum] = useState('');
    const navigate = useNavigate();

    const handleClick = (mail, remplissage)=>{
        navigate("/profile-list", { state: {  mail: mail, remplissage:remplissage } }) 
     }

    const getAccount = async()=>{
        if(loading){
            return;
        }
        setLoading(true)  

        try {

            const response= await API.graphql(graphqlOperation(listAccounts));
            setAccountList(response.data.listAccounts.items)
         }catch(e){
                console.log(e)

        }
        setLoading(false)

       }

    const uniqueAccount = (()=>{
        let listAccount=[]
        let listAccountMail = []


        AccountList.forEach((item)=>{
            if(!listAccountMail.includes(item.mail) && item._deleted !=true){

                let newItem ={
                    id:item.id,
                    mail:item.mail,
                    passe:item.passe,
                    endDateAccount:item.endDateAccount,
                    free:item.free,
                    service:item.service,
                    _version:item._version,
                    _deleted:item._deleted,
                    remplissage:1,
                }
              listAccount.push(newItem)
              listAccountMail.push(newItem.mail)
      
            }else{
                listAccount.forEach((account)=>{
                    if(account.mail==item.mail){
                        if(!account.free){
                            account.remplissage = account.remplissage+1
                        }

                    }
                })
            }
          })
          setUaccountList(listAccount)
    })

    useEffect(() => {
        getAccount()    
          
     }, [ ])
    
    useEffect(() => {
        
        uniqueAccount()
        console.log(UaccountList)
     }, [AccountList])
    return(
        <div>
            <StafNavbar></StafNavbar>
            <h3>comptes: {UaccountList.length}</h3>

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
                            UaccountList.map(item => (
                                    <tr key={item.id} onClick={()=>{
                                        handleClick(item.mail, item.remplissage) 
                                         }}>
                                        <td className="std">{item.mail}</td>
                                        <td className="std">{item.passe}</td>
                                        <td className="std">{item.endDateAccount}</td> 
                                        <td className="std">{item.service}</td> 
                                        <td className="std">{item.remplissage}</td> 
                                    </tr>
                                ))
                        )} 
                        
                    </tbody>
                </table>

        </div>


        </div>
        
    )
}
