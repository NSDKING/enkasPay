import Card from "../components/card"
import Cate from "../components/categories"
import Navbar from "../components/navbar"
import Carrousel from "../components/carroussel"
import "./css/store.css"
import ps from "./img/pscard.jpg"
import spo from "./img/spotifyz.png"
import xbox from "./img/xbox_card-removebg-preview.png"
import pv from "./img/prime.png"
import disney from "./img/disney.png"
import vpn from "./img/vpn.png"
import net from './img/netim.png'
import { useEffect, useState } from "react"
import { API, Auth, graphqlOperation } from "aws-amplify"
import { listProducts } from "../graphql/queries"
import { getCommonLikeRoomWithUser } from "../services/LikeRoom"
import { createLikeRoom, createLikeRoomProduct, updateLikeRoom } from "../graphql/mutations"

  
 
export default function StorePage({Articles, setArticles,setProdTitle,setProdPrice, setProdType, setProdCover, cart, updateCart}) {
  const [loading, setLoading] = useState(false)
   function CoverImage(slug){
    if(slug == 'net'){
      return net
    }
    if(slug == 'pv'){
      return pv
    }
    if(slug == 'psn'){
      return ps
    }
    if(slug == 'xbox'){
      return xbox
    }
    if(slug == 'spo'){
      return spo
    }
    if(slug == 'disney'){
        return disney
      }
    if(slug == 'vpn'){
        return vpn
      }
   
  
  }
    const getProduct = async()=>{
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

    useEffect(
        () => {
           getProduct()
         },
        [],
      )

    const createALikeRoomWithTheUser = async(product)=>{
      // check if the product is already in the cart
      const existingLikeRoom = await getCommonLikeRoomWithUser(product.id);
      if (existingLikeRoom) {
        const input = { 
          id: existingLikeRoom.likeRoom.id,
          _version: existingLikeRoom.likeRoom._version,   
          number: existingLikeRoom.likeRoom.number + 1,
        };
        const result = await API.graphql(graphqlOperation(updateLikeRoom, { input: input }));
        console.log(result)
        return;
      }
      //create a new LikeRooms
      const AuthUser = await Auth.currentAuthenticatedUser();
      const newLikeRoomData  = await API.graphql(
        graphqlOperation(createLikeRoom, {input:{}})
        )
        if(!newLikeRoomData.data?.createRoomsubject){
          console.log('error creating the chat error')
        }
        const newLikeRoom = newLikeRoomData.data?.createRoomsubject;

      //add the cliked product to the LikeRooms
    /**  await API.graphql(
        graphqlOperation(createLikeRoomProduct,{
          input:{likeRoomId:newLikeRoom.id, productId:product.id},
        })
        
      ) */
      //add the auth user to the LikeRooms
 /**     await API.graphql(
      graphqlOperation(createUserRoomsubject,{
        input:{roomsubjectId:newSubjectRoom.id, userId:AuthUser.attributes.sub},
      })
  ) */
    }

    return(
        <section className="storePage">
            <Navbar/>
            <div className="marge"></div>
            <Carrousel></Carrousel>
            <h3>categories populaire</h3>
            <Cate></Cate>
            <h3>playstation</h3>

<section className="BoxCard-mobile">
    {  
          Articles.filter(Article =>{
          if (Article.name.toLowerCase().includes("psn".toLowerCase())) {
                  return Article;
                }     
            }).map((Article, index) =>(
              <Card
              key={index}
              cover={CoverImage(Article.image)}
              title={Article.name}
              price={Article.price}
              type={Article.type}
              setProdTitle={setProdTitle}
              setProdPrice={setProdPrice}
              setProdType={setProdType}
              setProdCover={setProdCover}
              cart={cart}
              updateCart={updateCart}
              />     
            ))

      }

</section>
<h3>xbox</h3>

<section className="BoxCard-mobile">
{  
          Articles.filter(Article =>{
          if (Article.name.toLowerCase().includes("xbox".toLowerCase()) ) {
                  return Article;
                }     
            }).map((Article, index) =>(
                <Card
              key={index}
              cover={CoverImage(Article.image)}
              title={Article.name}
              price={Article.price}
              type={Article.type}
              setProdTitle={setProdTitle}
              setProdPrice={setProdPrice}
              setProdCover={setProdCover}
              setProdType={setProdType}
              cart={cart}
              updateCart={updateCart}
              />     
            ))

      }

      
  </section>
  <h3>netflix</h3>
  
  <section className="BoxCard-mobile">
  {  
          Articles.filter(Article =>{
          if (Article.name.toLowerCase().includes("netflix".toLowerCase())) {
                  return Article;
                }     
            }).map((Article, index) =>(
                <Card
                    key={index}
                    cover={CoverImage(Article.image)}
                    title={Article.name}
                    price={Article.price}
                    type={Article.type}
                    setProdTitle={setProdTitle}
                    setProdPrice={setProdPrice}
                    setProdCover={setProdCover}
                    cart={cart}
                    updateCart={updateCart}
                    setProdType={setProdType}

              />     
              
            ))

      }

     
  </section>
    <h3>spotify</h3>

    <section className="BoxCard-mobile">

    {  
            Articles.filter(Article =>{
            if (Article.name.toLowerCase().includes("spotify".toLowerCase())  ) {
                    return Article;
                    }     
                }).map((Article, index) =>(
                    <Card
                key={index}
                cover={CoverImage(Article.image)}
                title={Article.name}
                price={Article.price}
                type={Article.type}
                setProdTitle={setProdTitle}
                setProdPrice={setProdPrice}
                setProdCover={setProdCover}
                setProdType={setProdType}
                cart={cart}
                updateCart={updateCart}
                />     
                ))

        }

    </section>
        <h3>disney +</h3>

    <section className="BoxCard-mobile">

    {  
            Articles.filter(Article =>{
            if (Article.name.toLowerCase().includes("disney".toLowerCase())  ) {
                    return Article;
                    }     
                }).map((Article, index) =>(
                    <Card
                key={index}
                cover={CoverImage(Article.image)}
                title={Article.name}
                price={Article.price}
                type={Article.type}
                setProdTitle={setProdTitle}
                setProdPrice={setProdPrice}
                setProdCover={setProdCover}
                setProdType={setProdType}
                cart={cart}
                updateCart={updateCart}
                />     
                ))

        }

    </section>

    <h3>vpn</h3>

<section className="BoxCard-mobile">

{  
        Articles.filter(Article =>{
        if (Article.name.toLowerCase().includes("vpn".toLowerCase())  ) {
                return Article;
                }     
            }).map((Article, index) =>(
                <Card
            key={index}
            cover={CoverImage(Article.image)}
            title={Article.name}
            price={Article.price}
            type={Article.type}
            setProdTitle={setProdTitle}
            setProdPrice={setProdPrice}
            setProdCover={setProdCover}
            setProdType={setProdType}
            cart={cart}
            updateCart={updateCart}
            />     
            ))

    }

</section>
        </section>
    )

}