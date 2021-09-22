import React from 'react'

const Mesas = () => {
  return (
<div className="dropdown">
  <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
  <span className="caret"></span></button>
  <ul className="dropdown-menu">
    <li><a href="/mesa1">Mesa1</a></li>
    <li><a href="/mesa2">Mesa2</a></li>
    <li><a href="/mesa3">mesa3</a></li>
  </ul>
</div>
  )
}

export default Mesas;
