import './Contacto.css';
function Contacto() {
    return(
      <div className='cajaContacto'>
          <div className="cajaContacto2">
             <div className=''><h2 className="tituloPerfil">DATOS DE CONTACTO</h2>
                </div> 
             <div className='contactoItem'><i class="far fa-envelope"></i> elegonzalezv@gmail.com</div>
             <div className='contactoItem'><i class="fas fa-phone"></i> 3154784686</div>
             <div className='contactoItem'><i class="fas fa-map-marker-alt"></i> Bogotá D.C</div>

             <div className='titulo3'><h2 className="tituloPerfil">REDES PROFESIONALES</h2>
             </div> 

             <div className='cajabtnRedes'>
             <button className="btnRedes"><i class="fab fa-github"></i><a href="https://www.linkedin.com/in/elena-gonzalez-velasquez-6251a21b1/">-GITHUB</a> </button>
             <button className="btnRedes" ><i class="fab fa-linkedin-in"></i><a href="https://github.com/Elenapgo">-LinkedIn</a></button>  
             </div> 

             <div className='titulo3'><h2 className="tituloPerfil">REFERENCIAS</h2>
             </div>  

             <div>
                  <p>
                    <strong>Maria Camila Romero</strong><br></br>
                    Endocrinóloga <br></br>
                    Teléfono: 3004862988<br></br><br></br>

                    <strong>Nidia Ospino</strong><br></br>
                    Contadora <br></br>
                    Teléfono: 3006177360<br></br><br></br>

                    <strong>Gloria Serrano</strong><br></br>
                    Cirujana Maxilofacial <br></br>
                    Teléfono:  3105768373

                  </p>
             </div>

                
                  
       </div>
      </div>
      );
  }
  
  export default Contacto;