import React from "react";

import MenuStyles from "./Menu.module.scss";

import MenuItem from "../MenuItem/MenuItem";

const Menu = () => {
  // Menu items data
  const menuItems = [
    {
      text: "FONDAMENTAUX",
      color: "#3300CC",
    },
    {
      text: "OOH",
      color: "#FF6600",
    },
    {
      text: "DOOH",
      color: "#7364FD",
    },
    {
      text: "EVENT",
      color: "#FB3CEE",
    },
    {
      text: "MATRICE",
      color: "#44E5FA",
    },
  ];

  return (
    <nav>
      <ul>
        {menuItems.map((item) => (
          <MenuItem text={item.text} color={item.color} />
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
