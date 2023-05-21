import Navbar from "../components/navbar"
import "./css/productpage.css"
import DefaultButton from '../components/DefaultButton'
import Card from "../components/card"
import warning from './img/warning.png'
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { createCart, updateCart } from '../graphql/mutations';
import { getCommonCartRoomWithUser } from '../services/CartRoom';
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
 
export default function ProductPage({cover, title, price, type, setProdTitle, setProdPrice, setProdCover, setProdType, cart, updateCart}) {
    const [priceClicked, setPriceClicked] = useState(price.one_month)
    const [selectedBox, setSelectedBox] = useState(0);
    const navigate = useNavigate();
    const [user, setUser]= useState(null)

    const checkUser = async ()=>{
        try {
            const authUser = await Auth.currentAuthenticatedUser({
                bypassCache: true,
              });
         
          setUser(authUser)
      
        } catch(e){
            setUser(null);
    
        }
     
        }
  
        
    const handleClick = async () => {
        if(user===null){
            alert("tu n'es pas connecté")
            navigate('/login')
        }else{
            window.location.href = 'https://wa.me/237652737914';

        }

       };

      const createACartWithTheUser = async(product, price, nb_month)=>{
        try{
            //verify if the cart already exist
            const existantCartRoom = await getCommonCartRoomWithUser(product.id)
            if (existantCartRoom) {
                //verify if the CartRoom is deleted or not
                if(existantCartRoom._deleted ==true){
                      
            const authUser = await Auth.currentAuthenticatedUser({
                bypassCache: true,
              }); 
            const newCartRoomData = await API.graphql(
                graphqlOperation(createCart,{
                    input:{
                        number:1,
                        productID: product.id,
                        userID:authUser.attributes.sub,
                        price:price,
                        nb_month:nb_month,
                    },
                })
                
                )  
            alert("ajouté au panier")
 

                }else{
                    
                    const newNumber = existantCartRoom.number + 1
                    const newPrice = existantCartRoom.number + 1
                    const input = { 
                        id: existantCartRoom.id,
                        _version: existantCartRoom._version,   
                        number: newNumber,
                        price:price,
                        nb_month:nb_month,
                       };
            
                    const result = await API.graphql(graphqlOperation(updateCart, { input: input }));
                    alert("ajouté au panier")
 
                }
                 return;
              }

            //try to create a cart
  
            const authUser = await Auth.currentAuthenticatedUser({
                bypassCache: true,
              }); 
            const newCartRoomData = await API.graphql(
                graphqlOperation(createCart,{
                    input:{
                        number:1,
                        productID: product.id,
                        userID:authUser.attributes.sub,
                        price:price,
                        nb_month:nb_month,
                    },
                })
                
                ) 
             alert("ajouté au panier")
 
        }
        catch(e){
            console.log(e)
        }
      
      }

    useEffect(
    () => {
      checkUser()

    },
    [],
  )
    
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