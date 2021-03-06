import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar"
import BattlesList from "./components/battles-list";
import countBattles from "./components/count-battles";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={BattlesList} />
      <Route path="/count" component = {countBattles}/>
      </div>
    </Router>
  );
}

export default App;