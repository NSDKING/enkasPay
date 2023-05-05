import { API, graphqlOperation } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DefaultButton from '../components/DefaultButton';
import { listAccounts } from '../graphql/queries';


export default function TakeAccount() {
    const { state } = useLocation();
    const { service } = state;
    const [Accounts, setAccount] = useState([])
    const [loading, setLoading] = useState(false)

      
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
       handleAccount()
       console.log('if')
         
    }, [ ])
     
    const handleAccount = ()=>{
        let theAccount =  {}
        Accounts.map((item)=>{
                if(item.free == true && item.service == service ){
                    theAccount = item
                    console.log(item)
                  console.log("oke")
                }else{
                    console.log('no '+ service + item.service)  
                

                }
    })
    return(theAccount)
    
}
    return(
        <section className="takeAccountPage">
            <header className='ManagementHeader'>
                <h1>ENKAS</h1>
            </header>
            <nav className="special_navbar">
                <Link to="/AddAccount" style={linkStyle}>ajouter</Link>
                <Link to="/ManageAccount" style={linkStyle}>prendre</Link>
                <Link to="/ConsultPage" style={linkStyle}>consulter</Link>
            </nav>
                
            <div>
                <p>mail: {handleAccount().mail}</p>
                <p>passe: {handleAccount().passe}</p>
                <p>profil: {handleAccount().profil}</p>
                <p>pin: {handleAccount().pin}</p>

            </div>
            <DefaultButton></DefaultButton>
        </section>
    )
}
