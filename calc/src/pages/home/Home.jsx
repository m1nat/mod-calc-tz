import Dispay_calcuator_container from '../../components/Display/Display-calculator-container';
import History_Calc from '../../components/History/History';
import Container_keypard from '../../components/Keypard/Container-keypard-calculator';
import classes from './Home.module.scss';

const Control_panel = () => {
  return (
    <div className={classes.wrapper_calc}>
      <div className={classes.display_keypard}>
        <Dispay_calcuator_container />
        <Container_keypard />
      </div>
      <div className={classes.history}>
        <History_Calc />
      </div>
    </div>
  )
};

export default Control_panel;