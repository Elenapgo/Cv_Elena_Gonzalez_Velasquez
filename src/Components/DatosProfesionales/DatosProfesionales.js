import './DatosProfesionales.css';



function DatosProfesionales() {
    return(
      <div className='contact'>
         <div className="cajaderecha">
            
             <div>
                <div><h2 className="tituloPerfil">PERFIL PROFESIONAL</h2></div> 
                  <p>
                  Técnica en Desarrollo Front End y profesional en Negocios Internacionales 
                  pongo en práctica todas mis habilidades para ofrecer soluciones innovadoras 
                  en los proyectos, apoyándome en los conocimientos adquiridos en HTML, Css, 
                  JavaScript, React y diseño UX-UI logrando proyectos con código bien estructurado, 
                  legible, simple con usabilidad y accesibilidad teniendo en cuenta las necesidades
                  del usuario final. 
                  </p>
              </div>

              <div className="cajaCompetencias">
                <div className="tituloPerfil"><h2>COMPETENCIAS CLAVE</h2></div> 
                    <label for="file">CSS:</label>
                    <progress id="file" max="100" value="90"></progress>
                    <label for="file">JavaScript:</label>
                    <progress id="file" max="100" value="80"></progress>
                    <label for="file">React:</label>
                    <progress id="file" max="100" value="80"></progress>
                    <label for="file">Diseño UX-UI:</label>
                    <progress id="file" max="100" value="80"></progress>
              </div>

              <div>
                <div><h2 className="tituloPerfil">EXPERIENCIA LABORAL</h2></div> 
                 <p>
                 <strong>AGENTE DE SERVICIO AL CLIENTE AMAZON</strong> <br></br> 
                 Las tareas consistían en prestar servicio al cliente a los compradores 
                 de Amazon, indicar el estado de sus compras y revisar el proceso logístico
                 en el que se encontraban. <br></br><br></br>
                 <strong>TRIPULANTE DE CABINA DE PASAJEROS BOGOTÁ</strong> <br></br>
                 Las tareas consistían en vigilar la seguridad del vuelo y los pasajeros, 
                 esto incluía servicio al cliente directo.<br></br><br></br>
                 <strong>INSTRUCTOR FORMACIÓN PARA EL TRABAJO SENA  TOLIMA</strong> <br></br>
                 Las tareas consistían en la formación presencial y virtual de aprendices 
                 del SENA en segundo idioma inglés brindarles las herramientas para que 
                 estos desarrollaran sus habilidades en esta lengua.
                 </p>
              </div>

         </div>
      </div>
      );
  }
  
  export default DatosProfesionales;