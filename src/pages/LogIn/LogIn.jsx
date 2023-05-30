import React, { useState } from 'react'
import "./LogIn.css"
import { Link, useNavigate} from 'react-router-dom';
import { send } from '@emailjs/browser';
import axios from 'axios';

export const MainLogin = () => {

    //CONNECT BACK AND FRONT

    const [ inputs, setInputs ] = useState({
        email: "",
        name: "",
        password: ""
    });

    const [ mensaje, setMensaje ] = useState();
    const [ loading, setLoading ] = useState(false);

    const { email, name, password } = inputs;

    const onChange = (e) => {
        setInputs({...inputs, [e.target.name]: e.target.value});
    };

    const onSubmit = async(e) => {
        try {
            e.preventDefault();
        if (name !== "" && password !== "" && email !== "") {
            const User = {
                name, password, email
            };
            setLoading(true);
            await axios.post("http://localhost:5000/api/users/register", User)
            .then(({data}) => console.log(data));
        }
        } catch (error) {
            alert("Error al registrar")
        }
        
    };

    const onSubmitLogin = async(e) => {
        try {
            e.preventDefault();
        if (name !== "" && password !== "" && email !== "") {
            const User = {
                name, password, email
            };
            setLoading(true);
            await axios.post("http://localhost:5000/api/users/login", User)
            .then(({data}) => console.log(data));
        }
        } catch (error) {
            alert("Error, verifica los datos")
        }
    };

    const navigate = useNavigate()

    const [clas, setClas] = useState(false);

    const removePanel = () =>{
        setClas (false)
    }

    const  putPanel = () =>{
        setClas(true)
    }

    const send = () =>{
        navigate('/')
    }


return (
    <main className='MainLogin'> 
        <div className='contenedorTodo' >
            <div className='cajaTrasera'>
                <div className='cajaTraseraLogin'>
                    <h3>¿Ya tienes cuenta?</h3>
                    <p>Inicia sesión para entrar en la pagina</p>
                    <button id='btnIniciarSesion' onClick={removePanel}>Iniciar Sesion</button>
                </div>
                <div className='cajaTraseraRegistro'>
                    <h3>¿Aún no tienes una cuenta?</h3>
                    <p>Regístrate para que puedas iniciar sesión</p>
                    <button id="btnRegistrarse" onClick={putPanel}>Regístrarse</button>
                </div>
            </div>

                <div className='contenedorLogin'>
                <form onSubmit={(e) => onSubmitLogin(e)} action="" className={`formularioLogin ${clas ? "newLogin": ""}`}>
                <h2> Iniciar Sesion</h2>
                <input onChange={(e) => onChange(e)} name='name' type="email" placeholder='Correo Electronico' required />
                <input onChange={(e) => onChange(e)} name='email' type="password" placeholder='Contraseña' required/>
                <button onClick={send}> Entrar
                </button>
                </form>
                </div>
                <div className={`contenedorRegister ${clas ? "newContent": ""}`}>
                <form onSubmit={(e) => onSubmit(e)} action="" className={`formularioRegistro ${clas ? "newRegister": ""}`}>
                    <h2>Registrarse</h2>
                    <input onChange={(e) => onChange(e)} name='name' type="text" placeholder='Nombre Completo' />
                    <input onChange={(e) => onChange(e)} name='email' type="email" placeholder='Correo Electronico' required />
                    <input type="text" placeholder='Usuario' />
                    <input onChange={(e) => onChange(e)} name='password' type="password" placeholder='Contraseña' required />
                    <input type="password" placeholder='Repite la Contraseña' required />
                    <button>Registrarse</button>
                </form>
                </div>
            </div>
    </main>
    )
}
    