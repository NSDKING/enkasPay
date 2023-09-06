import { useLocation, useNavigate } from "react-router-dom";
import "./index.css"
import SHeader from "../../components/header";
import { deleteProspect } from "../../../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";



export default function ProsClick() {
    const navigate = useNavigate();
    const { state } = useLocation();
    const ProspectID = state || {}; //
    
    const onPressed = async () => {
        try {
            // Ensure ProspectID is defined and contains an 'id' property
            if (ProspectID && ProspectID.ProspectID) {
               
                const input = { 
                    id: ProspectID.ProspectID.id, // Extract the 'id' property from ProspectID
                    _version: ProspectID.ProspectID._version,
        
         
                };
              
                const response = await API.graphql(graphqlOperation(deleteProspect, { input }));
                console.log(response);
                navigate(-1);
            } else {
                console.error("ProspectID is missing or does not contain an 'id' property.");
                console.log(ProspectID)
            }
        } catch (error) {
            console.error("Error deleting prospect:", error);
        }
    };
    
    return(
         <section className="buttonsPage">
            <SHeader></SHeader>
    

                 <button
                    className="sp"
                        onClick={()=>{navigate("/crm-update-pro", { state: {  ProspectID: ProspectID } })}}
                    >update</button>

                    <button
                    className="sp"
                   onClick={onPressed} 
                    >Delete</button>
         </section>
     )

}


