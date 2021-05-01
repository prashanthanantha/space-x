import React from 'react';
import { Header } from './Components/Header/Header.jsx';
import { LaunchesList } from './Components/Launches/Launches.jsx';
import  LaunchView  from './Components/LaunchView/LaunchView.jsx';
import './styles.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Switch>
      <Route path="/LaunchView/:flight_number">
            <LaunchView />
          </Route>
      <Route path="/">
            <LaunchesList />
          </Route>

          </Switch>

      
    </div>
    </Router>
  );
}

export default App;
