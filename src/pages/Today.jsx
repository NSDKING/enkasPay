import StafNavbar from "../components/StafNavbar";
import { useNavigate } from 'react-router-dom';


export default function Today() {
    const navigate = useNavigate();
    

    return(
        <section>
            <StafNavbar></StafNavbar>
            <button className="account-button"
                onClick={()=>{
                    navigate('/Account-today')
                }}>Account</button>
            
            <button className="profiles-button"
                        onClick={()=>{
                    navigate('/Profile-today')
                }}>Profiles</button>

        </section>

    )
}