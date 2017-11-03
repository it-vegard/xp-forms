import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FormsOverviewList from './FormsOverviewList';

function mapStateToProps(state) {
  return {
    forms: state.forms || [],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selectForm: id => () => dispatch({ type: 'SELECT_FORM', id }),
  };
}

const FormStudioOverview = props => (
  <FormsOverviewList
    id="xpFormsOverviewListBox"
    label="Forms"
    list={props.forms}
    clickHandler={props.selectForm}
    multiSelectable
  />
);

FormStudioOverview.propTypes = {
  selectForm: PropTypes.func,
  forms: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    displayName: PropTypes.string,
  })),
};

export default connect(mapStateToProps, mapDispatchToProps)(FormStudioOverview);
