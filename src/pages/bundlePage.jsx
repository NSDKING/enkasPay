import Navbar from "../components/navbar";
import phone from "./img/phonehappy.png"
import "./css/bundle.css"
import DefaultButton from '../components/DefaultButton'
import { useState } from "react";

export default function BundlePage() {
    const [index, setIndex] = useState(0)
    const bundleData = [
        {
            title:'ESSENTIAL',
            champ1:'+1000 chaines',
            champ2:'netflix ',
            champ3:'-',
            champ4:'-',
            champ5:'-',
            champ6:'-',
            price:'8000',
        },
        {
            title:'HOME +',
            champ1:'+2500 chaines',
            champ2:'netflix ',
            champ3:'prime video',
            champ4:'-',
            champ5:'-',
            champ6:'-',
            price:'15000',
        },
        {
            title:'ADVANTAGE',
            champ1:'+5000 chaines',
            champ2:'netflix ',
            champ3:'prime video',
            champ4:'crunshyrol',
            champ5:'spotify',
            champ6:'+Bonus',
            price:'22000',
        },

    ]
    let i =0
    return(
        <section className="bundlepage">
            <Navbar/>
            <div className="marge"></div>
            <div className="bundlepage-body">
            <img src={phone} className="firsmg" width='100%' />
            <div className="bundlepage-body-imgdata">
                <h2>bundle iptv</h2>
                <div className="bundleinfo">
                    <h1>{bundleData[index].title}</h1>
                    <p>{bundleData[index].champ1}</p>
                    <p>{bundleData[index].champ2}</p>
                    <p>{bundleData[index].champ3}</p>
                    <p>{bundleData[index].champ4}</p>
                    <p>{bundleData[index].champ5}</p>
                    <p>{bundleData[index].champ6}</p>
                    <p>{bundleData[index].price}Fcfa</p>
                  
                </div>
                <div className="dots-conrtainer">
                     <button
                        className="default-button"
                        onClick={()=>{
                                if(index>=2){
                                    setIndex(0);
                                }else{
                                    setIndex(index +1); console.log(index)

                                }                      
                        }}
                        style={{
                            backgroundColor: "black",
                            width:"40%",
                            height:"50px",
                            color:"white"
                                }}>
                            <p>suivant</p>
                    </button>
                </div>
                <DefaultButton text={"ajouter au panier"} bgcolor={"#eb0625"} textcolor={"white"} width={"100%"} height={"50px"} marginTop={"20px"} />
                
            </div>
            </div>
        </section>
    )
}
