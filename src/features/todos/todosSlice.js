import { v4 as randomUuid } from 'uuid';
import {
  TODO_ADDED,
  TODO_DELETED,
  TODO_STATUS_CHANGED,
  TODOS_LOADED,
  TODOS_LOADING,
} from './constants';

const fetchStatuses = {
  IDLE: 'idle',
  LOADING: 'in progress',
  SUCCEEDED: 'succeeded',
  FAILED: 'failed',
};

const initialState = {
  entities: [
    { id: '0', text: 'Learn React', completed: true },
    { id: '1', text: 'Learn Redux', completed: false, color: 'purple' },
    { id: '2', text: 'Build something fun!', completed: false, color: 'blue' },
  ],
  fetchStatus: fetchStatuses.IDLE,
};

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case TODO_ADDED: {
      return { ...state, entities: [...state.entities, action.todo] };
    }
    case TODO_STATUS_CHANGED: {
      const { id, status } = action;
      const newEntities = state.entities.map((todo) => {
        if (todo.id !== id || todo.completed === status) {
          return todo;
        }
        let newStatus = status ?? !todo.completed;
        return { ...todo, completed: newStatus };
      });
      return { ...state, entities: newEntities };
    }
    case TODO_DELETED: {
      const { id: idToDelete } = action;
      const newEntities = state.entities.filter(
        (todo) => todo.id !== idToDelete,
      );
      return { ...state, entities: newEntities };
    }
    case TODOS_LOADED: {
      if (state.entities.length < 3) {
        return {
          ...state,
          fetchStatus: fetchStatuses.IDLE,
          entities: [...state.entities, ...action.todos],
        };
      } else {
        return state;
      }
    }
    case TODOS_LOADING: {
      return { ...state, fetchStatus: fetchStatuses.LOADING };
    }
    default:
      return state;
  }
}
