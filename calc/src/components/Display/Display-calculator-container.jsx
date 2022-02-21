import { useSelector } from "react-redux";
import { CALCULATOR_KEY } from "../../redux/calculatorRedux/calculator.reducer";
import Dispay_calcuator from "./Display-calculator";

const Dispay_calcuator_container = () => {

  const viewCalculator = useSelector(state => {
    return state[CALCULATOR_KEY]
  });

  const showRes = () => {
    return (viewCalculator.ans).length === 0 ?
      viewCalculator.number : isNaN(viewCalculator.ans) ?
        'error' : (Math.round((viewCalculator.ans) * 1000) / 1000)
  }

  return <Dispay_calcuator showRes={ showRes } />
};

export default Dispay_calcuator_container;