export const selectTodos = (state) => state.todos;

export const selectCompletedTodos = (state) => {
  return state.todos.filter((todo) => todo.completed);
};
