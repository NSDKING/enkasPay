import React, { useEffect, useState } from 'react';
 
export default function SelectField({options}){
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  
  
  
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setIsOpen(true);
  };

  const handleOptionClick = (value) => {
 
    console.log("inputValue")
  };
 
  return (
    <div className='selectField'>
 

      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={() => setIsOpen(false)}
        onClick={()=>{
           setIsOpen(true)
         }}
      />
      {isOpen && (
        <ul>
          {inputValue==""?(
            options.map((product, index)=>
              <li key={index} onClick={() =>{
                console.log("ollllllllllllll")
              }}>
                  {product.name}
                </li>
            )
          ):(
            options
            .filter((option) =>
              option?.toLowerCase().includes(inputValue.toLowerCase())
            )
            .map((option, index) => (
              <li key={index} onClick={() => {
                console.log("ollllllllllllll")

              }}>
                {option}
              </li>
            ))
          )
          
            }
        </ul>
      )}
     </div>
  );
};
