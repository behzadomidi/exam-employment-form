import React from "react";
import reactLogo from "../../assets/images/logo512.png";
import "./Logo.css";

function Logo(props) {
  return (
    <div className="logo" style={{ height: props.height }}>
      <img src={reactLogo} alt="reactLogo"></img>
    </div>
  );
}

export default Logo;
