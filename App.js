import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Identify from "./components/Identify.jsx";
import User from "./components/user"
import Menu from "./components/menu"
import Breakfast from "./components/breakfast";
import Burgir from "./components/burgir";
import Extras from "./components/extras";
import React, { useState } from "react";
import data from './components/data/menu.json'

const App = () => {
  const [mesero, setMesero] = useState('');
  const [mesa, setMesa] = useState('');

  return (
    <Router>
      <Switch>
          <Route path = '/' exact={true}> <Identify/> </Route>
          <Route path = "/user"> <User
              setMesero={setMesero}
          /> </Route>
          <Route path = "/menu"> <Menu
          mesero={mesero}
          setMesa={setMesa}
          mesa={mesa}
          /> </Route>
          <Route path = "/breakfast"> <Breakfast
          dataBreakfast = {(data.breakfast)}
          mesero={mesero}
          mesa={mesa}
          /> </Route>
          <Route path = "/burgir"> <Burgir
          dataBurgir = {(data.burgir)}
          dataTypeBurgir = {(data.typeBurgir)}
          dataAdd = {(data.add)}
          mesero={mesero}
          mesa={mesa}
          /> </Route>
          <Route path = "/extras"> <Extras
          dataExtras = {(data.extras)}
          dataDrinks = {(data.drinks)}
          mesero={mesero}
          mesa={mesa}
          /> </Route>
      </Switch>
    </Router>
  );
}

export default App;
