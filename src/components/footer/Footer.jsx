import "./footer.css"
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

const Footer = () => {
    return (
        <div className="footer-distributed">
        <div class="footer-left">
            <h3>CANC<span>HEROS</span></h3>

            <p class="footer-links">
                <a href="#">Home</a>
                |
                <a href="#">About</a>
                |
                <a href="#">Contact</a>
                |
                <a href="#">Blog</a>
            </p>

            <p class="footer-company-name">Copyright © 2023 <strong>CANCHEROS</strong></p>
        </div>

        <div class="footer-center">

            <div>
                <i class="fa fa-phone"></i>
                <a href="#"><i class="fa fa-whatsapp">
                    <BsWhatsapp/>
                    </i></a>
                <p>+57 3233694623</p>
            </div>
            <div>
                <i class="fa fa-envelope"></i>
                <p className="pgmail">cancherosaxm@gmail.com</p>
            </div>
        </div>
        <div class="footer-right">
            <p class="footer-company-about">
                <span>About the company</span>
                <strong>CANCHEROS</strong>   es una aplicación web, donde podrás alquilar canchas sintéticas de forma rápida y sencilla, donde incluso podrás ver los productos que se encuentran almacenados en el establecimiento al que ingresas. 
            </p>
            <div class="footer-icons">
                <a href="#"><i class="fa fa-facebook">
                    <BsFacebook/>
                    </i></a>
                <a href="#"><i class="fa fa-instagram">
                    <BsInstagram/>
                    </i></a>
            </div>
        </div>
        </div>
    )
}

export default Footer