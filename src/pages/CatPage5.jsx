import Navbar from "../components/navbar"
import "./css/CatPage.css"
import Card from "../components/card"
import ps from "./img/pscard.jpg"
import spo from "./img/spotifyz.png"
import xbox from "./img/xbox_card-removebg-preview.png"
import pv from "./img/prime.png"
import disney from "./img/disney.jpeg"
import vpn from "./img/vpn.jpeg"
import net from './img/netim.png'
function CatPage5({Articles, setProdTitle, setProdPrice, setProdCover, setProdType,  cart, updateCart}) {
  
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

            <h3>Acheter des cartes xbox prépayée des cartes xbox live gold et des crédits xbox sur enkaspay.</h3>
            <p>Vous voulez recharger votre porte-monnaie xbox avec une carte xbox prépayée  pour acheter plus de jeux, des add-ons, ou des DLC dans le microsoft Store ? Choisissez alors nkstor !</p>
            <p>Vous pouvez toujours être 100% certain que vous recevrez un code xbox authentique.</p>
            <section className="CatPage-mobile-Articles-box">
              {  
                        Articles.filter(Article =>{
                        if (Article.name.toLowerCase().includes("xbox".toLowerCase())) {
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
  
  export default CatPage5;
  