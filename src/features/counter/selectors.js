export const counterValue = (state) => {
  console.log(`selector :: counterValue :: state = ${state.counter.value}`);
  return state.counter.value;
};
