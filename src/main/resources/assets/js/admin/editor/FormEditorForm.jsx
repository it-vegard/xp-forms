import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Form } from 'redux-form';
import { submitForm } from "../actions";

function mapStateToProps(state) {
  return { form: state.editor }
}

class FormEditorForm extends React.Component {

  render() {
    const formSubmitHandler = (values, dispatch, props) => {
      dispatch(submitForm(values, props.formId));
    };
    return (
      <Form onSubmit={this.props.handleSubmit(formSubmitHandler)}>
        {this.props.children}
      </Form>
    )
  }

}

FormEditorForm.propTypes = {
  formId: PropTypes.string,
  formSubmitHandler: PropTypes.func,
  initialValues: PropTypes.object
};

FormEditorForm = connect(mapStateToProps)(FormEditorForm);

export default reduxForm({
  form: 'formeditor'
}, mapStateToProps)(FormEditorForm);