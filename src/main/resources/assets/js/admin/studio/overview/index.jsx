import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FormsOverviewList from './FormsOverviewList';
import { selectForm, unSelectForm } from '../../actions';

function mapStateToProps(state) {
  return {
    forms: state.forms,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selectForm: id => dispatch(selectForm(id)),
    unSelectForm: id => dispatch(unSelectForm(id)),
  };
}

const FormStudioOverview = props => (
  <FormsOverviewList
    id="xpFormsOverviewListBox"
    label="Forms"
    list={props.forms}
    selectHandler={props.selectForm}
    unSelectHandler={props.unSelectForm}
    multiSelectable
  />
);

FormStudioOverview.propTypes = {
  selectForm: PropTypes.func,
  unSelectForm: PropTypes.func,
  forms: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    displayName: PropTypes.string,
  })),
};

export default connect(mapStateToProps, mapDispatchToProps)(FormStudioOverview);
