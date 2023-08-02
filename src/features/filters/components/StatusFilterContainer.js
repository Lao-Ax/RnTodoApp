import { selectFilters } from '../selectors';
import { statusFilterChanged } from '../actions';
import { connect } from 'react-redux';
import StatusFilter from './StatusFilter';

const mapStateToProps = (state) => {
  return {
    value: selectFilters(state).status,
  };
};

const mapDispatchToProps = {
  onChange: statusFilterChanged,
};

export default connect(mapStateToProps, mapDispatchToProps)(StatusFilter);
