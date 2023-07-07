import { DECREMENTED, INCREMENTED, SET_COUNTER } from './constants';

export const increment = () => ({
  type: INCREMENTED,
});

export const decrement = () => ({
  type: DECREMENTED,
});

export const setCounter = (value) => ({
  type: SET_COUNTER,
  value,
});
