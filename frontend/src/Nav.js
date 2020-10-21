import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncLogout } from "./features/User/userSlice";
import { logout } from "./util/firebaseFunctions";
import { recieveToken } from "./features/User/tokenSlice";

const Nav = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user);
  const displayButtons = () => {
    if (user) {
      return (
        <>
          <NavLink to={"/feed"} activeClassName={"navItem"}>
            Feed
          </NavLink>
          <NavLink exact to={`/profile/${user.id}`} activeClassName={"navItem"}>
            Profile
          </NavLink>
          <button onClick={handleClick} className={"navItem"}>
            Log Out
          </button>
        </>
      );
    } else {
      return (
        <>
          <NavLink to={"/login"} activeClassName={"navItem"}>
            Log In
          </NavLink>
          <NavLink to={"/signup"} activeClassName={"navItem"}>
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

  return <nav className="nav">{displayButtons()}</nav>;
};

export default Nav;
