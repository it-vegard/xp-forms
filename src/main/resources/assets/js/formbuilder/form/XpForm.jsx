import React from 'react';
import { reduxForm, Form } from 'redux-form';
import PropTypes from 'prop-types';
import TextInput from './fields/TextInput';

const XpForm = props => (
  <Form
    onSubmit={props.handleSubmit}
  >
    { props.initialValues.fields.map(field =>
      <TextInput key={field.xpInputId || field.id} id={field.id} label={field.label} />)}
    <button type="submit">{ props.initialValues.submitButton }</button>
  </Form>
);

XpForm.propTypes = {
  handleSubmit: PropTypes.func,
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
};

export default reduxForm()(XpForm);
