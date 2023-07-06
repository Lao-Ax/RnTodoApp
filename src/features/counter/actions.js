export const INCREMENTED = 'counter/incremented';
export const DECREMENTED = 'counter/decremented';
export const SET_COUNTER = 'counter/set';

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
