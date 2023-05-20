import { API, graphqlOperation } from 'aws-amplify';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { listAccounts, listUsers } from '../graphql/queries'
import './css/consultPage.css'
import { useForm, Controller } from "react-hook-form";
import { updateAccount } from '../graphql/mutations';
import { Alert } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';


export default function ConsultPage() {
     const navigate = useNavigate();

    const [Accounts, setAccount] = useState([])
    const [loading, setLoading] = useState(false)
    const [userList, setUserList] = useState([])
    const [showModal, setShowModal] = useState(false);
    const {formState: {errors}, handleSubmit, register, control, setValue} = useForm();
    const [theAccountData, setTheAccountData] = useState({})
 
    
    const handleupdate = (data)=>{
        navigate("/updateAccount", { state: {  item: data } }) 
     }

  
      
    const getListUsers = async()=>{
        if(loading){
          return;
      }
      
      setLoading(true)
      try {
      
        const response= await API.graphql(graphqlOperation(listUsers));
        setUserList(response.data.listUsers.items)
     
      }catch(e){
              console.log(e)
    
      }
      setLoading(false)
     
      }


    
 
    const linkStyle = {
        float: "left",
        display: "block",
        color: '#fff',
        textAlign: "center",
        textDecoration: "none",
        paddingTop: "14px",
        paddingBottom: "14px",
        paddingRight:"16px",
        paddingLeft:"16px",
    }
     
    const getAccount = async()=>{
        if(loading){
            return;
        }
        setLoading(true)  

        try {

            const response= await API.graphql(graphqlOperation(listAccounts));
            setAccount(response.data.listAccounts.items)
         }catch(e){
                console.log(e)

        }
        setLoading(false)

 
       }
    useEffect(() => {
       getAccount()
       getListUsers()
         
    }, [ ])
    
    const handleName = (userid)=>{
        let username = "test"
        userList.map((item)=>{
            if(item.id === userid){
                username = item.FamilyName +" "+ item.LastName
            }
        })
        return username

    }

    return(
       <>
                <section className='ConsultPage'>

        <header className='ManagementHeader'> 
            <h1>ENKAS</h1>
        </header>
        <nav className="special_navbar">
            <Link to="/AddAccount" style={linkStyle}>ajouter</Link>
            <Link to="/ManageAccount" style={linkStyle}>prendre</Link>
            <Link to="/ConsultPage" style={linkStyle}>consulter</Link>
        </nav>

        <div className="tableContainer">
            <table>
                    <thead>
                        <tr>
                            <th>mail</th>
                            <th>passe</th>
                            <th>profil</th>
                            <th>fin compte</th>
                            <th>pin</th>
                            <th>utilisateur</th>
                            <th>numero</th>
                            <th>fin du profil</th>
                            <th>free</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <h2>Loading...</h2>
                        ) : (
                            Accounts.filter(item =>{
                                if (item._deleted !=true) {
                                        return item;
                                        }     
                                }).map(item => (
                                    <tr key={item.id} onClick={()=>{
                                        handleupdate(item)
 
                                         }}>
                                        <td>{item.mail}</td>
                                        <td>{item.passe}</td>
                                        <td>{item.profil}</td>
                                        <td>{item.endDateAccount}</td>
                                        <td>{item.pin}</td>
                                        <td>{handleName(item.userID)}</td>
                                        <td>{item.numero}</td>
                                        <td>{item.endDateProfil}</td>
                                        <td>{String(item.free)}</td>
                                    </tr>
                                ))
                        )} 
                        
                    </tbody>
                </table>

        </div>
         
        </section>
 
       </>
    )
}

   





















