import "./css/crmLine.css"
import { useNavigate } from 'react-router-dom';


export default function CrmLine({contrat, statut, valeur, nom,item}) {
    let statutClass = "crmLine-box";
    let statutStyle = {};
    const navigate = useNavigate();
    
    
  const handleClick = (id)=> {
    navigate("/update-crm-line") 

  }
    if (statut === "conclue") {
        statutStyle.backgroundColor = "#26D08A"; // Custom background color for 'conclue'
      } else if (statut === "Nouveau") {
        statutStyle.backgroundColor = "#FFD326"; // Custom background color for 'Nouveau'
      } else if (statut === "perdu") {
        statutStyle.backgroundColor = "#E2445C"; // Custom background color for 'perdu'
      } else if (statut === "proposition") {
        statutStyle.backgroundColor = "#299267"; // Custom background color for 'proposition'
      } else if (statut === "decouverte") {
        statutStyle.backgroundColor = "#2698C9"; // Custom background color for 'decouverte'
      } else if (statut === "negotiation") {
        statutStyle.backgroundColor = "#784BD1"; // Custom background color for 'negotiation'
      }

    return(
        <div className="crmLine" onClick={()=>{
            navigate("/crm-update-line", { state: {  item: item  } }) 
        }}>
            <div className="crmLine-box">
                <p>{contrat}</p>
            </div>
            <div className="crmLine-box" style={statutStyle}>
                <p>{statut}</p>
            </div>
            <div className="crmLine-box">
                <p>{valeur}</p>
            </div>
            <div className="crmLine-box">
                <p>{nom}</p>
            </div>
        </div>
    )
}
