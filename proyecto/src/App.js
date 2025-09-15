
import {Route, Switch} from 'react-router-dom';
import Home from "./Screens/Home"
import ScreenDetalle from './Screens/ScreenDetalle/Screendetalle';
import ScreenVerTodasTopRating from './Screens/VerTodasTopRated/VerTodasTopRated';

function App() {
  return (
   <>
     
      <Switch>
        <Route path="/"  exact={true} component={Home}/>
        <Route path="/detalle/pelicula/:id" component={ScreenDetalle}/>
        <Route path="/VerTodasTopRating" component={ScreenVerTodasTopRating}/>
      

      </Switch>
      
    </>
  );
}

export default App;
