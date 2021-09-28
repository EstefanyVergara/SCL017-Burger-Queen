import React from 'react'
import '../components/mesas.css'

const Mesas = ({setMesa}) => {
  return (
<div className=" Menu-dropdown">
  <button className="btnMesa btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
    ESCOGE MESA 
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
    <li> <button className="dropdown-item"  onClick={() => setMesa('1')}>Mesa 1 </button></li>
    <li> <button className="dropdown-item"  onClick={() => setMesa('2')}>Mesa 2 </button></li>
    <li> <button className="dropdown-item"  onClick={() => setMesa('3')}>Mesa 3 </button></li>
  </ul>
</div>
  )
}

export default Mesas;