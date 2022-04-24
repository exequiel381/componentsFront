import React from "react";
import { Link } from "react-router-dom";
import { rootPath } from "../../App";

const SDDSBreadCrumb = (props) => {
  return (
    <div className="sdds-breadcrumb">
      {props.routes?.map((route, index) => {
        return (
          <div key={index} className="sdds-breadcrumb-item">
            <Link to={rootPath + route.path}>{route.title}</Link>
          </div>
        );
      })}
      <div className="sdds-breadcrumb-item sdds-breadcrumb-item-current">
        <a aria-current="page">{props.currentRoute}</a>
      </div>
    </div>
  );
};

export default SDDSBreadCrumb;
