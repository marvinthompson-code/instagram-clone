import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import React, { useEffect } from "react";
import { updateUser } from "./features/User/userSlice";
import "./App.css";
import firebase from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from './util/routesUtil'

// components
import Home from "../src/features/Home/Home";
import SignUp from "../src/features/SignUp/SignUp";
import Feed from "../src/features/Feed/Feed";
import Profile from "../src/features/Profile/Profile";
import About from "../src/features/About/About";
import Nav from "./Nav";
import Footer from "./Footer";
import { selectLoading } from "./features/Loading/loadingSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      dispatch(updateUser(user));
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const loading = useSelector(selectLoading)
  if (loading) return <h1>...LOADING...</h1>

  return (
    <div className="App">
        <Switch>
          <AuthRoute exact path={"/"}>
            <Home />
          </AuthRoute>

          <AuthRoute exact path={"/signup"}>
            <SignUp />
          </AuthRoute>

          <Route exact path={"/about"}>
            <Nav />
            <About />
          </Route>

          <ProtectedRoute exact path={"/feed"}>
            <Nav />
            <Feed />
          </ProtectedRoute>

          <ProtectedRoute exact path={"/profile/:id"}>
            <Nav />
            <Profile />
          </ProtectedRoute>
        </Switch>
        <Footer />
    </div>
  );
}

export default App;
