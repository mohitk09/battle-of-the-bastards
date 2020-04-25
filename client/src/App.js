import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar"
import BattlesList from "./components/battles-list";
// import EditExercise from "./components/edit-exercise.component";
// import CreateExercise from "./components/create-exercise.component";
// import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={BattlesList} />
      <Route path="/edit/:id" />
      <Route path="/create"  />
      <Route path="/user"  />
      </div>
    </Router>
  );
}

export default App;