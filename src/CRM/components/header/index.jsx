import { useNavigate } from "react-router-dom";
import Dropdown from "../Dropdown";
import "./index.css"
import { useState } from "react";

 

export default function SHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();


  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  
  const Dropitems =[
    { label: 'Conclue', link: '/crm-concluePage' },
    { label: 'Nouveau', link: '/crm-nouveau' },
    { label: 'Perdue', link: '/crm-perdu' },
    { label: 'Proposition', link: '/crm-proposition' },
    { label: 'Decouverte', link: '/crm-decouverte' },
    { label: 'Negociation', link: '/crm-negociation' },
  ]
  
  const navLinks = [
     { title: 'ranking', link: '#' },
 
  ];

  const renderNavLinks = () => {
    return navLinks.map((navLink, index) => (
        <a href={navLink.link} index={index}>{navLink.title}</a>
     ));
  };
  return(
    <header>
        <h2 className="crm-logo"
          onClick={()=>{navigate("/crm-HomePage")}}
        >ENKAS</h2>
        <div className="buttons-container">
          <Dropdown title="statut" items={Dropitems} />
          {renderNavLinks()}

        </div>


    </header>

  )

}

