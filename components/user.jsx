import React, { Fragment } from "react";
import camila from "../components/assets/img/meser@s/camila.svg";
import "../components/User.css";

const User = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="row">

          <div className="card">
            <img src={camila} alt="camila" />
            <div className="card-text">
              <h3>Camila Zuñiga</h3>
            </div>
          </div>

          <div className="card">
            <img src={camila} alt="camila" />
            <div className="card-text">
              <h3>Carolina Quintanilla</h3>
            </div>
          </div>
          </div>

          <div className="row">
          <div className="card">
            <img src={camila} alt="camila" />
            <div className="card-text">
              <h3>Eva Muñoz</h3>
            </div>
          </div>

          <div className="card">
            <img src={camila} alt="camila" />
            <div className="card-text">
              <h3> Juanita Gonzalez</h3>
            </div>
          </div>
          </div>

          <div className="row">
          <div className="card">
            <img src={camila} alt="camila" />
            <div className="card-text">
              <h3>Fernanda Rojas</h3>
            </div>
          </div>

          <div className="card">
            <img src={camila} alt="camila" />
            <div className="card-text">
              <h3> Cecilia Hernandez</h3>
            </div>
          </div>
          </div>
      </div>
    </Fragment>
  );
};

export default User;
