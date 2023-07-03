import React from 'react';

import MenuItemStyles from "./MenuItem.module.scss"

const MenuItem = ({ color, text }) => {
  return (
    <li style={{backgroundColor: color}} className={MenuItemStyles.item}>
      {text}
    </li>
  );
};

export default MenuItem;