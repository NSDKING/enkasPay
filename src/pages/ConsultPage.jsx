import { API, graphqlOperation } from 'aws-amplify';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { listAccounts, listUsers } from '../graphql/queries'
import './css/consultPage.css'
import { useForm, Controller } from "react-hook-form";
import { updateAccount } from '../graphql/mutations';
import { Alert } from '@aws-amplify/ui-react';


export default function ConsultPage() {
    const [Accounts, setAccount] = useState([])
    const [loading, setLoading] = useState(false)
    const [userList, setUserList] = useState([])
    const [showModal, setShowModal] = useState(false);
    const {formState: {errors}, handleSubmit, register, control, setValue} = useForm();
    const [theAccountData, setTheAccountData] = useState({})

    
    const handleRowClick = (data) => {
        setShowModal(true);
        setTheAccountData(data)
 
    }

      const handleFormClick = async(data) => {
        if(loading){
            return;
        }
        
        setLoading(true)
        try {
            const input = { 
                id:theAccountData.id,
                mail: data.mail,
                profil: data.profil,
                passe:data.passe,
                endDateAccount:data.endDateAccount,
                endDateProfil:data.endDateProfil,
                pin:data.pin,
                numero:data.numero,
                userID:data.user,
                _version:theAccountData.value
                
              };

            const response= await API.graphql(graphqlOperation(updateAccount, { input: input }));
             setShowModal(false);
            Alert('ok')
       
        }catch(e){
                console.log(e)
      
        }
        setLoading(false)
      }
      
    const Modal = ({ data }) => {
        useEffect(() => {
            setValue("mail", theAccountData.mail);
            setValue("profil", theAccountData.profil);
            setValue("passe", theAccountData.passe);
            setValue("endDateProfil", theAccountData.endDateProfil);
            setValue("endDateAccount", theAccountData.endDateAccount);
            setValue("pin", theAccountData.pin);
    
          
        }, [])
        return (
        <div className="modal">
            <div className="modal-content">
            <form id="my-form"
                    onSubmit={handleSubmit((data=>{handleFormClick(data)}))}>

                <label for="mail">mail :</label>
                <input 
                    type="mail" 
                    id="mail" 
                    defaultValue={data.mail}
                    {...register('mail', { required: 'ceci est obligatoire'})}

                />

                <label for="profil">profil :</label>
                <input 
                    type="text" 
                    id="profil" 
                    name="profil"
                    defaultValue={data.profil}
                    {...register('profil', { required: 'ceci est obligatoire'})}
                    
                    />

                <label for="profil">passe :</label>
                <input 
                    type="text" 
                    id="passe" 
                    name="passe"
                    defaultValue={data.passe}

                    {...register('passe', { required: 'ceci est obligatoire'})}
                    
                    />

                <label for="telephone">fin du profil :</label>
                <input 
                    type="date" 
                    id="fin-abonnement" 
                    name="fin-abonnement"
                    defaultValue={data.endDateProfil}

                    {...register('endDateProfil', { required: 'ceci est obligatoire'})}
                    
                    />

                <label for="fin-abonnement">fin du compte :</label>
                <input 
                    type="date" 
                    id="endAccount" 
                    name="endAccount"
                    defaultValue={data.endDateAccount}

                    {...register('endDateAccount', { required: 'ceci est obligatoire'})}

                        
                    />

                <label for="pin">pin :</label>
                <input 
                    type="number" 
                    id="pin" 
                    name="pin"
                    defaultValue={data.pin}

                    {...register('pin', { required: 'ceci est obligatoire'})}
                    
                    />

                <label for="pin">utilisateur :</label>
                <Controller
                        name="mySelect"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                        <select {...field} >
                            <option value="">Select...</option>
                      
                            {
                                userList.map(item => (
                                    <option value={item.id} key={item.id}>{item.FamilyName +" "+ item.LastName}</option>
                                ))
                            }
                        </select>
                        )}
                    />

                <input type="submit" id="add-client-btn"  />
                </form>
            <button onClick={() => setShowModal(false)}>Close</button>
            </div>
        </div>
        );
    };


      
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
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <h2>Loading...</h2>
                        ) : (
                            Accounts.map(item => (
                                    <tr key={item.id} onClick={()=>{
                                        handleRowClick(item)
                                        setTheAccountData(item)
                                         }}>
                                        <td>{item.mail}</td>
                                        <td>{item.passe}</td>
                                        <td>{item.profil}</td>
                                        <td>{item.endDateAccount}</td>
                                        <td>{item.pin}</td>
                                        <td>{handleName(item.userID)}</td>
                                        <td>{item.numero}</td>
                                        <td>{item.endDateProfil}</td>
                                    </tr>
                                ))
                        )} 
                        
                    </tbody>
                </table>

        </div>
         
        </section>
        {showModal && <Modal data={theAccountData} />}

       </>
    )
}

   





















