import "./index.css"
import netflix from "../../components/img/netflix.png"
import disney from "../../components/img/Dplus.png"
import PV from "../../components/img/primevideo.png"
import spotify from "../../components/img/spotify.png"
import { useNavigate } from 'react-router-dom';
import StafNavbar from "../../components/StafNavbar"


export default function ChangePriceSelector() {
  const navigate = useNavigate();


    const handleClick = ()=>{
        navigate("/categories1") 
    }

    const handleClick1 = ()=>{
        navigate("/change-price", { state: {  service: 'netflix' } }) 
    }
    const handleClick2 = ()=>{
        navigate("/change-price", {state:{ service:'disney'}}) 
    }
    const handleClick3 = ()=>{
        navigate("/change-price", {state:{ service:'prime'}}) 
    }
    const handleClick4 = ()=>{
        navigate("/change-price", {state:{ service:'spotify'}}) 
    }
 
    return(
        <section className='ManageAccountPage'>
        	<StafNavbar></StafNavbar>
            <div className="categories-mobiles">
                <div className="categories-mobile-boxs" onClick={handleClick1}><img src={netflix} width="75%" alt="netflid"/></div>
                <div className="categories-mobile-boxs" onClick={handleClick2}><img src={disney} width="80%" alt="disney plus"/></div>
                <div className="categories-mobile-boxs" onClick={handleClick3}><img src={PV} width="80%"alt="primevideo"/></div>
                <div className="categories-mobile-boxs" onClick={handleClick4}><img src={spotify} width="80%"alt="spotify"/></div>
                <div className="categories-mobile-boxs" onClick={handleClick}><h1>vpn</h1></div>

            </div>
            

        </section>
    )

}
