import React from "react";
import { NavLink } from "react-router-dom";

import classes from './Calculator-header.module.scss';

const Calculator_header = () => {
  return (
    <div className={classes.calc_header}>
      <div className={classes.logo}>
        Calculator App
      </div>
      <div className={classes.nav}>
        <NavLink to='/'>
          Home
        </NavLink>
        <NavLink to='/settings'>
          settings
        </NavLink>
      </div>
    </div>
  )
}

export default Calculator_header;