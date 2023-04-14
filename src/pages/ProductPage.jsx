import Navbar from "../components/navbar"
import "./css/productpage.css"
import DefaultButton from '../components/DefaultButton'
import Card from "../components/card"
import warning from './img/warning.png'
import logo from './img/logo.png'

export default function ProductPage() {
    return(
        <section className='productPage'>
            <Navbar></Navbar>
            <div className="Productimage">
            </div>
            <div className="ProductData">
                <div className="ProductData-header">
                    <p className="ProductData-type">abonnement</p>
                    <h2 className="ProductData-title">NETFLIX SOLO</h2>
                    <p className="ProductData-price">2500Fcfa</p>
                </div>
                <div className="ProductData-box-container">
                    <div className="ProductData-box" id="first">
                        <p>1 mois</p>
                    </div>
                    <div className="ProductData-box">
                        <p>3 mois</p>
                    </div>
                    <div className="ProductData-box">
                        <p>6 mois</p>
                    </div>
                </div>

                <p className="ProductData-type"> quantité</p>
                <div className="quantitybox"></div>
            </div>
            <div className="Productpage-buttons">
            <DefaultButton text={"ajouter au panier"} bgcolor={"#eb0625"} textcolor={"white"} width={"100%"} height={"50px"} marginTop={"20px"} />
            <DefaultButton text={"acheter maintenant"} bgcolor={"black"} textcolor={"white"} width={"100%"} height={"50px"} marginTop={"10px"}/>

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
                <Card></Card>
                <Card></Card>
                
            </div>
         </section>
    )   
}