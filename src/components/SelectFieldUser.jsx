import React, { useEffect, useState } from 'react';
import './css/select.css'

export default function SelectFieldUser({options}) {
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const [loading, setLoading] = useState(false);
 
 
  const handleInputChange = (e) => {
    if (options.length > 0) {
      const value = e.target.value;
      setInputValue(value);
      setIsOpen(true);
    }
  };

  const handleOptionClick = (value) => {
    setSelectedValue(value);
    setInputValue(value.FamilyName);
    setIsOpen(false);
  };
 
  return (
    <div className='selectField'>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={() => setIsOpen(false)}
        onClick={()=>{
          console.log(options)
          setIsOpen(true)
        }}
        disabled={options.length === 0} // Disable input when userList is empty
      />
      {isOpen && (
        <ul>
          { inputValue==""?(
            options.map((user,index)=>
            (
              <li key={index} onClick={() => handleOptionClick(user)}>
                          {user.FamilyName} {user.LastName}
              </li>
            ))
          ):
          (options.filter((user) =>
                  (
                    user?.FamilyName?.toLowerCase()?.includes(inputValue.toLowerCase()) ||
                    user?.LastName?.toLowerCase()?.includes(inputValue.toLowerCase())) ||
                            ''
                      )
                      .map((user, index) => (
                        <li key={index} onClick={() => handleOptionClick(user)}>
                          {user?.FamilyName} {user?.LastName}
                        </li>
                      )))
                      
          }
        </ul>
      )}
    </div>
  );
}
