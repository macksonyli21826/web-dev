import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';

import './components/tuiter/ExploreScreen/explore.css'

import React from "react";

import HelloWorld from "./components/HelloWorld"; // no.js extension needed
import Labs from "./components/labs/index.js";
// import Tuiter from "./components/tuiter/index.js";
import HomeScreen from "./components/tuiter/HomeScreen/HomeScreen";
import ExploreScreen from "./components/tuiter/ExploreScreen/ExploreScreen";

import {BrowserRouter,
    Route,
    Routes} from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route path="/tuiter/home"
                         element={<HomeScreen/>}/>
                  <Route path="/"
                         element={<Labs/>}/>
                  <Route path="/tuiter/explore"
                         element={<ExploreScreen/>}/>
                  <Route path="/hello"
                         element={<HelloWorld/>}/>
              </Routes>
          </div>
      </BrowserRouter>

  );
}

export default App;
