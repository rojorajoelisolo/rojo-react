import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Username from "./components/Username";
import ListeHobbies from "./components/ListeHobbies";
import Photos from "./components/Photos";
import { BrowserRouter, Route, Link } from "react-router-dom";
import TestMaterialUI from "./components/TestMaterialUI";
import GroupeRock from "./components/GroupeRock";
import GroupRockDetail from "./components/GroupRockDetail/GroupRockDetail";
import Accueil from "./components/Accueil";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Accueil}></Route>
        <Route path="/ui" component={TestMaterialUI}></Route>
        <Route path="/photos/:id" component={Photos}></Route>
        <Route path="/rockers" component={GroupRockDetail}></Route>
        <Route path="/rock" component={GroupeRock} />
      </BrowserRouter>
    </div>
  );
}

export default App;
