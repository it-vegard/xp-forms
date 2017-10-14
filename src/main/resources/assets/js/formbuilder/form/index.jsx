import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Form, Field } from 'redux-form';
import PropTypes from 'prop-types';
import { initForm, submitForm } from '../actions';

function mapStateToProps(state) {
  return { form: state.editor };
}

function mapDispatchToProps(dispatch) {
  return {
    initApp: (id) => {
      dispatch(initForm(id));
    },
  };
}

function formSubmitHandler(values, dispatch, props) {
  dispatch(submitForm(values, props.formId));
}

let XpForm = props => (
  <Form
    onSubmit={props.handleSubmit(formSubmitHandler)}
  >
    <Field component="input" name="title" />
    <button type="submit">Submit</button>
  </Form>
);

XpForm.propTypes = {
  handleSubmit: PropTypes.func,
};


XpForm = connect(mapStateToProps)(XpForm);

export default reduxForm({
  form: 'xpForm',
}, mapStateToProps, mapDispatchToProps)(XpForm);
