import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { apiURL } from "../../util/apiURL";
import { signUp } from "../../util/firebaseFunctions";
import "../../css/SignupForm.css";

const SignUpForm = () => {
  // states
  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [profile_picture, setProfilePicture] = useState("");

  // image states
  const [imageAsFile, setImageAsFile] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  // variables
  const API = apiURL();
  const history = useHistory();
  const dispatch = useDispatch();

  // image Upload

  // handle firebase upload

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await signUp(email, password);
      // axios post request to users table
      // pass in information as an object
    } catch (error) {}
  };

  const handleImageAsFile = () => {};

  return (
    <div className="jumbotron signupJumbo">
      <h1 className="display-4 FakerGramHeader">FakerGram</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group emailDiv">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Full Name"
            value={full_name}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group emailDiv">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group passwordDiv">
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group emailDiv">
          <input
            type="file"
            className="form-control uploadProfilePicture"
            onChange={handleImageAsFile}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Select Profile Picture"
          />
        </div>

        <div className="form-group emailDiv">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Enter a Bio..."
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            required
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
