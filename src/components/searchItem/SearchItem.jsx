import { Link, Route } from "react-router-dom";
import "./searchItem.css"


const SearchItem = () => {
    return (
        <div className="searchItem">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuBqdOteVghyqUHvl0UXQ849AnfXoHzgOaokues1rjMqKLpY2UHlm6gTjMpreHo6aBPKU&usqp=CAU" alt="" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">Campnou</h1>
            <span className="siPromoOp">10% de descuento dia lunes</span>
            <span className="siSubtitle">
                Cancha futbol 5
                </span>

            <span className="siFeatures">
                Cancha con reja • luces • tienda • gradas de 30 puestos
                </span>

            <span className="siCancelOp">Cancelacion gratuita</span>

            <span className="siCancelOpSubtitle">
                puede cancelar más tarde, así que asegure este excelente precio hoy!
                </span>
                
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excelente</span>
                <button>8.9</button>
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">$45.000</span>
                <span className="siTextOp">Incluido petos y bolsas de agua</span>
                <button className="siCheckButton">
                <Link className="LinkCancha" to='/canchas/:id'>Mira disponibilidad</Link>
                
                </button>
            </div>
        </div>
        </div>
    );
};

export default SearchItem