import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import FormClass from './formclass';
import Home from './home';

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/"><Home/></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;