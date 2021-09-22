import React from "react";
import '../components/Nav.css'
import { Link } from 'react-router-dom';
//import { NavLink } from 'react-router-dom';

const Nav = () => {
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
};

export default Nav;
