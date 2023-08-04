import React from 'react';
import './css/pageweb.css'
 
const PageEnkasWeb = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', margin: '0', padding: '0', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f0f0' }}>
      <div>
        <h1>Enkas WD</h1>
        <p>Offrant des services de création de sites Web.</p>
        <p>Contact : 652737914</p>
        <div style={{ marginTop: '20px' }}>
          <a href="https://www.enkas.net" target="_blank" rel="noopener noreferrer">Visitez notre site Web</a><br />
          <a href="https://main.d17vcd7gdz2awq.amplifyapp.com/" target="_blank" rel="noopener noreferrer">Visitez notre portfolio</a>
        </div>
      </div>
    </div>
  );
};

export default PageEnkasWeb;
