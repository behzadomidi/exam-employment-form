import React, { useState } from "react";
import Logo from "../../../components/logo/Logo";
import Button from "../../../components/UI/button/button";
import Modal from "../../../components/UI/modal/Modal";
import MenuItems from "../MenuItems/MenuItems";
import "./Toolbar.css";
import SingIn from "../../../components/user/signIn/SignIn";
import SideDrawer from "../SideDrawer/SideDrawer";

function Toolbar(props) {
  const [showModal, setShowModal] = useState(false);
  const [openSideDrawer, setOpenSideDrawer] = useState(false);

  const modalHandler = () => {
    setShowModal(true);
  };

  const modalClosed = () => {
    setShowModal(false);
  };

  const closeDrawer = () => {
    setOpenSideDrawer(false);
  };

  return (
    <header className="Toolbar">
      <SideDrawer show={openSideDrawer} closeDrawer={closeDrawer} />

      <span className="showNav">
        <Logo height="80%" />
      </span>
      <span className="showNav">
        <nav>
          <MenuItems />
        </nav>
      </span>
      <span className="showNav">
        <Button btnType="primary" clicked={modalHandler}>
          ورود / ثبت نام
        </Button>
      </span>
      {showModal ? (
        <Modal show={showModal} modalClosed={modalClosed}>
          <SingIn />
        </Modal>
      ) : null}
    </header>
  );
}

export default Toolbar;
