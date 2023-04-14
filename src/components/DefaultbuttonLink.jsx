import { Link } from "react-router-dom"
import "./css/defaultButton.css"

export default function DefaultButtonLink({text, location, bgcolor, textcolor, width, height, WebkitBoxShadow, MozBoxShadow, boxShadow, margin}) {

    return(
        <Link className="default-button" style={{
            backgroundColor: bgcolor,
            textDecoration: 'none',
            width:width,
            height:height,
            WebkitBoxShadow: WebkitBoxShadow,
            MozBoxShadow: MozBoxShadow,
            boxShadow:boxShadow,
            margin:margin,

        }} to={location}>
            <p style={{color:textcolor}}>{text}</p>
        </Link>
    )
}