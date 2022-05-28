import React from "react";
import "./Loader.css";

function Loader() {
  return (
    <>
      <div className="center-items">
        <div className="loader"></div>
      </div>
      <div className="center-items">
        <div className="textLoader">...Loading</div>
      </div>
    </>
  );
}

export default Loader;
