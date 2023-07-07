import {STATUS_FILTER_CHANGED} from "./constants";

const statuses = {
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
      const newFilters = { ...state.filters, status: action.status };
      return { ...state, filters: newFilters };
    }
    default:
      return state;
  }
}
