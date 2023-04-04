import React from "react";
import "./MenuItems.css";
import MenuItem from "./MenuItem/MenuItem";

function MenuItems() {
  return (
    <ul className="MenuItems">
      <MenuItem link="/" active>
        صفحه اصلی
      </MenuItem>
      <MenuItem link="/">مشاهده کارجویان</MenuItem>
    </ul>
  );
}

export default MenuItems;
