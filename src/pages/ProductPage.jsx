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
import { listProducts } from "../graphql/queries"
import ps from "./img/pscard.jpg"
import spo from "./img/spotifyz.png"
import xbox from "./img/xbox_card-removebg-preview.png"
import pv from "./img/prime.png"
import disney from "./img/disney.png"
import vpn from "./img/vpn.png"
import net from './img/netim.png'
import appmus from './img/appmus.png'
import adn from './img/adn.png'

import { useParams } from 'react-router-dom';


export default function ProductPage({ cart, updateCart}) {
    const [selectedBox, setSelectedBox] = useState(0);
    const [Articles, setArticles] = useState([])
    const [ArticlesPage, setArticlesPage] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const [user, setUser]= useState(null)
    const { slug } = useParams();
    const [priceClicked, setPriceClicked] = useState("")


    function CoverImage(img){
        if(img == 'net'){
          return net
        }
        if(img == 'pv'){
          return pv
        }
        if(img == 'psn'){
          return ps
        }
        if(img == 'xbox'){
          return xbox
        }
        if(img == 'spo'){
          return spo
        }
        if(img == 'disney'){
            return disney
          }
        if(img == 'VPN'){
            return vpn
          }
          if(img == 'VPN'){
            return vpn
          }
          if(img == 'appmus'){
            return appmus
          }
          if(img == 'adn'){
            return adn
          }
      }
      

    const getProduct = async () => {
        try {
          setLoading(true);
          const response = await API.graphql(graphqlOperation(listProducts));
          setArticles(response.data.listProducts.items);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
    
  

    useEffect(
        () => {
          getProduct()
        },
        [],
      )
    /*get the Article data by slug */
    const getProductbySlug= (slug)=>{
        for(let i=0;i<Articles.length;i++){
            if(Articles[i].slug==slug){
                setArticlesPage(Articles[i])
                break; 
            }

        }
        console.log(ArticlesPage)

    }

    useEffect(() => {
        if (!loading) {
          getProductbySlug(slug);
        }
      }, [Articles, loading]);
    
      useEffect(() => {
        if (ArticlesPage.OneMonth) { 
          setPriceClicked(ArticlesPage.OneMonth.price);
        }
      }, [ArticlesPage]); 

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
                <img src={CoverImage(ArticlesPage.image)} width="70%"/>

            </div>
        {
            ArticlesPage.ThreeMonth === null ?
                <div className="ProductData">
                    <div className="ProductData-header">
                        <p className="ProductData-type">{ArticlesPage.type}</p>
                        <h2 className="ProductData-title">{ArticlesPage.name}</h2>
                        <p className="ProductData-price">{ArticlesPage.OneMonth.price}Fcfa</p>
                    </div>
 
                
                </div>
            : 
                <div className="ProductData">
                        <div className="ProductData-header">
                            <p className="ProductData-type">{ArticlesPage.type}</p>
                            <h2 className="ProductData-title">{ArticlesPage.name}</h2>
                            <p className="ProductData-price">{priceClicked}Fcfa</p>
                        </div>
                        <div className="ProductData-box-container">
                        <div className={`ProductData-box ${selectedBox === 0 ? 'selected' : ''}`} onClick={() => {
                            setSelectedBox(0) 
                            setPriceClicked(ArticlesPage.OneMonth.price)
                        }}>
                                <p>1 mois</p>
                            </div>
                            <div className={`ProductData-box ${selectedBox === 1 ? 'selected' : ''}`} onClick={() => {
                            setSelectedBox(1) 
                            setPriceClicked(ArticlesPage.ThreeMonth.price)
                        }}>
                                <p>3 mois</p>
                            </div>
                            <div className={`ProductData-box ${selectedBox === 2 ? 'selected' : ''}`} onClick={() => {
                            setSelectedBox(2) 
                            setPriceClicked(ArticlesPage.OneYear.price)
                        }}>
                                <p>12 mois</p>
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