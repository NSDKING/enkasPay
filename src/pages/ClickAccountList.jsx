import { useLocation, useNavigate } from "react-router-dom";
import './css/clickAccount.css'
import StafNavbar from "../components/StafNavbar";
import { deleteAccount } from "../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";

export default function ClickAccountList() {
    const { state } = useLocation();
    const { item } = state;
    const navigate = useNavigate();
 
    const handleClick3 = () => {
   
        navigate("/update-accountList", { state: {  item: item } }) 

      };
      
    const handleClick = () => {
   
        navigate("/profile-list", { state: { mail: item.mail, remplissage: item.remplissage } })

      };

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
          
        </section>
    )
}
