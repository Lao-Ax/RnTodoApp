export const logger = (storeAPI) => (next) => (action) => {
  // console.log('dispatching', action);
  // console.log('current state', storeAPI.getState());
  const result = next(action);
  // console.log('next state', storeAPI.getState());
  return result;
};
