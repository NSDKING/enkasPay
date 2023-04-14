import Navbar from "../components/navbar";
import DefaultButton from '../components/DefaultButton'
import './css/home.css'
import om from './img/om.png'
import mtn from './img/mtn.png'

export default function HomePage() {
    return(
        <section className="homepage">
            <Navbar/>
            <section className="home-box" id="box1">
                <p className="p-home">enkas pay te permet de faire tes achats en ligne simplement et en toutes securité</p>
            </section>  
            <section className="home-box" id="box2">
                <p className="p-home">pour certain article enkaspay peut assurer l’acheminent des aticles jusqu’au cameroun</p>
            </section>  
            <section className="home-box" id="box3">
               <div id="om">
                    <p className="p-home">
                        paiment possible par
                    </p>
                    <img src={om} className="p-img"/>

               </div>
               <div id="mtn">
                            <p className="p-home">
                                paiment possible par
                            </p>
                    <img src={mtn} className="p-img"/>

               </div>

            </section>  
            <div className="button">
                <DefaultButton text={"cliques pour plus d'information"} bgcolor={"#25D366"} textcolor={"white"} width={"100%"} height={"50px"} marginTop={"20px"} />

            </div>
        </section>
    )
}
