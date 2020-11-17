import React from "react";
import { NavLink } from "react-router-dom";
import "../../css/Signup.css";

// components
import SignUpForm from "./SignUpForm";

const SignUp = () => {
  return (
    <div className={"container signupContainer"}>
      <div className="innerContainer">
        <SignUpForm />
        <br></br>
        <div className="jumbotron pitchJumbo">
          <small id="emailHelp" className="form-text text-muted nam">
            Already have an account? <span></span>
            <NavLink exact to={"/"}>
              Log In
            </NavLink>
          </small>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
