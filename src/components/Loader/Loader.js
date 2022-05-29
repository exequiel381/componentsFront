import React from "react";
import "./Loader.css";

function Loader(props) {
  return (
    <>
      <div className="center-items">
        <div className="loader"></div>
      </div>
      <div className="center-items">
        <div className="textLoader">
          {props.text ? props.text : "...Loading"}
        </div>
      </div>
    </>
  );
}

export default Loader;
