import "../components/orderSummary.css";
import { useLocation } from "react-router";

const Ordersummary = () => {
   
const location = useLocation();
const mesero = location.state 

return (
    <div className="summaryContainer">
    <h1 className="textResume"> RESUMEN DEL PEDIDO </h1>
    <div className="tableNumContainer">
        <h3 className="text3"> Mesero:{location.state}</h3>
        <h2 className="text2"> N° DE MESA: </h2>
    </div>
    <div className="orderContainer"></div>
    <button className="btn-light" > ENVIAR </button>
    </div>
);
};

export default Ordersummary;
