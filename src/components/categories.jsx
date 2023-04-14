import netflix from "./img/netflix.png"
import disney from "./img/Dplus.png"
import ps from "./img/ps.png"
import PV from "./img/primevideo.png"
import xbox from "./img/xbox.png"
import spotify from "./img/spotify.png"
import { useNavigate } from 'react-router-dom';
import './css/categories.css'
function Cate() {
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate("/categories1")
  }
  const handleClick1 = ()=>{
    navigate("/categories2")
  }
  const handleClick2 = ()=>{
    navigate("/categories3")
  }
  const handleClick3 = ()=>{
    navigate("/categories4")
  }
  const handleClick4 = ()=>{
   
    navigate("/categories5")
  }
  const handleClick5 = ()=>{
    navigate("/categories6")
  }


  return (
    <div className="categories-mobile">
     <div className="categories-mobile-box" onClick={handleClick}><img src={netflix} width="75%" alt="netflid"/></div>
     <div className="categories-mobile-box" onClick={handleClick1}><img src={disney} width="80%" alt="disney plus"/></div>
     <div className="categories-mobile-box" onClick={handleClick2}><img src={PV} width="80%"alt="spotify"/></div>
     <div className="categories-mobile-box" onClick={handleClick3}><img src={spotify} width="80%" alt="xbox"/></div>
     <div className="categories-mobile-box" onClick={handleClick4}><img src={xbox} width="70%" alt="ps"/></div>
     <div className="categories-mobile-box" onClick={handleClick5}><img src={ps} width="85%" alt="primevideo"/></div>
     
    </div>
  );
}

export default Cate;
