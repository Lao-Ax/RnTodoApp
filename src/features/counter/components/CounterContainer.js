import { connect } from 'react-redux';
import { Counter } from './Counter';
import { bindActionCreators } from '@reduxjs/toolkit';
import { decremented, incremented } from '../reducer';
import { counterValue } from '../selectors';

function mapStateToProps(state) {
  return {
    value: counterValue(state),
  };
}

// This one added, because bindActionCreators passes an argument to the action creator, which is not serializable (for persist)
const increment = () => incremented();
const decrement = () => decremented();

function mapDispatchToProps(dispatch) {
  return {
    onIncPress: bindActionCreators(increment, dispatch),
    onDecPress: bindActionCreators(decrement, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
