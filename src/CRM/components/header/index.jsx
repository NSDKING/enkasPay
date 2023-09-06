import Dropdown from "../Dropdown";
import "./index.css"
import { useState } from "react";



export default function SHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');


  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  
  const Dropitems =[
    { label: 'Conclue', link: '#' },
    { label: 'Nouveau', link: '#' },
    { label: 'Perdue', link: '#' },
    { label: 'Proposition', link: '#' },
    { label: 'Decouverte', link: '#' },
    { label: 'Negociation', link: '#' },
  ]
  
  const navLinks = [
    { title: 'Prospect', link: '/crm-prospect' },
    { title: 'Today', link: '#' },
    { title: 'ajouter', link: '/crm-add-line' },
    { title: 'goodpoint', link: '#' },
    { title: 'pbcount', link: '#' },
  ];

  const renderNavLinks = () => {
    return navLinks.map((navLink, index) => (
        <a href={navLink.link} index={index}>{navLink.title}</a>
     ));
  };
  return(
    <header>
        <h2 className="crm-logo">ENKAS</h2>
        <div className="buttons-container">
          <Dropdown title="statut" items={Dropitems} />
          {renderNavLinks()}

        </div>


    </header>

  )

}

