import React from "react";
import { NavLink } from "react-router-dom"
import Nav from "../../Nav";
const Login = () => {
  return (
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" class="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
      <small id="emailHelp" class="form-text text-muted">
          Not a member?
        </small>
        <NavLink exact to={"/signup"}>
            Sign Up
        </NavLink>
    </form>
  );
};

export default Login
