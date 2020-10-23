import React, { useState } from "react";
import { login } from "../../util/firebaseFunctions";
import { updateUser } from "../User/userSlice";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import "../../css/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await login(email, password);
      dispatch(updateUser(res.user));
      history.push("/feed");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className="jumbotron loginJumbo">
      <h1 className="display-4 FakerGramHeader">FakerGram</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group emailDiv">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control loginInput"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group passwordDiv">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control loginInput"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
