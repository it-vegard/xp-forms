import React from 'react';
import { reduxForm, Form } from 'redux-form';
import PropTypes from 'prop-types';
import TextInput from './fields/TextInput';
import LoadingWidget from '../../common/LoadingWidget';
import formPropType from '../../models/form';

/* function hasCompleteInputField(fields) {
  return fields.filter(field => (field.xpInputId || field.id) && field.label).length > 0;
} */

const XpForm = (props) => {
  if (!props.initialValues) {
    return (
      <LoadingWidget />
    );
  }

  const { fields, submitButton } = props.initialValues;

  if (fields.length === 0) {
    return (
      <p>Add an input field to initialize form.</p>
    );
  }
  return (
    <Form
      onSubmit={props.handleSubmit}
    >
      { fields.map(field =>
        <TextInput key={field.xpInputId || field.id} id={field.id} label={field.label} />)}
      { submitButton && <button type="submit">{ submitButton }</button> }
    </Form>
  );
};

XpForm.propTypes = {
  handleSubmit: PropTypes.func,
  initialValues: PropTypes.shape(formPropType),
};

export default reduxForm()(XpForm);
