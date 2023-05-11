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
                        devient un  partenaires affilié
                    </h1>
                </div>
                <p className="affiliatepage-first-text">
                    aide nous a promouvoir enkaspay et gagne des commissions grace à ton code partenaire               
                 </p>
                <DefaultButtonLink text={"obtenir mon code partenaire"} bgcolor={"#eb0625"} textcolor={"white"} width={"90%"} height={"50px"} marginTop={"10px"} location={"/login"}/>
            </div>
            <div className="affiliatepage-body">
                <h1>comment ça marche?</h1>
                <div className="textBox">    
                    <Textbox text={"c’est très simples cliques sur obtenir mon code partenaires puis entre les informations après cela tu recevras ton code partenaire et tu n’auras plus qu’a le partagé et à chaque utilisation tu reçois ton due."}/>

                </div>
                <h1>comment est-ce que je reçois mon argent ?</h1>
                <div className="textBox">    

                    <Textbox text={"tu reçois ton argent par om où Momo chaque samedi a ta demande. pour le faire clique sur le bouton affiliation dans le menu"}/>
                </div>
                <h1>Où est-ce que je peux consulter ma solde?</h1>

                <div className="textBox">    

                    <Textbox text={"tu peux consulter ton solde, le nombre de personnes qui ont utilisé ton code partenaire sur ce site et même les produits qu’ils ont achetés si tu deviens commerciale"}/>
                </div>

                <h1>comment devenir commercial?</h1>

                <div className="textBox">    

                    <Textbox text={"pour devenir un commercial c’est très simple ton code partenaire doit être utilisé plus de 7 fois par semaine"}/>
                </div>
                
                <h1>Quels sont les avantages à être une commerciale ?</h1>

                <div className="textBox">    

                    <Textbox text={"un commercial gagne plus qu’un partenaire pour chaque utilisation de son code partenaire et intègre un groupe ou il benefiecie de l'expérience des autres membres."}/>
                </div>

             </div>
        </section>


    )   
}