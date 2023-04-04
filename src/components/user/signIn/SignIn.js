import React from "react";
import "./SignIn.css";

function signIn() {
  return (
    <div className="signIn">
      <label htmlFor="">نام و نام خانوادگی</label>
      <input type="text"></input>
      <label htmlFor="">ایمیل</label>
      <input type="email"></input>
    </div>
  );
}

export default signIn;
