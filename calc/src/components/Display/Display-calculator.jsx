import  PropTypes  from "prop-types";

import classes from './Display-calculator.module.scss';

const Dispay_calcuator = ({showRes}) => {

  let ans = showRes();

  return(
    <div className={classes.wrapper}>
      {ans}
    </div>
  )
};

export default Dispay_calcuator;