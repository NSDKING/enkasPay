import Navbar from "../components/navbar"
import "./css/CatPage.css"
import Card from "../components/card"
import { useEffect, useState } from "react";
import ps from "./img/pscard.jpg"
import spo from "./img/spotifyz.png"
import xbox from "./img/xbox_card-removebg-preview.png"
import pv from "./img/prime.png"
import disney from "./img/disney.png"
import vpn from "./img/vpn.png"
import net from './img/netim.png'
import appmus from './img/appmus.png'
import adn from './img/adn.png'
import { API, Auth, graphqlOperation } from "aws-amplify"
import { listProducts } from "../graphql/queries";
import CartBox from "../components/cartBox"



export default function CartPage({setProdId,setProdTitle,setProdPrice, setProdType, setProdCover}) {
  const [cartList, updateCartList] = useState([])
  const [loading, setLoading] = useState()
  const [Articles, setArticles] = useState()
  const [cartProduct, setCartProduct] = useState([])

  
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

  const getProducts = async()=>{
    if(loading){
      return;
  }
  
  setLoading(true)
  try {
  
    const response= await API.graphql(graphqlOperation(listProducts));
    setArticles(response.data.listProducts.items)
 
  }catch(e){
          console.log(e)
 
  }
  setLoading(false)
 
  }


  //get all the cartItem
  const getCartItems = async ()=>{
      if(loading){
        return;
    }

    
    setLoading(true)
    try{
  
      const authUser = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      const response = await API.graphql(graphqlOperation(listCartRooms, { id: authUser.attributes.sub }));
      response.data.getUser.Carts.items.map((cartRoomItem)=>{
        let exist = cartList.some((element)=>{
          return cartRoomItem.id==element.id}
          )
          if(cartRoomItem._deleted==null && exist==false){
            updateCartList([...cartList, cartRoomItem])   
         } 
      })
      }catch(e){
      console.log(e)
    }
    setLoading(false)
  
  }
  //return a product with the same id that the param
  const retreiveProduct =  (productID, number, price, id, version)=>{

    const product = Articles.find((article) => article.id === productID);
    const Article = {
      id:id,
      name: product.name,
      image:product.image,
      type:product.type,
      _deleted:product._deleted,
      _version:version,
      number:number,
      price:price,
      productID:productID,

    }
    
    return Article || null;
}

  //retreive all the product out of the Cart and add it to the 

  const getCartProductData = ()=>{
    cartList.map((cartRoomItem)=>{
      let Articles =  retreiveProduct(cartRoomItem.productID, cartRoomItem.number, cartRoomItem.price, cartRoomItem.id, cartRoomItem._version)
      let existItem = cartProduct.some((element)=>{return Articles.id==element.id})

      if(Articles._deleted==null && existItem==false){
        setCartProduct([...cartProduct, Articles]);
       } 
  
 
    })

  }
    


  useEffect(() => {

    getCartItems();
    getProducts();
   }, [])

  useEffect(() => {
    getCartProductData()

  }, [cartList]);

  useEffect(() => {
     getCartProductData()
     console.log(cartProduct)
   }, [cartProduct]);
  

  
   if(loading==true){
    return (<h2>Loading...</h2>)
  }
  
  
  
  
  if(cartList.length==0){
    return(
      <section className="CatPage-mobile">
        <Navbar></Navbar>
        <div className="CatPage-mobile-main">
        <div className="marge"></div>
  
  
        <h3>Acheter vos comptes et profils spotify sur enkaspay.</h3>
        <p>Vous voulez profitez de l'incroyable catalogue de musiques de spotify, en francais et en anglais, Choisissez alors nkstor !</p>
        <p>Vous pouvez toujours être 100% certain que vous recevrez vos code spotify authentique.</p>
  
        <section className="CatPage-mobile-Articles-box">
        
      </section>
        </div>
    </section>
    )
  }else{
    return(
        
    <section>
    <Navbar></Navbar>
    <div className="marge"></div>
    <section className="cart-items-container">
      {
        cartProduct.map((Article, index)=>(
          <CartBox
            key={index}
            cover={CoverImage(Article.image)}
            title={Article.name}
            price={Article.price}
            type={Article.type}
            version={Article._version}
            articles={Article}
            id={Article.id}
            number={Article.number}
            loading={loading}
            setLoading={setLoading}
            
            />     
        ))
      }
           
     
    </section>
  
  
  </section>
    )
    
  
  }


  }
  
   



  export const listCartRooms = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
        id
        Carts {
            items {
              id
              number
              _version
              productID
              userID
              _deleted
            }
          }   
    }
  }
`;
 