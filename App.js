import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Identify from "./components/Identify.jsx";
import User from "./components/User";
import Menu from "./components/Menu";
import React, { useState } from "react";

const App = () => {
  let [mesero, setMesero] = useState("");
  let [mesa, setMesa] = useState("");

  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <Identify />
        </Route>
        <Route path="/user">
          <User setMesero={setMesero}/>
        </Route>
        <Route path="/menu">
          <Menu mesero={mesero} setMesa={setMesa} mesa={mesa}/>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
