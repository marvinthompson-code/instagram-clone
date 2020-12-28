import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import React, { useEffect } from "react";
import { updateUser } from "./features/User/userSlice";
import "./App.css";
import firebase from "./firebase";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import AuthProvider from "./providers/AuthContext";

// componenets
import Home from "../src/features/Home/Home";
import SignUp from "../src/features/SignUp/SignUp";
import Feed from "../src/features/Feed/Feed";
import Profile from "../src/features/Profile/Profile";
import About from "../src/features/About/About";
import Nav from "./Nav";
import Footer from "./Footer";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      dispatch(updateUser(user));
    });

    // important
    // feed is a protected route!
    // profile is a protected route
    // login is an auth route
    // signup is an auth route
    // about is a regular route

    return unsubscribe;
  }, []);
  return (
    <div className="App">
      <AuthProvider>
        <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>

          <Route exact path={"/signup"}>
            <SignUp />
          </Route>

          <Route exact path={"/about"}>
            <Nav />
            <About />
          </Route>

          <Route exact path={"/feed"}>
            <Nav />
            <Feed />
          </Route>

          <Route exact path={"/profile/:id"}>
            <Nav />
            <Profile />
          </Route>
        </Switch>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
