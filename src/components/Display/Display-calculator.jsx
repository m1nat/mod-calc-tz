import { useSelector } from "react-redux";

import { CALCULATOR_KEY } from "../../redux/calculatorRedux/calculator.reducer";

import classes from './Display-calculator.module.scss';

const Dispay_calcuator = () => {

  const viewCalculator = useSelector( state => {
    return state[ CALCULATOR_KEY ]
  })

  return(
    <div className={classes.wrapper}>
      {(viewCalculator.ans).length === 0 ? 
        viewCalculator.number : isNaN(viewCalculator.ans) ? 
          'error' : (Math.round((viewCalculator.ans)*1000)/1000)}
    </div>
  )
};

export default Dispay_calcuator;