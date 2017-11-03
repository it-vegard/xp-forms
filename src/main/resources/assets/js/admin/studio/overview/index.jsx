import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch) {
  return {
    selectForm: id => () => dispatch({ type: 'SELECT_FORM', id }),
  };
}

const FormStudioOverview = props => (
  <button onClick={props.selectForm('id')}>
    Test
  </button>
);

FormStudioOverview.propTypes = {
  selectForm: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(FormStudioOverview);
