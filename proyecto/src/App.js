
import {Route, Switch} from 'react-router-dom';
import Home from "./Screens/Home"
import ScreenDetalle from './Screens/ScreenDetalle/Screendetalle';
import ScreenVerTodasTopRating from './Screens/VerTodasTopRated/VerTodasTopRated';
import Header from './Components/Header/Header';
import Favoritos from './Screens/Favoritos/Favoritos';
import Footer from './Components/Footer/Footer';
import ScreenVerTodasUpcoming from './Screens/VerTodasUpcoming/VerTodasUpcoming';
import NotFound from './Components/NotFound/NotFound';
function App() {
  return (
   <>
      <Header/>
     
      <Switch>
        <Route path="/"  exact={true} component={Home}/>
        <Route path="/detalle/pelicula/:id" component={ScreenDetalle}/>
        <Route path="/VerTodasTopRating" component={ScreenVerTodasTopRating}/>
        <Route path='/favoritos' component={Favoritos}/>
        <Route path="/VerTodasUpcoming" component={ScreenVerTodasUpcoming}/>
<Route path="*" component={NotFound}/>

      </Switch>

      <Footer/>
      
    </>
  );
}

export default App;
