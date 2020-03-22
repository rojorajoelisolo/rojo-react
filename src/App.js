import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import GroupRockDetail from "./components/GroupRockDetail/GroupRockDetail";
import Accueil from "./components/Accueil";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={GroupRockDetail}></Route>
        <Route path="/accueil" component={Accueil}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
