import { connect } from 'react-redux';
import Todo from './Todo';
import { selectTodoById } from '../selectors';

function mapStateToProps(state, ownProp) {
  return {
    todo: selectTodoById(state, ownProp.todoId),
  };
}

export default connect(mapStateToProps, null)(Todo);
