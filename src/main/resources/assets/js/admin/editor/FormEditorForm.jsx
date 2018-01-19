import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Form } from 'redux-form';
import { submitForm } from '../actions';

function mapStateToProps(state) {
  return { form: state.editor };
}

const formSubmitHandler = (values, dispatch, props) => {
  dispatch(submitForm(values, props.formId));
};

let FormEditorForm = props => (
  <Form
    className="xpFormEditorForm"
    onSubmit={props.handleSubmit(formSubmitHandler)}
  >
    {props.children}
  </Form>
);

FormEditorForm.propTypes = {
  handleSubmit: PropTypes.func,
  children: PropTypes.arrayOf(PropTypes.object),
};

FormEditorForm = connect(mapStateToProps)(FormEditorForm);

export default reduxForm({
  form: 'formeditor',
}, mapStateToProps)(FormEditorForm);
