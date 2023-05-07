import Navbar from "../components/navbar"
import "./css/CatPage.css"
import Card from "../components/card"
 
export default function CartPage({Articles,setProdTitle, setProdDesc, setProdPrice, setProdCover}) {
  
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
  
   