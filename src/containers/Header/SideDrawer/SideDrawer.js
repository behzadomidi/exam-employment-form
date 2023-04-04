import React from "react";
import Logo from "../../../components/logo/Logo";
import Backdrop from "../../../components/UI/backdrop/Backdrop";
import Button from "../../../components/UI/button/button";
import MenuItems from "../MenuItems/MenuItems";
import "./SideDrawer.css";

function SideDrawer(props) {
  let classes = ["SideDrawer", "Close"];
  if (props.show) {
    classes = ["SideDrawer", "Open"];
  }

  return (
    <>
      <Backdrop show={props.show} modalClosed={props.closeDrawer} />
      <div className={classes.join(" ")}>
        <Logo height="10%" />
        <nav>
          <MenuItems />
        </nav>
        <div className="boxButton">
          <Button btnType="primary">ورود و ثبت نام</Button>
        </div>
      </div>
    </>
  );
}

export default SideDrawer;
