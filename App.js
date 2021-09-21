import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Identify from "./components/Identify.jsx";
import User from "./components/user"
import Menu from "./components/menu"

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path = "/" component = {Identify}/> 
          <Route exact path = "/user" component = {User}/>   
          <Route exact path = "/menu" component = {Menu} /> 
      </Switch>
    </Router>
  );
}

export default App;
