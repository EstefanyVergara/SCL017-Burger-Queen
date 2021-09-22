import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Identify from "./components/Identify.jsx";
import User from "./components/user"
import Menu from "./components/menu"
import { Breakfast } from "./components/breakfast";
import { Burgir } from "./components/burgir";
import { Extras } from "./components/extras";

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path = "/" component = {Identify}/> 
          <Route exact path = "/user" component = {User}/>   
          <Route exact path = "/menu" component = {Menu} /> 
          <Route exact path = "/breakfast" component = {Breakfast} /> 
          <Route exact path = "/burgir" component = {Burgir} /> 
          <Route exact path = "/extras" component = {Extras} /> 
      </Switch>
    </Router>
  );
}

export default App;
