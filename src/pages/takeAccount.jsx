import { API, graphqlOperation } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DefaultButton from '../components/DefaultButton';
import { listAccounts } from '../graphql/queries';
import './css/takenAccount.css';
import { useForm, Controller } from "react-hook-form";
import { listUsers } from '../graphql/queries';
import { updateAccount } from '../graphql/mutations';
import { useNavigate } from 'react-router-dom';
import StafNavbar from '../components/StafNavbar';


export default function TakeAccount() {
    const { state } = useLocation();
    const { service } = state;
    const [Accounts, setAccount] = useState([])
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false)
    const [userList, setUserList] = useState([])
    const [theAccount, setTheAccount] = useState({})
    const [daysToAdd, setDaysToAdd] = useState(0); // New state for the number of days to add
    
    const [disp, setDisp] = useState(0)
    const navigate = useNavigate();


    const {formState: {errors}, handleSubmit, register, control} = useForm();

      
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

    const getListUsers = async()=>{
        if(loading){
          return;
      }
      
      setLoading(true)
      try {
      
        const response= await API.graphql(graphqlOperation(listUsers, { limit: 1000 }));
        setUserList(response.data.listUsers.items)
     
      }catch(e){
              console.log(e)
    
      }
      setLoading(false)
     
      }

    const getAccount = async()=>{
        if(loading){
            return;
        }
        setLoading(true)  

        try {

            const response= await API.graphql(graphqlOperation(listAccounts, { limit: 1000 }));
            const availableAccounts = response.data.listAccounts.items.filter((item) => item.free === true && item.service === service && !item.deleted);

            setAccount(availableAccounts)
         }catch(e){
                console.log(e)

        }
        setLoading(false)

 
       }
    useEffect(() => {
       getAccount()
       getListUsers()
 
         
    }, [ ])
     
    const handleAccount = ()=>{
        setShow(true)
        let i=0
        Accounts.map((item)=>{
                if(item.free == true && item.service == service && !item.deleted){
                    setTheAccount(item)
                     i++
                }else{
                    console.log('no '+ service + item.service)  
                }
    })
    setDisp(i)
    return(theAccount)
 
    
    }

    const handleUseAccount= async (data)=> {
        if(loading){
            return;
        }
        
        setLoading(true)
         
        try {
        

            const today = new Date();
            today.setDate(today.getDate() + daysToAdd);
            
            // Convert to a string in the correct format (e.g., AWSDate format)
            const formattedDate = today.toISOString().slice(0, 10); // Extract YYYY-MM-DD
            
            // Include 'endDateProfil' in the input object with the formatted date
            const input = {
              id: theAccount.id,
              _version: theAccount._version,
              userID: data.user,
              free: false,
              endDateProfil: formattedDate,
            };
            
    

              
            const response= await API.graphql(graphqlOperation(updateAccount, { input: input }));
            console.log(response)
             setShow(false)
       
        }catch(e){
                console.log(e)
      
        }
        setLoading(false)

    }

    
    return(
        <section className="takeAccountPage">
        	
            <StafNavbar></StafNavbar>
        
           
          {
            show?(
                <section>
                    <p className='pp'>il reste {disp} disponible</p>
                 
                    <form className='miniform'
                          onSubmit={handleSubmit((data=>{
                            handleUseAccount(data)
                          }))}
                    >
                        <div className='account-box'>
                            <p>mail: {theAccount.mail}</p>
                            <p>passe: {theAccount.passe}</p>
                            <p>profil: {theAccount.profil}</p>
                            <p>pin: {theAccount.pin}</p>
                        </div>
                    
                        <label>Nombre de jours à ajouter:</label>
                        <input
                        type="number"
                        value={daysToAdd}
                        onChange={(e) => setDaysToAdd(Number(e.target.value))}
                        />


                    <label>utilisateur :</label>
                    <input type="text" 
                                    list="user" 
                                    {...register('user', { required: 'ceci est obligatoire'})}

                                />
                                <datalist id="user">
                                    <option value="">Select...</option>

                                        {
                                            userList.map(item => (
                                                <option value={item.id} key={item.id}>{item.FamilyName +" "+ item.LastName}</option>
                                            ))
                                        }

                                </datalist>
                        <DefaultButton text={'utiliser'} bgcolor={"black"} textcolor={"white"} width={"50%"} height={"50px"} type={"submit"} marginTop={"20px"}/>
                        <DefaultButton text={'annuler'} bgcolor={"black"} textcolor={"white"} width={"50%"} height={"50px"} onPress={()=>{setShow(false)}} marginTop={"20px"}/>

                    </form>
                </section>
            ):(
                <div>
                    <DefaultButton text={'comptes'} bgcolor={"black"} textcolor={"white"} width={"50%"} height={"50px"} onPress={handleAccount}/>

                </div>
            )
          }
 
        </section>
    )
}

