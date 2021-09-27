import React from 'react'
import '../components/mesas.css'

const Mesas = () => {
  return (
<div className=" Menu-dropdown">
  <button className="btnMesa btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
    ESCOGE MESA 
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
    <li><a className="dropdown-item" href="/">Mesa 1</a></li>
    <li><a className="dropdown-item" href="/">Mesa 2</a></li>
    <li><a className="dropdown-item" href="/">Mesa 3</a></li>
  </ul>
</div>
  )
}

export default Mesas;
