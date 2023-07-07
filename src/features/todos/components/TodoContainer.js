import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { Todo } from './Todo';
import { todoStatusChanged } from '../actions';

function mapStateToProps(state, ownProp) {
  return {
    todo: ownProp.todo,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onCompletedChange: bindActionCreators(
      () => todoStatusChanged(ownProps.todo.id),
      dispatch,
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
