import { useNavigate } from "react-router-dom"
import "./css/navBar.css"
import logo from './img/logo.png'
import { useState } from "react";



export default function CrmNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
  
    const navLinks = [
      { title: 'Prospect', link: '/crm-prospect' },
      { title: 'Today', link: '#' },
      { title: 'Conclue', link: '#' },
      { title: 'Nouveau', link: '#' },
      { title: 'Perdue', link: '#' },
      { title: 'Proposition', link: '#' },
      { title: 'Decouverte', link: '#' },
      { title: 'Negociation', link: '#' },
      { title: 'ajouter', link: '/crm-add-line' },
    ];
  
    const renderNavLinks = () => {
      return navLinks.map((navLink, index) => (
        <li key={index}>
          <a href={navLink.link}>{navLink.title}</a>
        </li>
      ));
    };
  
    return (
      <nav className="crm-navbar">
        <h2 className="crm-logo">ENKAS</h2>
        <button className="navbar-toggle" onClick={toggleSidebar}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
          {renderNavLinks()}
        </ul>
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
          <ul>
            {renderNavLinks()}
          </ul>
        </div>
      </nav>
    );
    
}
