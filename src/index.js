import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import products from './products';
import Produkt from './components/Produkt'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <>
      <h1>Willkommen im Waffenladen! Tod und Zerstörung zu günstigen Angeboten!</h1>
      <div className="Container" style={{color: "grey"}}>
        {products.map((product, index) =>
          <Produkt key={index} Name={product.Name} Preis={product.Preis} imageURL={product.img} Anzahl={product.Anzahl}></Produkt>
        )}
      </div>


      </>
);
