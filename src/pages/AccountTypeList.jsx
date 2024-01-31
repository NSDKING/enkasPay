import { Link } from 'react-router-dom';
import './css/ManageAccount.css'
import netflix from "../components/img/netflix.png"
import disney from "../components/img/Dplus.png"
import PV from "../components/img/primevideo.png"
import spotify from "../components/img/spotify.png"
import { useNavigate } from 'react-router-dom';
import StafNavbar from '../components/StafNavbar';



export default function AccountTypeList() {
    const navigate = useNavigate();

    
    const handleClick1 = ()=>{
        navigate("/accounts-list", { state: {  service: 'netflix' } }) 
    }
    const handleClick2 = ()=>{
        navigate("/accounts-list", {state:{ service:'disney'}}) 
    }
    const handleClick3 = ()=>{
        navigate("/accounts-list", {state:{ service:'spotify'}}) 
    }
    const handleClick4 = ()=>{
        navigate("/accounts-list", {state:{ service:'prime'}}) 
    }
    const handleClick5 = ()=>{
        navigate("/accounts-list", {state:{ service:'Crunshyroll'}}) 
    }
    return(
        <section className='ManageAccountPage'>
        	<StafNavbar></StafNavbar>
            <div className="categories-mobiles">
                <div className="categories-mobile-boxs" onClick={handleClick1}><img src={netflix} width="75%" alt="netflid"/></div>
                <div className="categories-mobile-boxs" onClick={handleClick2}><img src={disney} width="80%" alt="disney plus"/></div>
                <div className="categories-mobile-boxs" onClick={handleClick3}><img src={spotify} width="80%"alt="spotify"/></div>
                <div className="categories-mobile-boxs" onClick={handleClick4}><img src={PV} width="80%"alt="prime"/></div>
                <div className="categories-mobile-boxs" onClick={handleClick5}>Crunshyroll</div>
 
            </div>
            

        </section>
    )
}
