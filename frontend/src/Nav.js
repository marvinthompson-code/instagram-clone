import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncLogout } from "./features/User/userSlice";
import { logout } from "./util/firebaseFunctions";
import { recieveToken } from "./features/User/tokenSlice";
import "./css/Nav.css"

const Nav = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user);
  const displayButtons = () => {
    if (user) {
      return (
        <>
          <NavLink to={"/feed"} activeClassName={"nav-item"}>
            Feed
          </NavLink>
          <NavLink exact to={`/profile/${user.id}`} activeClassName={"nav-item"}>
            Profile
          </NavLink>
          <button onClick={handleClick} className={"nav-item"}>
            Log Out
          </button>
        </>
      );
    } else {
      return (
        <>
          <NavLink to={"/signup"} activeClassName={"nav-item"}>
            Sign up
          </NavLink>
        </>
      );
    }
  };
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(asyncLogout());
    dispatch(recieveToken(null));
    logout();
    history.push("/login");
  };

  return <nav className="nav">
      <div className="container">

      {displayButtons()}
      </div>
      </nav>;
};

export default Nav;
