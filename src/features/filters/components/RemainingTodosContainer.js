import { selectUncompletedTodosLength } from '../../todos/selectors';
import { connect } from 'react-redux';
import RemainingTodos from './RemainingTodos';

const mapStateToProps = (state) => {
  return {
    count: selectUncompletedTodosLength(state),
  };
};

export default connect(mapStateToProps, null)(RemainingTodos);
