import Navbar from "../components/navbar";
import pm from './img/pm.jpg'
import "./css/affiliate.css"
import DefaultButtonLink from "../components/DefaultbuttonLink";
import Textbox from "../components/textBox";
  
export default function AffiliatePage() {
    return(
        <section className='affiliatepage'>
            <Navbar/>
            <div className="affiliatepage-header">
                <div className="affiliatepage-img">
                </div>
                <div className="affiliatepage-title">
                    <h1 >
                        devient un  partenaires affiliés
                    </h1>
                </div>
                <p className="affiliatepage-first-text">
                    aide nous a promouvoir enkaspay et gagne des commisssions grace a ton code partenaire
                </p>
                <DefaultButtonLink text={"obtenir mon code partenaire"} bgcolor={"#eb0625"} textcolor={"white"} width={"90%"} height={"50px"} marginTop={"10px"} location={"/login"}/>
            </div>
            <div className="affiliatepage-body">
                <h1>comment ca marche?</h1>
                <div className="textBox">    
                    <Textbox text={" c’est tres simple cliques sur obtenir mon code partenaires puis entre les informations apres cela tu recevras ton code partenaire et tu n’aura plus qu’a le partager et chaque utilisation tu recois ton due."}/>

                </div>
                <h1>comment est ce que je recois mon argent ?</h1>
                <div className="textBox">    

                    <Textbox text={"tu recois ton argent par om ou momo chaque samedi a ta demande. pour le faire clique sur le bouton affiliation dans le menu "}/>
                </div>
                <h1>ou est ce que je peux consulter mon solde?</h1>

                <div className="textBox">    

                    <Textbox text={"tu peux consulter ton solde le nombre de personnes qui ont utiliser ton code partenaire sur ce site et meme les produits qu’ils ont acheté si tu deviens commerciale"}/>
                </div>

                <h1>comment devenir commercial?</h1>

                <div className="textBox">    

                    <Textbox text={"pour devenir un commercioal c’est tres simple ton code partenaire doit etre utiliser plus de 7 fois par semaine"}/>
                </div>
                
                <h1>quel sont les avantages a etre un commerciales ?</h1>

                <div className="textBox">    

                    <Textbox text={"un commercial gagne plus qu’un partenaire pour chaque utilisation de son code partenaire et integre un groupe ou il benefiecie de l'experience des autres membres."}/>
                </div>

             </div>
        </section>


    )   
}