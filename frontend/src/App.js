import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import React, { useEffect } from "react";
import { updateUser } from "./features/User/userSlice";
import "./App.css";
import firebase from "./firebase";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

// componenets
import Home from '../src/features/Home/Home'
import SignUp from '../src/features/SignUp/SignUp'


import Nav from "./Nav";
import Footer from "./Footer";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      dispatch(updateUser(user));
    });

    return unsubscribe;
  }, []);
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>

        <Route exact path={"/signup"}>
          <SignUp />
        </Route>

        <Route exact path={"/about"}></Route>

        <Route exact path={"/feed"}></Route>

        <Route exact path={"/profile"}></Route>

      </Switch>
      <Footer />
    </div>
  );
}

export default App;
