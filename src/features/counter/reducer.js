import { createSlice } from '@reduxjs/toolkit';
import { NAME } from './constants';
export { NAME } from './constants';

const initialState = {
  value: 0,
};

// Create a "reducer" function that determines what the new state
// should be when something happens in the app. Written in 'old' way.
// export function counterReducer(state = initialState, action) {
//   // Reducers usually look at the type of action that happened
//   // to decide how to update the state
//   switch (action.type) {
//     case INCREMENTED:
//       console.log('Button was pressed');
//       console.debug(`reducer :: state = ${state.value}`);
//       return { ...state, value: state.value + 1 };
//     case DECREMENTED:
//       return { ...state, value: state.value - 1 };
//     default:
//       // If the reducer doesn't care about this action type,
//       // return the existing state unchanged
//       return state;
//   }
// }

const counterSlice = createSlice({
  name: NAME,
  initialState,
  reducers: {
    incremented: (state) => {
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    },
  },
});

export const { incremented, decremented } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
