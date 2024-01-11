import React from 'react';
import { useState } from 'react';
import './App.css';
import imagenFrijol from './FRIJOL.jpg';
import imagenSavila from './Savila.jpg';
import imagenGranadilla from './Granadilla.jpeg';
import logotipo from './LogoFinca.jpg';
import facebookLogo from './facebook.png';
import instagramLogo from './instagram.jpg';
import linkedinLogo from './linkedin.png';



function App(){
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  const reiniciarPagina = () => {
    window.location.reload();
  };

  return(
    <>
   <div className='content'>
    <div className="Nav">
      <div className='logotipo'>
        <img src={logotipo} alt='logo empresa' onClick={reiniciarPagina}></img>
      </div>
      <div id="titulos" className='titulos'>
      <ul>
    <li><a href="#Productos">Productos</a></li>
    <li><a href="#Proyectos">Proyectos</a></li>
    <li><a href="#Contacto">Contacto</a></li>
      </ul>
        </div>

           
      
      {isMobileNavOpen &&(
      <div className='mobileNav'>
      <ul>
            <li> <a href="#Productos">Productos</a></li>
            <li>  <a href="#Proyectos">Proyectos</a></li>
            <li>  <a href="#Contacto">Contacto</a></li>
        </ul>
      </div>
      )}
       <div className='hamburguer' onClick={toggleMobileNav} >
            <span> &#9776;</span>
            </div>
        
           

   </div>
       

  
      <div className='titulo'>
        <h1>TRIUNFO <br></br>
          FARMS</h1>


  </div>

      <div id="Productos" className='productos'>\

              <div className='textoProducto'>
              <h2> PRODUCTOS </h2> 
            
               <p>Asi como en un principio ahora y siempre</p>
              
              </div>
              
                    <div className='botonProducto' >
                        <button> <img src={imagenFrijol} alt='saco de frijol'  ></img> 
            
                                                            Frijol</button>
                        <button>
                        <img src={imagenSavila} alt='Penca de savila' ></img>
                          Aloe vera 
                        </button>
                        <button> <img src={imagenGranadilla} alt='Fruta granadilla'  ></img>
                          Granadilla </button>
                                            
                       
                         
                         
                        
                    </div>           
      </div>
            <div id="Proyectos" className='proyectos'>
              <div className='textoProyectos'>
                <h2>PROYECTOS</h2>
              </div>


           <div className="row">
                <div className="column">
                  
                    <h4>Automatización</h4>
                    <p>
                    Somos lideres en el mejoramiento continuo de nuestros procesos, cada vez son mas los procesos que llevamos a cabo de manera automatica.
              
                    </p>
                </div>
                <div className="column">
      
                    <h4>Fertirriego</h4>

                    <p>
                      El modelo de agricultura de precisión nos permite el mejoramiento de nuestros procesos reduciendo los recursos necesarios para la operacion y a su vez reduciendo nuestro impacto ambiental
                    </p>
                </div>
                 </div>


              </div>

              <div id="Contacto"className='contacto'>


                    <h3>Contacto</h3>
                    <p>Puedes contactarnos también llamando al +57 3103346463</p>

                  <form action="https://formspree.io/f/{form_id}" method="post">
                    <label htmlFor="email">Tu Correo </label>
                    <input name="Email" id="email" type="email" />
                    <br></br>
                    <label htmlFor="mensaje">Tu mensaje</label>
                    <br></br>
                    <textarea id="mensaje" name="mensaje" rows="4" cols="50"></textarea>
                    
                    <button type="submit">Enviar</button>
                    
                    <br />
                    <br />
                    
                    <input type="checkbox" className="square" id="copyMessage" />
                        <label htmlFor="copyMessage">Enviarme una copia del mensaje</label>
                      </form>




              </div>

              <div className='socialMedia'>
              
                <a href="https://www.instagram.com/alejojo_/" target="_blank">
                <img height="80" wide="80" id="Instagram" src={instagramLogo} alt='logo'>
                </img> </a>
                <a href="https://www.linkedin.com/in/diego-alejandro-bautista-dimate-b20918134/" target="_blank">
                <img height="80" wide="80" id="linkedin" src={linkedinLogo} alt='logo'>
                </img></a>
                <a  href="https://www.facebook.com/alejandro.bautista.39566/" target="_blank">
                <img height="80" wide="80" id="facebook" src={facebookLogo} alt='logo'>
               </img> </a>

              </div>
     </div>
    
    </>
  ) 
}
export default App;
