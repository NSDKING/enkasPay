import Navbar from "../components/navbar"
import "./css/CatPage.css"
import Card from "../components/card"
import ps from "./img/pscard.jpg"
import spo from "./img/spotifyz.png"
import xbox from "./img/xbox_card-removebg-preview.png"
import pv from "./img/prime.png"
 import disney from "./img/disney.png"
import vpn from "./img/vpn.png"
import net from './img/netim.png'
function CatPage4({Articles, setProdTitle, setProdPrice, setProdCover, setProdType,  cart, updateCart}) {
  
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
    return (
        <section className="CatPage-mobile">
            <Navbar></Navbar>
            <div className="CatPage-mobile-main">
            <div className="marge"></div>

      
            <h3>Acheter vos comptes et profils spotify sur enkaspay.</h3>
            <p>Vous voulez profitez de l'incroyable catalogue de musiques de spotify, en francais et en anglais, Choisissez alors nkstor !</p>
            <p>Vous pouvez toujours être 100% certain que vous recevrez vos code spotify authentique.</p>

            <section className="CatPage-mobile-Articles-box">
              {  
                        Articles.filter(Article =>{
                        if (Article.name.toLowerCase().includes("spotify".toLowerCase())) {
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
            </div>
        </section>
    );
  }
  
  export default CatPage4;
  