import React from "react";
import { NavLink } from "react-router-dom";
import "../../css/Login.css";

const Login = () => {
  return (
    <div className="jumbotron loginJumbo">
      <h1 className="display-4 FakerGramHeader">FakerGram</h1>
      <form>
        <div className="form-group emailDiv">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control loginInput"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group passwordDiv">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control loginInput"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div className="buttonDiv">
          <button type="submit" className="btn btn-primary submitButton">
            Submit
          </button>
          <hr class="my-4"></hr>
          <button type="submit" className="btn btn-primary submitButton">
            Guest Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
