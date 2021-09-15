import React from 'react';
import Logo from './assets/img/logo.png'

const Identify = () => {

    return (
        <div>
          <img src = {Logo} alt = "burgir" className = "logo"/>
          <h1>Elige una opción</h1>
          <button className = 'btn btn-primary btn-lg'> Mesero</button>
          <button className = 'btn btn-secondary btn-lg disabled'> Cocina</button>
          </div>
    );

};

export default Identify;