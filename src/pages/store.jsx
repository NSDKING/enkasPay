import Card from "../components/card"
import Cate from "../components/categories"
import Navbar from "../components/navbar"
import Carrousel from "../components/carroussel"
import "./css/store.css"
import pm from './img/pm.jpg'

export default function storePage() {
    return(
        <section className="storePage">
            <Navbar/>
            <div className="marge"></div>
            <Carrousel></Carrousel>
            <h3>categories populaire</h3>
            <Cate></Cate>
            <div className="test">
                <Card></Card>
                <Card></Card>
            </div>
            <div className="test">
                <Card></Card>
                <Card></Card>
            </div>
            <div className="test">
                <Card></Card>
                <Card></Card>
            </div>
        </section>
    )

}