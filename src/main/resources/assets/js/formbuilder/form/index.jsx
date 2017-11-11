import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { initForm, submitForm } from '../actions';
import XpForm from './XpForm';

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
  initialValues: PropTypes.shape({
    id: PropTypes.string,
    displayName: PropTypes.string,
    title: PropTypes.string,
    submitButton: PropTypes.string,
    successMessage: PropTypes.string,
    overrideSubmitMethod: PropTypes.string,
    overrideSubmitUrl: PropTypes.string,
    fields: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      id: PropTypes.string,
    })),
  }),
  submitHandler: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormWrapper);
