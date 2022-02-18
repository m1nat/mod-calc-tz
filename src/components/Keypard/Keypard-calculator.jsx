import React from "react";

import classes from './Keypard-calculator.module.scss';

const Keypard_calculator = ({putNumber, clearDisplay, backSpace, equal}) => {

  return (
    <div className={classes.wrapper__keypard}>
      <div className={classes.first_line}>
        <input onClick={() => backSpace()} type="button" value="C" />
        <input onClick={() => putNumber('7')} type="button" value="7" />
        <input onClick={() => putNumber('8')} type="button" value="8" />
        <input onClick={() => putNumber('9')} type="button" value="9" />
        <input onClick={() => putNumber('*')} type="button" value="*" />
      </div>
      <div className={classes.second_line}>
        <input onClick={() => putNumber('-')} type="button" value="-" />
        <input onClick={() => putNumber('4')} type="button" value="4" />
        <input onClick={() => putNumber('5')} type="button" value="5" />
        <input onClick={() => putNumber('6')} type="button" value="6" />
        <input onClick={() => putNumber('/')} type="button" value="/" />
      </div>
      <div className={classes.third_line}>
        <input onClick={() => putNumber('+')} type="button" value="+" />
        <input onClick={() => putNumber('1')} type="button" value="1" />
        <input onClick={() => putNumber('2')} type="button" value="2" />
        <input onClick={() => putNumber('3')} type="button" value="3" />
        <input onClick={() => equal()} type="button" value="=" />
      </div>
      <div className={classes.fourth_line}>
        <input onClick={() => putNumber('.')} type="button" value="." />
        <input onClick={() => putNumber('(')} type="button" value="(" />
        <input onClick={() => putNumber('0')} type="button" value="0" />
        <input onClick={() => putNumber(')')} type="button" value=")" />
        <input onClick={() => clearDisplay()} type="button" value="CE" />
      </div>
    </div>
  )
}

export default Keypard_calculator;