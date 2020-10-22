import React from "react";
import Login from "../Login/Login";
import "../../css/Home.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">Some text</div>
        <div className="col">
          <Login />
          <br></br>
          <div className="jumbotron pitchJumbo">
            <small id="emailHelp" className="form-text text-muted">
              Not a member?
              <NavLink exact to={"/signup"}>
                Sign Up
              </NavLink>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
