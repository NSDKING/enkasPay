import { useLocation, useNavigate } from "react-router-dom";
import './css/clickAccount.css'
import StafNavbar from "../components/StafNavbar";
import { deleteAccount } from "../graphql/mutations";
import { listAccounts } from "../graphql/queries";
 import { API, graphqlOperation } from "aws-amplify";
import { useState, useEffect} from "react";
 

export default function ClickAccountList() {
    const { state } = useLocation();
    const { item } = state;
    const [loading, setLoading]= useState(false)
    const [AccountList, setAccountList] = useState([]);
    const [profileList, setProfileList] = useState([])
    const navigate = useNavigate();
 
    const handleClick3 = () => {
   
        navigate("/update-accountList", { state: {  item: item } }) 

      };
      
    const handleClick = () => {
   
        navigate("/profile-list", { state: { mail: item.mail, remplissage: item.remplissage } })

      };



      const DeleteFunction = () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this account?");
      
        if (confirmDelete) {
          setLoading(true);
      
          try {
            profileList.forEach(async (item) => {
              const input = {
                id: item.id,
              _version:item._version,

              };
              const response = await API.graphql(graphqlOperation(deleteAccount, { input: input }));
              console.log(response);
            });
      
            alert('Account deleted successfully');
            navigate("/choose-accounts-list-type");
           } catch (e) {
            console.log(e);
          }
      
          setLoading(false);
        } else {
          // User canceled the deletion
          alert('Deletion canceled');
        }
      };
      
     
    const getAccount = async () => {
      if (loading) {
        return;
      }
      setLoading(true);
  
      try {
        const response = await API.graphql(graphqlOperation(listAccounts));
        setAccountList(response.data.listAccounts.items);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    }


  
  useEffect(() => {
      getAccount() 
    }, [ ])



  useEffect(()=>{
      getProfile();
    },[AccountList])

  // get the profil of the current account

  const getProfile =()=>{
          let profile = []
          AccountList.forEach((item)=>{
              if(item.mail == state.item.mail){
                  profile.push(item)
  
              }
          })
  
          setProfileList(profile)
  
      }

    return(
        <section>
        <StafNavbar/>
        <h3>{item.mail} : {item.remplissage}</h3>
          
          <button className="button" onClick={handleClick} >
              consult
          </button>
          <button className="button" onClick={handleClick3}>
              Update
          </button>
          <button className="button" onClick={DeleteFunction}>
              delete
          </button>       
          
        </section>
    )
}
