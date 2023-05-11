import Navbar from "../components/navbar"
import "./css/productpage.css"
import DefaultButton from '../components/DefaultButton'
import Card from "../components/card"
import warning from './img/warning.png'
import logo from './img/logo.png'
import { useEffect, useState } from "react"

export default function ProductPage({cover, title, price, type, setProdTitle, setProdPrice, setProdCover, setProdType, cart, updateCart}) {
    const [priceClicked, setPriceClicked] = useState(price.one_month)
    const [selectedBox, setSelectedBox] = useState(0);
    const handleClick = () => {
        window.location.href = 'https://wa.me/237652737914';
      };
    
    return(
        <section className='productPage'>
            <Navbar></Navbar>
            <div className="Productimage">
                <img src={cover} width="70%"/>

            </div>
        {
            price.three_month === null ?
                <div className="ProductData">
                    <div className="ProductData-header">
                        <p className="ProductData-type">{type}</p>
                        <h2 className="ProductData-title">{title}</h2>
                        <p className="ProductData-price">{price.one_month}Fcfa</p>
                    </div>
 
                
                </div>
            : 
                <div className="ProductData">
                        <div className="ProductData-header">
                            <p className="ProductData-type">{type}</p>
                            <h2 className="ProductData-title">{title}</h2>
                            <p className="ProductData-price">{priceClicked}Fcfa</p>
                        </div>
                        <div className="ProductData-box-container">
                        <div className={`ProductData-box ${selectedBox === 0 ? 'selected' : ''}`} onClick={() => {
                            setSelectedBox(0) 
                            setPriceClicked(price.one_month)
                        }}>
                                <p>1 mois</p>
                            </div>
                            <div className={`ProductData-box ${selectedBox === 1 ? 'selected' : ''}`} onClick={() => {
                            setSelectedBox(1) 
                            setPriceClicked(price.three_month)
                        }}>
                                <p>3 mois</p>
                            </div>
                            <div className={`ProductData-box ${selectedBox === 2 ? 'selected' : ''}`} onClick={() => {
                            setSelectedBox(2) 
                            setPriceClicked(price.one_year)
                        }}>
                                <p>6 mois</p>
                            </div>
                        </div>
                        <p className="ProductData-type"> quantité</p>
                     </div>
        }          
            <div className="Productpage-buttons">
            <DefaultButton text={"ajouter au panier"} bgcolor={"#eb0625"} textcolor={"white"} width={"100%"} height={"50px"} marginTop={"20px"} onPress={handleClick}/>
            <DefaultButton text={"acheter maintenant"} bgcolor={"black"} textcolor={"white"} width={"100%"} height={"50px"} marginTop={"10px"} onPress={handleClick}/>

            </div>
            <div className="ProductPage-message">
                <div className="ProductPage-message-header">
                    <img src={warning} width="16px" height="16px"/>
                    <h3>rapidité et efficacité</h3>
                </div>
                <p>
                    effectue ton achat et recois les identifiants 30minutes maximum apres le paiement
                </p>
            </div>

            <div className="defaultp">
                <p>
                    les clients ont egalement acheté:
                </p>
            </div>
            <div className="recom">
 
                
            </div>
         </section>
    )   
}