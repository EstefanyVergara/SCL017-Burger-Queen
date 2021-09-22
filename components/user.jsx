import React, { Fragment } from "react";
import "../components/User.css";
import { Link } from 'react-router-dom';

const User = () => {
  return (
    <Fragment>
      <div className="container">

        <div className="row">
          <div className="card">
            <Link to={{ pathname: "/menu", state: 'Camila Zuñiga' }}>
              <img src={'https://imgur.com/3b9N1bL.png'} alt="camila" />
              <div className="card-text">
                <h3>Camila Zuñiga</h3>
              </div>
            </Link>
          </div>

          <div className="card">
            <Link to={{ pathname: "/menu", state: 'Rodrigo Gutierrez' }}>
              <img src={'https://imgur.com/FUJTsHt.png'} alt="Rodrigo" />
              <div className="card-text">
                <h3>Rodrigo Gutierrez</h3>
              </div>
            </Link>
          </div>
        </div>

        <div className="row">
          <div className="card">
            <Link to={{ pathname: "/menu", state: 'Eva Muñoz' }}>
              <img src={'https://imgur.com/kCeSqgD.png'} alt="eva" />
              <div className="card-text">
                <h3>Eva Muñoz</h3>
              </div>
            </Link>
          </div>

          <div className="card">
            <Link to={{ pathname: "/menu", state: 'Camilo Figueroa' }}>
              <img src={'https://imgur.com/iDy440n.png'} alt="Camilo" />
              <div className="card-text">
                <h3> Camilo Figueroa</h3>
              </div>
            </Link>
          </div>

        </div>

        <div className="row">
          <div className="card">
            <Link to={{ pathname: "/menu", state: 'Victor Acuña' }}>
              <img src={'https://imgur.com/t9TEfBW.png'} alt="Victor" />
              <div className="card-text">
                <h3>Victor Acuña</h3>
              </div>
            </Link>
          </div>

          <div className="card">
           <Link to={{ pathname: "/menu", state: 'Carolina Quintanilla' }}> 
              <img src={'https://imgur.com/JqYix8h.png'} alt="carolina" />
              <div className="card-text">
                <h3>Carolina Quintanilla</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default User;
