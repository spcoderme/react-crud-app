import React from "react";
import Navbar from "./components/layouts/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import CreateTeam from "./components/pages/CreateTeam";
import EditTeam from "./components/pages/EditTeam";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        
        <Switch>
        <Route exact path="/create" component={CreateTeam} />
        <Route exact path="/edit/:id" component={EditTeam} />
          <Route exact path="/about" component={About} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
