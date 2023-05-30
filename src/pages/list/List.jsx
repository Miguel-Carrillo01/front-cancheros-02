import "./list.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import SearchItem from "../../components/searchItem/SearchItem"
import {useLocation} from "react-router-dom"
import { useState } from "react";
import {format} from "date-fns"
import { DateRange } from "react-date-range";
const List = () => {

    const location = useLocation();
    const [ciudad,setCiudad] = useState(location.state.ciudad);
    const [date,setDate] = useState(location.state.date);
    const [openDate,setOpenDate] = useState(false);
    const [options,setOptions] = useState(location.state.options);
    return (
        <div>
        <Navbar/>
        <Header type="list"/>
        <div className="listContainer">
            <div className="listWrapper">
                <div className="listSearch">
                    <h1 className="lsTitle">Buscador</h1>
                    <div className="lsItem">
                        <label>Ciudad</label>
                        <input placeholder={ciudad} type="text" />
                    </div>
                    <div className="lsItem">
                        <label>Fecha</label>
                        <span onClick={()=>setOpenDate(!openDate)}> {format(date[0].startDate,"MM/dd/yyyy"
                    )} to {format(date[0].endDate,"MM/dd/yyyy")}</span>
                  
                  { openDate && (
                  <DateRange
                    onChange={item=>setDate([item.selection])} 
                    minDate={new Date()}
                    ranges={date} 
                    />
                    )}
                    </div>
                    <div className="lsItem">
                        <label>Opciones</label>
                        <div className="lsOptions">

                        <div className="lsOptionItem">
                            <span className="lsOptionText">
                                Precio Minimo <small>Por hora</small>
                            </span>
                            <input type="number" className="lsOptionInput" />
                        </div>
                        <div className="lsOptionItem">
                            <span className="lsOptionText">
                                Precio Maximo <small>Por hora</small>
                            </span>
                            <input type="number" className="lsOptionInput" />
                        </div>
                        <div className="lsOptionItem">
                            <span className="lsOptionText">
                                Personas 
                            </span>
                            <input type="number" min={1} max={100}className="lsOptionInput" placeholder={options.persona}/>
                        </div>
                        <div className="lsOptionItem">
                            <span className="lsOptionText">
                                Cancha 
                            </span>
                            <input type="number" min={5} max={11} className="lsOptionInput" placeholder={options.cancha}/>
                        </div>
                    </div>
                </div>
                <button>Buscar</button>
            </div>
                <div className="listResult">
                    <SearchItem/>
                    <SearchItem/>
                    <SearchItem/>
                    <SearchItem/>
                    <SearchItem/>
                    <SearchItem/>
                    <SearchItem/>
                    <SearchItem/>
                    <SearchItem/>
                </div>
            </div>
        </div>
        </div>
    );
};

export default List;