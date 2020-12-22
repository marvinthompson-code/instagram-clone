import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { apiURL } from "../../util/apiURL";
import { signUp } from "../../util/firebaseFunctions";

import "../../css/SignupForm.css";

const SignUpForm = () => {
  // states

  // variables
  const API = apiURL();
  const history = useHistory();
  const dispatch = useDispatch();

  // image Upload

  // handle firebase upload

  // handle submit

  
  return (
    <div className="jumbotron signupJumbo">
      <h1 className="display-4 FakerGramHeader">FakerGram</h1>
      <form>
        <div className="form-group emailDiv">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group emailDiv">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group passwordDiv">
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div className="form-group emailDiv">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group emailDiv">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Enter a Bio..."
          ></textarea>
        </div>
        <div className="buttonDiv">
          <button type="submit" className="btn btn-primary submitButton">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
