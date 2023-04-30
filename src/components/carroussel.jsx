import { useRef, useState, useEffect } from 'react';
import enkas_net from "./img/enkas_net.jpg"
import enkas_crunch from "./img/enkas_crunch.jpg"
import pm from './img/pm.jpg'
import './css/carroussel.css'


const colors = [enkas_net, enkas_crunch, enkas_net];
const delay = 5000;

export default function Carroussel() {

    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);
  
    function resetTimeout() {
      if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      }
  }
  

  useEffect(() => {
    resetTimeout();
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
        
    };
  }, [index]);


  return (
    <div className="carr">
      <div
          className="carrousel-Slider-mobile"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {colors.map((background, index) => (
            <div
              className="slide"
              key={index}
            >
              <img src={background} width="100%" alt="slide"/>
            </div>
          ))}
        </div>
  
       
     
    </div>
  );

}
