import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Form } from 'redux-form';
import PropTypes from 'prop-types';
import { initForm, submitForm } from '../actions';
import TextInput from './fields/TextInput';
import { submitButton as defaultSubmitButton } from './defaultTexts';

function mapStateToProps(state, ownProps) {
  const xpForm = state.form ? state.form.xpForm : null;
  const previewForm = state.form && state.form.formeditor ?
    state.form.formeditor.values :
    null;
  return {
    form: previewForm || xpForm || ownProps.initialValues,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    initApp: (id) => {
      if (!ownProps.form) {
        dispatch(initForm(id));
      }
    },
  };
}

function formSubmitHandler(values, dispatch, props) {
  dispatch(submitForm(values, props.formId));
}

class XpForm extends React.Component {
  componentWillMount() {
    if (this.props.id) {
      this.props.initApp(this.props.id);
    }
  }

  render() {
    const { submitButton } = this.props.form;
    return (
      <Form
        onSubmit={this.props.handleSubmit(formSubmitHandler)}
      >
        { this.props.form.fields.map(field => (
          <TextInput key={field.xpInputId || field.id} id={field.id} label={field.label} />
        ))}
        <button type="submit">
          { submitButton || defaultSubmitButton }
        </button>
      </Form>
    );
  }
}

XpForm.propTypes = {
  handleSubmit: PropTypes.func,
  id: PropTypes.string,
  initApp: PropTypes.func,
  form: PropTypes.shape({
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

export default reduxForm({
  form: 'xpForm',
}, mapStateToProps, mapDispatchToProps)(connect(mapStateToProps)(XpForm));
