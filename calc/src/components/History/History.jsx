import React from "react";
import { useSelector } from "react-redux";
import { CALCULATOR_KEY } from "../../redux/calculatorRedux/calculator.reducer";
import { useDispatch } from "react-redux";

import classes from './History.module.scss';
import { loadClearHistory, loadClearItem } from "../../redux/calculatorRedux/calculator.actions";

const History_Calc = () => {

  const dispatch = useDispatch();

  const viewCalculator = useSelector(state => {
    return state[CALCULATOR_KEY]
  })

  return (
    <div className={classes.wrapper_history}>
      <h2>History
        <span onClick={() => dispatch(loadClearHistory())} style={{ marginLeft: '50px', color: 'red', cursor: 'pointer' }}>x</span>
      </h2>
      {(viewCalculator.history).map((el, i) => <p onClick={() => dispatch(loadClearItem(el))} key={i}>{el}</p>)}  
      {/* it only works on a double click. =\ */}
    </div>
  )
}

export default History_Calc;