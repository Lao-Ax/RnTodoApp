import {
  TODO_ADDED,
  TODO_DELETED,
  TODO_STATUS_CHANGED,
  TODOS_LOADED,
  TODOS_LOADING,
} from './constants';
import todo from './components/Todo';

export const fetchStatuses = {
  IDLE: 'idle',
  LOADING: 'in progress',
  SUCCEEDED: 'succeeded',
  FAILED: 'failed',
};

const initialState = {
  entities: {
    0: { id: '0', text: 'Learn React', completed: true },
    1: { id: '1', text: 'Learn Redux', completed: false, color: 'purple' },
    2: {
      id: '2',
      text: 'Build something fun!',
      completed: false,
      color: 'blue',
    },
  },
  fetchStatus: fetchStatuses.IDLE,
};

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case TODO_ADDED: {
      return {
        ...state,
        entities: { ...state.entities, [action.todo.id]: action.todo },
        fetchStatus: fetchStatuses.IDLE,
      };
    }
    case TODO_STATUS_CHANGED: {
      const { id, status } = action;
      if (state.entities[id].completed === status) {
        return state;
      }
      const updatedTodo = { ...state.entities[id] };
      updatedTodo.completed = status ?? !updatedTodo.completed;
      return { ...state, entities: { ...state.entities, [id]: updatedTodo } };
    }
    case TODO_DELETED: {
      const { id: idToDelete } = action;
      const newEntities = { ...state.entities };
      delete newEntities[idToDelete];
      return { ...state, entities: newEntities };
    }
    case TODOS_LOADED: {
      if (state.entities.length < 3) {
        return {
          ...state,
          fetchStatus: fetchStatuses.IDLE,
          entities: { ...state.entities, ...action.todos },
        };
      } else {
        return { ...state, fetchStatus: fetchStatuses.SUCCEEDED };
      }
    }
    case TODOS_LOADING: {
      return { ...state, fetchStatus: fetchStatuses.LOADING };
    }
    default:
      return state;
  }
}
