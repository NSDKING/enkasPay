import { useLocation, useNavigate } from "react-router-dom";
import './css/clickAccount.css'
import StafNavbar from "../components/StafNavbar";
import { deleteAccount } from "../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";


export default function ClickAccount() {
    const { state } = useLocation();
    const { item } = state;
    const navigate = useNavigate();
 

      const handleClick1 = () => {
        // Handle the click event here
        // Add your logic to manage, delete, or update the item
        // Example: Delete the item
        // deleteItem(item.id);
    
        // Navigate to a different page after the action
        navigate("/dashboard");
      };

      const handleDelete = async (item) => {
        console.log(item)
        try {
          const input = { 
            id: item.id,
            _version:item._version,

 
        };
          const result = await API.graphql(graphqlOperation(deleteAccount, { input }));
          console.log(result);
          navigate("/ConsultPage");

        } catch (error) {
          console.error(error);
        }
      };

 

      const handleClick3 = () => {
   
        navigate("/updateAccount", { state: {  item: item } }) 
      };
    return(
        <section>
            <StafNavbar/>
          
            <button className="button" onClick={()=>{handleDelete(item)}}>
                Delete
            </button>
            <button className="button" onClick={handleClick3}>
                Update
            </button>
            
        </section>
    )
}

/**
 * 
 *   <button className="button" onClick={handleClick1}>
                Manage
            </button>
 */