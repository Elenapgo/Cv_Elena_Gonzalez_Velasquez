
import './App.css';
import BarraNavegacionCv from './Components/BarraNavegacionCv/BarraNavegacionCv';
import DatosProfesionales from './Components/DatosProfesionales/DatosProfesionales';
import InfoAcademica from './Components/InfoAcademica/InfoAcademica';
import Contacto from './Components/Contacto/Contacto';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} 
from "react-router-dom";
function App() {
  return (
  <div>
    <Router>
      <section id="informacion">
     <BarraNavegacionCv />
       <Switch>
          
          <Route exact path="/DatosProfesionales">
           <DatosProfesionales />
          </Route>
          
          <Route path="/DatosAcademicos">
            <InfoAcademica />
          </Route>
          
          <Route path="/Contacto">
           <Contacto /> 
          </Route>
           
          <Route exact path="/" render={()=>(<Redirect to="/DatosProfesionales"/>)}>

          </Route>
        </Switch>
       </section>
    </Router>

    </div>
  );
}

export default App;
