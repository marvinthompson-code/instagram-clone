import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncLogout } from "./features/User/userSlice";
import { logout } from "./util/firebaseFunctions";
import { recieveToken } from "./features/User/tokenSlice";
import "./css/Nav.css";

const Nav = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user);
  const displayButtons = () => {
    return (
      <>
        <a class="navbar-brand FakerGramHeaderNav" href="#">
          FakerGram
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <form class="form-inline mx-auto order-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <NavLink to={"/feed"} class="nav-link" href="#">
                Feed <span class="sr-only">(current)</span>
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink exact to={`/profile/`} className="nav-link" href="#">
                Profile
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link" exact to={`/notifications`} href="#">
                Notifications
              </NavLink>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Menu
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <NavLink class="dropdown-item" exact to={`/about`} href="#">
                  About
                </NavLink>
                <button className="dropdown-item" onClick={handleClick}>
                  Logout
                </button>
              </div>
            </li>
          </ul>
        </div>
      </>
    );

    //   return (
    //     <>
    //       <NavLink to={"/feed"} activeClassName={"nav-item"}>
    //         Feed
    //       </NavLink>
    //       <NavLink exact to={`/profile/${user.id}`} activeClassName={"nav-item"}>
    //         Profile
    //       </NavLink>
    //       <button onClick={handleClick} className={"nav-item"}>
    //         Log Out
    //       </button>
    //     </>
    //   );
    // } else {
    //   return (
    //     <>
    //       <NavLink to={"/signup"} activeClassName={"nav-item"}>
    //         Sign up
    //       </NavLink>
    //     </>
    //   );
    // }
  };
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(asyncLogout());
    dispatch(recieveToken(null));
    logout();
    history.push("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light nav">
      {displayButtons()}
    </nav>
  );
};

export default Nav;
