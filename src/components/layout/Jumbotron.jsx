import React,{useEffect,useState} from 'react'

import Foto from '../../assets/user.png'
import Facebook from '../../assets/facebook.png'
import Linkedin from '../../assets/linkedin.png'
import Instagram from '../../assets/instagram.png'
import Github from '../../assets/github.png'
import Whatsapp from '../../assets/whatsapp.png'

import '../../cssResponsive/jumbotron.css'

import {FaBars} from 'react-icons/fa'

const Jumbotron = () => {

    const [nombre, setnombre] = useState('');
    const [escribiendo, setescribiendo] = useState(true);

    useEffect(() => {
        const writeName = name => {
            let arrName = name.split('');
            let palabra = ''
            let i = 0;
            let nuevoNombre = setInterval(() => {
                palabra+=arrName[i];
                setnombre(palabra)
                i++;
                if (i === arrName.length) {
                    clearInterval(nuevoNombre)
                    setescribiendo(false);
                }
            }, 100);
        }
        writeName('DANIEL GUILLERMO GORIANZ FERRUFINO');
    }, [])

    const mostrarMenu = () => {
        document.querySelector('#nav').classList.toggle('active')
    }
    
    return ( 
        <div className="Jumbotron">
            <div className="container">
                <button onClick={mostrarMenu}><FaBars/></button>
                <nav id="nav">
                    <ul>
                        <li>Personal</li>
                        <li>Estudio</li>
                        <li>Aptitudes</li>
                        <li>Cursos</li>
                        <li>Referencias</li>
                    </ul>
                </nav>
                <div className="profile">
                    <figure className="container-photo">
                        <img width="20%" src={Foto} alt=""/>
                    </figure>
                    <h1>{nombre} {escribiendo ? <span>|</span> :null}</h1>
                    <figure className="container-redes">
                        <a href="https://www.facebook.com/danielgorianz10/" target="_blank" rel="noreferrer">
                            <img src={Facebook} alt=""/>
                        </a>
                        <a href="https://www.instagram.com/dan_gorianz/" target="_blank" rel="noreferrer">
                            <img src={Instagram} alt=""/>
                        </a>
                        <a href="https://www.linkedin.com/in/daniel-gorianz-ferrufino-296511184/" target="_blank" rel="noreferrer">
                            <img src={Linkedin} alt=""/>
                        </a>
                        <a href="https://github.com/jockeer" target="_blank" rel="noreferrer">
                            <img src={Github} alt=""/>
                        </a>
                        <a class="wap-web" data-action="open" data-phone="59176597228" data-message="" rel="noreferrer" href="https://web.whatsapp.com/send?phone=59176597228&amp;text=¡Hola Danie! Quisiera saber acerca de ti." target="_blank">
                            <img src={Whatsapp} alt=""/>
                        </a>
                        <a class="wap-mobile" data-action="open" data-phone="59176597228" data-message="" rel="noreferrer" href="https://api.whatsapp.com/send?phone=59176597228&amp;text=¡Hola Danie! Quisiera saber acerca de ti." target="_blank">
                            <img src={Whatsapp} alt=""/>
                        </a>
                        
                        

                    </figure>
                </div>
            </div>
        </div>
        
     );
}
 
export default Jumbotron;