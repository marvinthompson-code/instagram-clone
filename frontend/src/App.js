import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import React from 'react';
import './App.css';
import firebase from './firebase'
import { useSelector, useDispatch } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import Nav from './Nav'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
        
      </Switch>
    </div>
  );
}

export default App;
