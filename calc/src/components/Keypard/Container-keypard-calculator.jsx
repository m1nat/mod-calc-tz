import { useDispatch } from "react-redux";
import { loadAns, loadBackspace, loadButtons, loadClear } from "../../redux/calculatorRedux/calculator.actions";
import Keypard_calculator from "./Keypard-calculator";

const Container_keypard = () => {

  const dispatch = useDispatch();

  const putNumber = (value) => {
    dispatch(loadButtons(value))
  };

  const clearDisplay = () => {
    dispatch(loadClear())
  };

  const backSpace = () => {
    dispatch(loadBackspace())
  };

  const equal = () => {
    dispatch(loadAns())
  };

  return (<Keypard_calculator putNumber={putNumber} clearDisplay={clearDisplay} backSpace={backSpace} equal={equal} />)
};

export default Container_keypard;