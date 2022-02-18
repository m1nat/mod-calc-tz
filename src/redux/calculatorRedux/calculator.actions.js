import { LOAD_ANS, LOAD_BUTTONS, LOAD_CLEAR, LOAD_BACKSPACE, LOAD_CLEARHISTORY } from './calculator.actionsTypes';

export const loadButtons = (number) => {
  return {
    type: LOAD_BUTTONS,
    payload: number
  }
};

export const loadAns = (number) => {
  return {
    type: LOAD_ANS,
    payload: number
  }
};

export const loadClear = (number) => {
  return {
    type: LOAD_CLEAR,
    payload: number
  }
};

export const loadBackspace = (number) => {
  return {
    type: LOAD_BACKSPACE,
    payload: number
  }
};

export const loadClearHistory = (number) => {
  return {
    type: LOAD_CLEARHISTORY,
    payload: number
  }
};