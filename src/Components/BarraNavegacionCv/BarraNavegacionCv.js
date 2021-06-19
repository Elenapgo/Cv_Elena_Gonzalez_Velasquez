import './BarraNavegacionCv.css';
import fotoPerfil from '../../Assets/img/fotoPerfil.jpg'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
  }
  from "react-router-dom";

function BarraNavegacionCv() {
    return(
      <div className="navegacion">
          <div className='fotoPerfil'>
          <img src={fotoPerfil} />
          </div>
          <div className="cajaperfil">
               <h2 >ELENA  PATRICIA</h2>
               <h2>GONZALEZ VELASQUEZ</h2>
               <h3>Tecnica en Desarollo Front End</h3>
          

              <div className="cajaBtn">
                  <button className="btn" ><NavLink to="/DatosProfesionales"activeClassName='active'>DATOS PROFESIONALES</NavLink></button>
                  <button className="btn"><NavLink to="/DatosAcademicos"activeClassName='active'>DATOS ACADEMICOS</NavLink></button>
                  <button className="btn"><NavLink to="/Contacto"activeClassName='active'>CONTACTO</NavLink></button>  
              </div>
          </div>
      </div>
      );
  }
  
  export default BarraNavegacionCv;