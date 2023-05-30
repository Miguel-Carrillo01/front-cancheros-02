import "./cancha.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCircleArrowLeft, faCircleArrowRight, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import { Map } from "../../components/Map/Map"
import { Link } from 'react-router-dom';

const Cancha = () => {
    const [slideNumber, setSlideNumber, newSlideNumber] = useState (0);
    const [open, setOpen] = useState (false);
    const photos = [
    {
        src: "https://res.cloudinary.com/dwbhahrsr/image/upload/v1683236180/logo_orquesta_de_salsa_retro_amarillo_y_negro_1_qjpwuz.png"
    }, 
    {
        src:"https://res.cloudinary.com/dwbhahrsr/image/upload/v1675708327/samples/people/persona_hhcnmi.png"
    }, 
    {
        src:"https://res.cloudinary.com/dwbhahrsr/image/upload/v1683236180/logo_orquesta_de_salsa_retro_amarillo_y_negro_1_qjpwuz.png"
    }, 
    {
        src:"https://res.cloudinary.com/dwbhahrsr/image/upload/v1675708327/samples/people/persona_hhcnmi.png"
    }, 
    {
        src:"https://res.cloudinary.com/dwbhahrsr/image/upload/v1683236180/logo_orquesta_de_salsa_retro_amarillo_y_negro_1_qjpwuz.png"
    }, 
    {
        src:"https://res.cloudinary.com/dwbhahrsr/image/upload/v1675708327/samples/people/persona_hhcnmi.png"
    }, 
   
    ];

    const handleOpen = (i) =>{
        setSlideNumber(i);
        setOpen(true);
    };
    const handleMove = (direction)=>{
        
        let  newSlideNumber;

        if(direction==="l"){
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1;
        } else{
            newSlideNumber = slideNumber == 5 ? 0 : slideNumber +1;
        }
        setSlideNumber(newSlideNumber)
    };
    return (
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="canchaContainer">
                {open && <div className="slider">
                    <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
                    <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
                    <div className="sliderWrapper">
                        <img src={photos[slideNumber].src}  alt="" className="sliderImg" />
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight}className="arrow" onClick={()=>handleMove("r")}/>
                </div>}
                <div className="canchaWrapper">
                    <h1 className="canchaTitle">Campnou</h1>
                    <Link to='/PasarelaDePagos'><button className="reservaAhora">Reservar ahora</button></Link>

                    <div className="canchaAddress">
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span>Mz 2 Barrio Ciudad Dorada</span>
                    </div>
                    <span className="canchaDistance">
                        Excelente localización - 500m from center
                    </span>
                    <span className="canchaPriceHighlight">
                        si alquila por más de 1 hora en esta cancha se le dara un descuento de un 5% en el proximo alquiler
                    </span>
                    <div className="canchaImages">
                        {photos.map((photo,i)=>(
                            <div className="canchaImgWrapper">
                                <img onClick={()=>handleOpen(i)}src={photo.src} alt="" className="canchaImg" />
                            </div>
                        ))}
                    </div>
                    <div className="canchaDetails">
                        <div className="canchaDetailsTexts">
                            <h1 className="canchaTitle">
                                Camp Nou
                            </h1>
                            <p className="canchaDesc">
                            Canchas Sintéticas Camp Nou, Armenia, Quindío, Colombia está ubicado en Cra. 6, Armenia, Quindío, Colombia, cerca de este lugar son: Gimnasio SuperGym (630 m), Centro Deportivo Mormones La Castellana (730 m), Edificio Castellana 9 A N 58 (976 m), Pulso Box armenia (1 km), GIMNASIO EQUILIBRIUM FITNESS (1 km).

                            </p>
                            </div>
                            <div className="canchaDetailsPrice">
                                <h1>Perfecta para jugar!</h1>
                                <span>
                                Cancha con reja • luces • tienda • gradas de 30 puestos
                                </span>
                                <h2>
                                    $45.000 (1 hora)
                                </h2>
                                <Link to='/PasarelaDePagos'><button className="btnrese">Reservar</button></Link>
                                
                            </div>
                        </div>
                    </div>
                    
                </div>
                    <Map/>
            </div>
    )
}

export default Cancha