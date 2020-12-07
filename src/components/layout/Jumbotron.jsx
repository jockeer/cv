import React,{useEffect,useState} from 'react'

import Foto from '../../assets/user.png'
import Facebook from '../../assets/facebook.png'
import Linkedin from '../../assets/linkedin.png'
import Instagram from '../../assets/instagram.png'
import Github from '../../assets/github.png'

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
            }, 200);
        }
        writeName('DANIEL GUILLERMO GORIANZ FERRUFINO');
    }, [])


    return ( 
        <div className="Jumbotron">
            <div className="container">
                <nav>
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
                        <a href="https://www.facebook.com/danielgorianz10/" target="_blank">
                            <img src={Facebook} alt=""/>
                        </a>
                        <a href="https://www.instagram.com/dan_gorianz/" target="_blank">
                            <img src={Instagram} alt=""/>
                        </a>
                        <a href="https://www.linkedin.com/in/daniel-gorianz-ferrufino-296511184/" target="_blank">
                            <img src={Linkedin} alt=""/>
                        </a>
                        <a href="https://github.com/jockeer" target="_blank">
                            <img src={Github} alt=""/>
                        </a>
                        

                    </figure>
                </div>
            </div>
        </div>
        
     );
}
 
export default Jumbotron;