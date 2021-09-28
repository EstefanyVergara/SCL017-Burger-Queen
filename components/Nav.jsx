import React from "react";
import '../components/css/nav.css'
import { Link } from 'react-router-dom';
//import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <div className="navigation">
      <ul className="navList">
        <li>
        <Link to="/breakfast">
            <img className='navIcon'
              src={"https://imgur.com/1lZln5a.png"}
              alt='coffe'
            />
          </Link>
        </li>

        <li >
        <Link to="/burgir">
            <img className='navIcon'
              src={"https://imgur.com/v6EZtbD.png"}
              alt='burger'
            />
          </Link>
        </li>

        <li>
        <Link to="/extras">
            <img className='navIcon'
              src={"https://imgur.com/yadMCBx.png"}
              alt='friesCoke'
            />
          </Link>
        </li>
        </ul>
    </div>
  );
}

function NavBreakfast() {
  return (
    <div className="navigation">
      <ul className="navList">
        <li>
        <Link to="/breakfast">
            <img className='navIcon'
              src={"https://i.imgur.com/1rHHANe.png"}
              alt='coffe'
            />
          </Link>
        </li>

        <li >
        <Link to="/burgir">
            <img className='navIcon'
              src={"https://imgur.com/v6EZtbD.png"}
              alt='burger'
            />
          </Link>
        </li>

        <li>
        <Link to="/extras">
            <img className='navIcon'
              src={"https://imgur.com/yadMCBx.png"}
              alt='friesCoke'
            />
          </Link>
        </li>
        </ul>
    </div>
  );
}

function NavBurgir() {
  return (
    <div className="navigation">
      <ul className="navList">
        <li>
        <Link to="/breakfast">
            <img className='navIcon'
              src={"https://imgur.com/1lZln5a.png"}
              alt='coffe'
            />
          </Link>
        </li>

        <li >
        <Link to="/burgir">
            <img className='navIcon'
              src={"https://i.imgur.com/qIjzmB6.png"}
              alt='burger'
            />
          </Link>
        </li>

        <li>
        <Link to="/extras">
            <img className='navIcon'
              src={"https://imgur.com/yadMCBx.png"}
              alt='friesCoke'
            />
          </Link>
        </li>
        </ul>
    </div>
  );
}

function NavExtras() {
  return (
    <div className="navigation">
      <ul className="navList">
        <li>
        <Link to="/breakfast">
            <img className='navIcon'
              src={"https://imgur.com/1lZln5a.png"}
              alt='coffe'
            />
          </Link>
        </li>

        <li >
        <Link to="/burgir">
            <img className='navIcon'
              src={"https://imgur.com/v6EZtbD.png"}
              alt='burger'
            />
          </Link>
        </li>

        <li>
        <Link to="/extras">
            <img className='navIcon'
              src={"https://i.imgur.com/dnMK8F7.png"}
              alt='friesCoke'
            />
          </Link>
        </li>
        </ul>
    </div>
  );
}


export {
  Nav, NavBreakfast, NavBurgir, NavExtras};
