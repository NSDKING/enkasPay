import StafNavbar from "../components/StafNavbar"
import "./css/soon.css"
import { useNavigate } from 'react-router-dom';


export default function Soon() {
    const navigate = useNavigate();

    return(
    <div>
    <StafNavbar></StafNavbar>
    
        <button className="account-button"
            onClick={()=>{
                navigate('/Account-soon')
            }}
        >Account</button>
        <button className="profiles-button"
                    onClick={()=>{
                navigate('/profile-soon')
            }}
        
        >Profiles</button>
      </div>
    )
}
