import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { initForm, submitForm } from '../actions';
import XpForm from './XpForm';
import formPropType from '../../models/form';

function mapStateToProps(state, ownProps) {
  const formResult = state.forms.find(form => form.id === ownProps.formId);
  return {
    initialValues: formResult ? formResult.config : undefined,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    initApp: id => dispatch(initForm(id)),
    submitHandler: values => dispatch(submitForm(values, ownProps.formId)),
  };
}

class FormWrapper extends React.Component {
  componentWillMount() {
    if (!this.props.initialValues && this.props.formId) {
      this.props.initApp(this.props.formId);
    }
  }

  render() {
    if (!this.props.initialValues) {
      return (
        <p>Loading...</p>
      );
    }
    return (
      <XpForm
        form={this.props.formId}
        initialValues={this.props.initialValues}
        handleSubmit={this.props.submitHandler}
      />
    );
  }
}

FormWrapper.propTypes = {
  formId: PropTypes.string,
  initApp: PropTypes.func,
  initialValues: PropTypes.shape(formPropType),
  submitHandler: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormWrapper);
