import "./css/navbar.css"
import { useState } from 'react';
import next from './img/next.png'
import DefaultButtonLink from "./DefaultbuttonLink";
import { Link, useNavigate } from "react-router-dom";
import logo from './img/logo.png'


export default function Navbar() {
    const [isActive, setIsActive] = useState(false);
    const [navItemclas, setNavItemClas]= useState("off");
    const [navIconclass, setNavIconClas]= useState("hamburger-lines");
 
    const toggleActive = ()=>{
        if(isActive ==true){
            setNavItemClas("off")
            setNavIconClas("hamburger-lines")
            setIsActive(false)
        }else{
            setNavItemClas("navbar-items")
            setIsActive(true)
            setNavIconClas("close")
        }
     }

     const Styles = {
        textDecoration: 'none',
        color:'black',
         
     }
 
    return(
        <div className="navbar">
            <div className="container nav-container">
                <div className="navbar-header">
                <div className="logo">
                    <img src={logo} width="90%"/>
                </div> 
                <div className="left-menu-button" onClick={toggleActive}>
                        <div className={navIconclass}>
                            <span className='line line1'></span>
                            <span className='line line2'></span>
                            <span className='line line3'></span>
                        </div>
                    </div>
                </div>

                <div className={navItemclas}>
                    <div className="navbar-items-container">
                        <Link className="navbar-items-item" style={Styles}>
                            <p>comptes</p>
                            <img src={next} width="7%"/>
                        </Link>
                        <Link className="navbar-items-item" style={Styles} to="/store">
                            <p>store</p>
                            <img src={next} width="7%"/>
                        </Link>
                        <Link className="navbar-items-item" style={Styles} to="/bundle">
                            <p>bundle</p>
                            <img src={next} width="7%"/>
                        </Link>

                        <Link className="navbar-items-item" style={Styles} to="/affiliation">
                            <p>affiliation</p>
                            <img src={next} width="7%"/>
                        </Link>
                        <Link className="navbar-items-item" style={Styles}>
                            <p>a propos</p>
                            <img src={next} width="7%"/>

                        </Link>

                    </div>

                    <div className="navbar-bottom">
                        <DefaultButtonLink text={'log in'} bgcolor={"rgb(250, 44, 44)"} textcolor={"white"} location={'/login'} width={"75px"}  height={'40px'} margin={"20px"}/> 

                        <DefaultButtonLink text={'sign in'} bgcolor={"white"} textcolor={"black"} location={'/register'} width={"75px"} height={"40px"} margin={"20px"}/> 

                    </div>
                </div>

         
            </div>
        </div>
    )
}