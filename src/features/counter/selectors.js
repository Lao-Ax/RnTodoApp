import { NAME } from './constants';

export const counterValue = (state) => {
  console.log(`selector :: counterValue :: state = ${state[NAME].value}`);
  return state[NAME].value;
};
