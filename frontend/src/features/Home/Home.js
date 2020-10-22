import React from "react";
import Login from "../Login/Login";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">Some text</div>
        <div className="col">
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Home;
