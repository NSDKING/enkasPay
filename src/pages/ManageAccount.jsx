import { Link } from 'react-router-dom';
import './css/ManageAccount.css'
import netflix from "../components/img/netflix.png"
import disney from "../components/img/Dplus.png"
import PV from "../components/img/primevideo.png"
import spotify from "../components/img/spotify.png"
import { useNavigate } from 'react-router-dom';


export default function ManageAccount() {
  const navigate = useNavigate();


    const handleClick = ()=>{
        navigate("/categories1") 
    }

    const handleClick1 = ()=>{
        navigate("/takeAccount", { state: {  service: 'netflix' } }) 
    }
    const handleClick2 = ()=>{
        navigate("/takeAccount", {state:{ service:'disney'}}) 
    }
    const handleClick3 = ()=>{
        navigate("/takeAccount", {state:{ service:'prime'}}) 
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
    return(
        <section className='ManageAccountPage'>
        	<header className='ManagementHeader'>
                <h1>ENKAS</h1>
            </header>
            <nav className="special_navbar">
                <Link to="/AddAccount" style={linkStyle}>ajouter</Link>
                <Link to="/ManageAccount" style={linkStyle}>prendre</Link>
                <Link to="/ConsultPage" style={linkStyle}>consulter</Link>
            </nav>
            <div className="categories-mobiles">
                <div className="categories-mobile-boxs" onClick={handleClick1}><img src={netflix} width="75%" alt="netflid"/></div>
                <div className="categories-mobile-boxs" onClick={handleClick2}><img src={disney} width="80%" alt="disney plus"/></div>
                <div className="categories-mobile-boxs" onClick={handleClick3}><img src={PV} width="80%"alt="spotify"/></div>
                <div className="categories-mobile-boxs" onClick={handleClick}><h1>vpn</h1></div>

            </div>
            

        </section>
    )

}