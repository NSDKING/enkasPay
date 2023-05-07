
import netflix from './img/netim.png'
import './css/card.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function Card({cover, title, price, type, setProdTitle, setProdPrice, setProdCover, setProdType, cart, updateCart }){
    const navigate = useNavigate();

    function handleClick(){

        setProdTitle(title);
        setProdType(type);
        setProdPrice(price);
        navigate('/ProductPage')
        setProdCover(cover)
 
        console.log(price)
       
    
    }
    return(
        <div className='card-box' >
            <p className='card-box-p-header'>{type}</p>
            <div className='card-box-img' onClick={handleClick}>
                <img src={cover} />
            </div>
            <div className='card-box-body'>
                <div  className='card-box-body-title'>
                    <p>{title} a partir de:</p>
                </div>
                <div className='card-box-body-bottom'>
                    <button className='card-box-body-button'>
                        <i className="fa fa-plus" style={{
                            fontSize:23,
                            color: 'white',                            
                        }}></i>

                    </button> 
                    <div className='card-box-body-price'>
                        <span>{price.one_month}FCFA</span>
                    </div>
                </div>

            </div>
        </div>
    )


}