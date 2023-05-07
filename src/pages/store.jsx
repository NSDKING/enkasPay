import Card from "../components/card"
import Cate from "../components/categories"
import Navbar from "../components/navbar"
import Carrousel from "../components/carroussel"
import "./css/store.css"
import ps from "./img/pscard.jpg"
import spo from "./img/spotifyz.png"
import xbox from "./img/xbox_card-removebg-preview.png"
import pv from "./img/prime.png"
import disney from "./img/disney.jpeg"
import vpn from "./img/vpn.jpeg"
import net from './img/netim.png'
import { useEffect, useState } from "react"
import { API, graphqlOperation } from "aws-amplify"
import { listProducts } from "../graphql/queries"

  

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