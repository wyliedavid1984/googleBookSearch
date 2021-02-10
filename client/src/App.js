import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css";
import Search from "./pages/Search";
import SavedBooks from "./pages/SavedBooks";
import Navbar from "./components/Navbar"

const App= () =>  {
  
    return (
      <Router>
        <section className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/savedBooks" component={SavedBooks} />
            {/* <Route component={NotFound} /> */}
          </Switch>
        </section>
      </Router>
    );
  
}

export default App;
