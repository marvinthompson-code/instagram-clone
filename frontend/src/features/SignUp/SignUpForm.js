import React from "react";
import "../../css/SignupForm.css";

const SignUpForm = () => {
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
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary submitButton">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
