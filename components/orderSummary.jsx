import '../components/orderSummary.css'
// import { useLocation } from 'react-router';  PARA TRAER EL NOMBRE DEL MESER@

const Ordersummary = () => {
    // const location = useLocation();
    return (

        <div className = 'summaryContainer'> 
            <h1 className= 'text1'> RESUMEN DEL PEDIDO </h1>
            <div className = 'tableNumContainer'>
            <h2 className= 'text2'> N° DE MESA: </h2>
            <h3 className= 'text3'> {/*location.state*/} mesa seleccionada </h3>
            </div>
            <div className= 'orderContainer'>
            </div>
            <button className = 'btn-secondary'> ENVIAR </button>
        </div>

    );
};

export default Ordersummary