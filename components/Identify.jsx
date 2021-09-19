import React, { Fragment }  from 'react';
import Logo from './assets/img/logo.png'
import '../components/identify.css'

const Identify = () => {

    return (
        <Fragment>
        <div className = "container">
            <img src = {Logo} alt = "burgir" className = "logo"/>
                <div className="selectWorker">
                    <h1 className= "text1">SELECCIONA UNA OPCIÓN</h1>
                    <button className = 'btn-primary'> Mesero</button>
                    <button className = 'btn-secondary' disabled> Cocina</button>
                </div>
        </div>
        </Fragment>
    );

};

export default Identify;