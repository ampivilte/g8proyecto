
import {Route, Switch} from 'react-router-dom';
import Home from "./Screens/Home"

function App() {
  return (
   <>
     
      <Switch>
        <Route path="/"  exact={true} component={Home}/>

      </Switch>
      
    </>
  );
}

export default App;
