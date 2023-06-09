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
import appmus from './img/appmus.png'
import adn from './img/adn.png'
import { useEffect, useState } from "react"
import { API, Auth, graphqlOperation } from "aws-amplify"
 
  
 export default function StorePage({Articles, setArticles,setProdId,setProdTitle,setProdPrice, setProdType, setProdCover}) {
  const [loading, setLoading] = useState(false)

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
                        OneMonth={Article.OneMonth.price}
                        type={Article.type}                   
                        slug={Article.slug}
                        Article={Article}
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
                        OneMonth={Article.OneMonth.price}
                        type={Article.type}                   
                        slug={Article.slug}
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
                        OneMonth={Article.OneMonth.price}
                        type={Article.type}                   
                        slug={Article.slug}
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
                        OneMonth={Article.OneMonth.price}
                        type={Article.type}                   
                        slug={Article.slug}
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
                        OneMonth={Article.OneMonth.price}
                        type={Article.type}                   
                        slug={Article.slug}
                   
       
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
                            OneMonth={Article.OneMonth.price}
                            type={Article.type}                   
                            slug={Article.slug}
                      
          
                />     
                ))

        }

    </section>
        <h3>apple music</h3>

    <section className="BoxCard-mobile">

    {  
            Articles.filter(Article =>{
            if (Article.name.toLowerCase().includes("apple".toLowerCase())  ) {
                    return Article;
                    }     
                }).map((Article, index) =>(
                    <Card
                            key={index}
                            cover={CoverImage(Article.image)}
                            title={Article.name}
                            OneMonth={Article.OneMonth.price}
                            type={Article.type}                   
                            slug={Article.slug}
                      
          
                />     
                ))

        }

    </section>
        <h3>vpn</h3>

    <section className="BoxCard-mobile">

    {  
            Articles.filter(Article =>{
            if (Article.name.toLowerCase().includes("adn".toLowerCase())  ) {
                    return Article;
                    }     
                }).map((Article, index) =>(
                    <Card
                            key={index}
                            cover={CoverImage(Article.image)}
                            title={Article.name}
                            OneMonth={Article.OneMonth.price}
                            type={Article.type}                   
                            slug={Article.slug}
                      
          
                />     
                ))

        }

    </section>
        </section>
    )

}

export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        OneYear {
          id
          price
        }
        OneMonth {
          id
          price
          _version
        }
        ThreeMonth {
          price
        }
        buycount
        cartCount
        image
        name
        id
        slug
        type
      }
      nextToken
      startedAt
    }
  }
`;