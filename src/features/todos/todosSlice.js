
import { v4 as randomUuid } from 'uuid';
import {TODO_ADDED, TODO_STATUS_CHANGED} from "./constants";

const initialState = [
  { id: 0, text: 'Learn React', completed: true },
  { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
  { id: 2, text: 'Build something fun!', completed: false, color: 'blue' },
];

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case TODO_ADDED: {
      const todoText = action.todoText;
      const newTodo = { id: randomUuid(), text: todoText, completed: false };
      return { ...state, newTodo };
    }
    case TODO_STATUS_CHANGED: {
      return state.map((todo) => {
        if (todo.id !== action.id) {
          return todo;
        }
        let newStatus = action.status ?? !todo.completed;

        return { ...todo, completed: newStatus };
      });
    }
    default:
      return state;
  }
}
