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
  /* formSubmitHandler: PropTypes.func, */
  /* initialValues: PropTypes.shape({
    type: PropTypes.string,
    config: PropTypes.shape({
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
  }), */
};

FormEditorForm = connect(mapStateToProps)(FormEditorForm);

export default reduxForm({
  form: 'formeditor',
}, mapStateToProps)(FormEditorForm);
