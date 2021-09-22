import React from "react";
import '../components/Nav.css'
//import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="navigation">
      <ul className="navList">
        <li>
          <a href="#">
            <img className='navIcon'
              src={"https://imgur.com/1lZln5a.png"  }
              alt='coffe'
            />
          </a>
        </li>

        <li >
          <a href="#">
            <img className='navIcon'
              src={"https://imgur.com/v6EZtbD.png"}
              alt='burger'
            />
          </a>
        </li>

        <li>
          <a href="#">
            <img className='navIcon'
              src={"https://imgur.com/yadMCBx.png"}
              alt='friesCoke'
            />
          </a>
        </li>
        </ul>
    </div>
  );
};

export default Nav;
