import { DECREMENTED, INCREMENTED } from './actions';

const initialState = {
  value: 0,
};

// Create a "reducer" function that determines what the new state
// should be when something happens in the app
export function counterReducer(state = initialState, action) {
  // Reducers usually look at the type of action that happened
  // to decide how to update the state
  switch (action.type) {
    case INCREMENTED:
      console.log('Button was pressed');
      console.debug(`reducer :: state = ${state.value}`);
      return { ...state, value: state.value + 1 };
    case DECREMENTED:
      return { ...state, value: state.value - 1 };
    default:
      // If the reducer doesn't care about this action type,
      // return the existing state unchanged
      return state;
  }
}
