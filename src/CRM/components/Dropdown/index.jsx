import React, { useState } from 'react';
import './index.css'; // Import your CSS file

export default function Dropdown({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);

  

 
  

  return (
 
      <div className="dropdown"
       >
        <button className="dropbtn">{title}</button>
        <div className="dropdown-content">
            {items.map((item, index) => (
                       <a href={item.link} key={index}>{item.label}</a>
            ))}
       
        </div>
      </div>
  );
}

 
