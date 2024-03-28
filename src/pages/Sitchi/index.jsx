import "./index.css";
import logo from "./img/logo.png";
import st from "./img/R.jpeg";
import telec from "./img/telec.jpeg";
import { useNavigate } from "react-router-dom";

export default function SitchiPage() {
    const navigate = useNavigate();

    return(
        <div className="sitchi-page">
                <img src={logo} alt="Logo" className="fistImage"/>
            <div className="main_text">
                <p >
                    Sitchi telecom, la connexion que tu mérites à prix sitchi.
                </p>
            </div>
            <div className="main_section">
                <img src={st} alt="starlink images"/>       
                <div className="tex-box-container">
                    <p className="p1">Grace à la technologie</p>
            
                    <p className="p2">starlink nous offrons une </p>
                    
                    <p className="p3">connexion stable et rapide</p>
                </div>
                <img src={telec} alt="starlink images"/>       
                <div className="tex-box-container">
                    <p className="p4">un rapport qualité prix </p>
                    <p className="p5">IMBATTABLE</p>
                    <div className="p6">
                        <h2>10000</h2> Fcfa/mois
                    </div>
                </div>
                <h3>souhaites tu prendre ton abonnement?</h3>
                <button onClick={()=>{
                    navigate("/Sitchi/precommande");
                }}>precommande</button>

            </div>

        </div>
    );
}

