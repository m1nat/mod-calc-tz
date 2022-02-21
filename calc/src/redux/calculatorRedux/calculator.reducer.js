import { LOAD_ANS, LOAD_BUTTONS, LOAD_CLEAR, LOAD_BACKSPACE, LOAD_CLEARHISTORY, LOAD_CLEARITEM } from './calculator.actionsTypes';

export const CALCULATOR_KEY = 'calculatorStore';

let initialState = {
  number: '',
  ans: '',
  history: [],
  index: ''
};

export const calculatorReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case LOAD_BUTTONS:
      return {
        ...state,
        ...payload,
        number: state.number.concat(action.payload)
      }
    case LOAD_ANS:
      return {
        ...state,
        ...payload,
        ans: eval(state.number).toString(),
        history: state.history.concat([state.number])
      }
    case LOAD_CLEAR:
      return {
        ...state,
        ...payload,
        number: '',
        ans: ''
      }
    case LOAD_BACKSPACE:
      return {
        ...state,
        ...payload,
        number: state.ans.length ?
          (state.ans).substring(0, state.ans.length - 1) :
          (state.number).substring(0, state.number.length - 1),
        ans: state.ans.length ? (state.ans).substring(0, state.ans.length - 1) : ''
      }
    case LOAD_CLEARHISTORY:
      return {
        ...state,
        ...payload,
        history: []
      }
    case LOAD_CLEARITEM:
      return {
        ...state,
        ...payload,
        index: action.payload,
        history: state.history.filter(el => el !== state.index)
      }
    default: return state
  }
}