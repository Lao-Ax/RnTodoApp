import { v4 as randomUuid } from 'uuid';
import {
  TODO_ADDED,
  TODO_DELETED,
  TODO_STATUS_CHANGED,
  TODOS_LOADED,
} from './constants';

const initialState = [
  { id: '0', text: 'Learn React', completed: true },
  { id: '1', text: 'Learn Redux', completed: false, color: 'purple' },
  { id: '2', text: 'Build something fun!', completed: false, color: 'blue' },
];

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case TODO_ADDED: {
      return [...state, action.todo];
    }
    case TODO_STATUS_CHANGED: {
      const { id, status } = action;
      return state.map((todo) => {
        if (todo.id !== id || todo.completed === status) {
          return todo;
        }
        let newStatus = status ?? !todo.completed;
        return { ...todo, completed: newStatus };
      });
    }
    case TODO_DELETED: {
      const { id: idToDelete } = action;
      return state.filter((todo) => todo.id !== idToDelete);
    }
    case TODOS_LOADED: {
      if (state.length < 3) {
        return [...state, ...action.todos];
      } else {
        return state;
      }
    }
    default:
      return state;
  }
}
