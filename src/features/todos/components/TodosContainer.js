import { connect } from 'react-redux';
import { TodoList } from './TodoList';

function mapStateToProps(state, ownProp) {
  return {
    todos: state.todos,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
