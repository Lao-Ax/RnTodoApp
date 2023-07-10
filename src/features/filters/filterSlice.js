import { STATUS_FILTER_CHANGED } from './constants';

export const statuses = {
  ACTIVE: 'active',
  ALL: 'all',
  COMPLETED: 'completed',
};

const initialState = {
  status: statuses.ACTIVE,
  colors: ['red', 'blue'],
};

export function filterReducer(state = initialState, action) {
  switch (action.type) {
    case STATUS_FILTER_CHANGED: {
      return { ...state, status: action.status };
    }
    default:
      return state;
  }
}
