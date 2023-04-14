import netflix from './img/netim.png'
import './css/card.css'
import { Link } from 'react-router-dom'


export default function Card(){
    return(
        <Link className='card-box' style={{
            textDecoration:"none",
            color: 'black',
        }} to='/productPage'>
            <p className='card-box-p-header'>abonnement</p>
            <div className='card-box-img'>
                <img src={netflix} />
            </div>
            <div className='card-box-body'>
                <div  className='card-box-body-title'>
                    <p>profil netflix a partir de:</p>
                </div>
                <div className='card-box-body-bottom'>
                    <button className='card-box-body-button'>
                        <i className="fa fa-plus" style={{
                            fontSize:23,
                            color: 'white',                            
                        }}></i>

                    </button> 
                    <div className='card-box-body-price'>
                        <span>14500FCFA</span>
                    </div>
                </div>

            </div>
        </Link>
    )


}