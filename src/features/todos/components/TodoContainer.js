import { connect } from 'react-redux';
import { Counter } from './Counter';
import { bindActionCreators } from '@reduxjs/toolkit';
import { increment } from '../actions';
import { counterValue } from '../selectors';

function mapStateToProps(state) {
  return {
    value: counterValue(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onPress: bindActionCreators(increment, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
