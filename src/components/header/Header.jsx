import {faFutbol,
        faPerson,
       faCalendarDays,}
       from "@fortawesome/free-solid-svg-icons"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./header.css"
import { DateRange } from 'react-date-range';
import { useState } from "react";
import {useNavigate, Link} from "react-router-dom";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format}from"date-fns";

const Header = ({type}) => {
    const [ciudad, setCiudad] = useState ("");
    const [openDate, setOpenDate] = useState (false);
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
      const [openOptions, setOpenOptions] = useState(false);
      const [options,setOptions] = useState({
        persona:1,
        cancha:5,
      });

      const navigate = useNavigate()

      const handleOption = (name, operation) =>{
        setOptions((prev) => {
            return{
            ...prev,
            [name]: operation === "i" ? options[name] + 1: options[name] - 1
        };
    });
};

const handleSearch = ()=>{
  navigate ("/canchas", { state: {ciudad,date,options}});
};

    return(
        <div className="header">
            <div className={type ==="list" ? "headerContainer listMode": "headerContainer"}>

            <div className="headerList">
                {/* <div className="headerListItem active">
                <FontAwesomeIcon icon={faFutbol} />
                <span>
                <Link className="btn-Cancha" to=''>Canchas</Link>  
                </span>
                </div> */}
              
            </div>
            { type !== "list" &&
            <>
            <h1 className="headerTitle">El amor esta en la cancha.</h1>
            <p className="headerDesc">Reserva tú cancha - 10% de descuento si lo haces desde tú cuenta cancheros </p>
            <button className="headerBtn">
            <Link className='LinkLog1' to='/LogIn'>Iniciar Sesión / Registrarse</Link>
            </button>
            
            <div className="headerSearch">
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faFutbol} className="headerIcon"/>
                    <input type="text" 
                    placeholder="¿De que ciudad buscas?" 
                    className="headerSearchInput"
                    onChange={e=>setCiudad(e.target.value)}/>
                 </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
                    <span onClick={() => setOpenDate(!openDate)}className="headerSearchText">{format(date[0].startDate,"MM/dd/yyyy"
                    )} to {format(date[0].endDate,"MM/dd/yyyy")}</span>
                    {openDate && <DateRange
                     editableDateInputs={true}
                     onChange={item => setDate([item.selection])}
                     moveRangeOnFirstSelection={false}
                     ranges={date}  
                     className="date"
                     minDate={new Date()}
                     />}
                 </div>
                 <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
                    <span onClick={()=>setOpenOptions(!openOptions)}className="headerSearchText"> {options.persona} Personas - C futbol {options.cancha} </span>
                    {openOptions && <div className="options">
                        <div className="optionItem">
                          <span className="optionText">Personas</span> 
                          <div className="optionCounter">
                          <button 
                          disabled={options.persona <= 1}
                          className="optionCounterButton" 
                          onClick={()=>handleOption("persona", "d", )}>-</button>
                          <span className="optionCounterNumber">{options.persona}</span>
                          <button className="optionCounterButton" onClick={()=>handleOption("persona", "i", )}>+</button>
                          </div>
                        </div>
                        <div className="optionItem">
                          <span className="optionText">C Futbol</span>
                          <div className="optionCounter">
                          <button
                          disabled={options.cancha <=1} 
                          className="optionCounterButton" 
                          onClick={()=>handleOption("cancha", "d", )}>-</button>
                          <span className="optionCounterNumber">{options.cancha}</span>
                          <button className="optionCounterButton" onClick={()=>handleOption("cancha", "i", )}>+</button>
                          </div> 
                        </div>
                    </div>
}</div>
                 <div className="headerSearchItem">
                    <button className="headerBtn" onClick={handleSearch}>Buscar</button>
                 </div>
            </div>
            </>
            }
            </div>
            </div>
    );
};

export default Header;