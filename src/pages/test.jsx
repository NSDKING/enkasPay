import { createProduct } from "../graphql/mutations";


export default function Price() {
  return(
    <button onClick={async()=>{
      
    }}>

    </button>
  )

}



export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        name
        image
        id
        price {
          one_month
          one_year
          three_month
        }
        type
        cartCount
        buycount
        _deleted
        _version
      }
    }
  }
`;











import { API, graphqlOperation } from 'aws-amplify';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { listAccounts, listUsers } from '../graphql/queries'
import './css/consultPage.css'
import { useForm, Controller } from "react-hook-form";
import { updateAccount } from '../graphql/mutations';
import { Alert } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import StafNavbar from '../components/StafNavbar';


export default function ConsultPage() {
     const navigate = useNavigate();

    const [Accounts, setAccount] = useState([])
    const [loading, setLoading] = useState(false)
    const [userList, setUserList] = useState([])
    const [showModal, setShowModal] = useState(false);
    const {formState: {errors}, handleSubmit, register, control, setValue} = useForm();
    const [searchTerm, setSearchTerm] = useState('');

    
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

            const response= await API.graphql(graphqlOperation(listAccounts, { limit: 1000 }));
            const availableAccounts = response.data.listAccounts.items.filter((item) => item.free === true && !item.deleted);
      
            setAccount(availableAccounts)
            console.log(Accounts)

         }catch(e){
                console.log(e)

        }
        setLoading(false)

 
       }
    useEffect(() => {
       getAccount()
       getListUsers()
       console.log(Accounts)

         
    }, [ ])
    
    const handleName = (userid)=>{
        let username = "test"
        userList.map((item)=>{
            if(item.id === userid){
                username = item.phoneNumber
            }
        })
        return username

    }

    const handleNum = (userid)=>{
        let username = " "
        userList.map((item)=>{
            if(item.id === userid){
                username = item.FamilyName +" "+ item.LastName
            }
        })
        return username

    }

 
    
      const filteredAccounts = Accounts.filter((account) => {
        const username = handleName(account.userID).toLowerCase();
        return username.includes(searchTerm.toLowerCase());
      });

    return(
       <>
        <section className='ConsultPage'>

        <StafNavbar></StafNavbar>

        <div className="searchContainer">
      <input
        type="text"
        className="searchInput"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
 
    </div>

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
                            filteredAccounts.filter(item =>{
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
                                        <td>{handleNum(item.userID)}</td>
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

   





















