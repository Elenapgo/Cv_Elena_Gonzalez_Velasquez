import './InfoAcademica.css';
function InfoAcademica() {
    return(
      <div className='Academica'>
          <div className="cajaAcademica">
                <div className=''><h2 className="tituloPerfil">INFORMACIÓN ACADEMICA</h2>
                </div> 
                <div className='cajaparrafo'>
                      <p><strong><i class="fas fa-user-graduate"></i> Técnica en Procesamiento y Digitación de datos con Enfoque
                        en Desarrollo front End</strong><br></br>
                        Bogotá D.C, En curso, fecha de Finzalización Julio 2021.<br></br><br></br>

                        <strong><i class="fas fa-user-graduate"></i> Profesional en Negocios Internacionales</strong><br></br>
                        Universidad del Tolima, Finzalizado. <br></br><br></br>
                        <strong><i class="fas fa-user-graduate"></i> Diplomado en Habilidades Gerenciales</strong> <br></br>
                        Universidad del Tolima, Finalizado <br></br><br></br>
                        
                        <strong><i class="fas fa-user-graduate"></i> Idioma Extranjero</strong><br></br>
                        Inglés, 7 niveles, Certificación Bulats B2
                      </p>     
                </div> 

                <div className='habilidad'><h2 className="tituloPerfil">HABILIDADES</h2>
                </div>
                
                <div className="cajahabilidades">
                
                    <label for="file">Gestión del tiempo:</label>
                    <progress id="file" max="100" value="95"></progress>
                    <label for="file">Habilidades de comunicación:</label>
                    <progress id="file" max="100" value="90"></progress>
                    <label for="file">Productividad Personal:</label>
                    <progress id="file" max="100" value="90"></progress>
                    <label for="file">Dominio del Inglés:</label>
                    <progress id="file" max="100" value="90"></progress>
              </div>
                  
       </div>
    </div>
      );
  }
  
  export default InfoAcademica;