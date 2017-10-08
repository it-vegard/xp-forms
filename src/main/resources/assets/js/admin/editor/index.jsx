import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormEditorForm from './FormEditorForm';
import FormHeader from "./FormHeader";
import FormConfiguration from './FormConfiguration';
import FormEditorCss from '../../../scss/admin/editor/form-editor.scss';
import { loadForm } from "../actions";

function mapStateToProps(state) {
  return {
    formId: state.forms[0] ? state.forms[0].id : null,
    form: state.app.editor.form,
    isLoading: state.app.editor.isLoading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onLoad: (id) => {
      dispatch(loadForm(id))
    }
  };
}

let FormEditor = (props) => {

  if (props.isLoading === true) {
    return (
      <p>Loading...</p>
    )
  } else if (!props.form  && props.formId) {
    props.onLoad(props.formId);
    return (
      <p>Loading...</p>
    )
  } else {
    return (
      <section id="xpFormsEditor">
        <FormEditorForm initialValues={props.form}>
          <FormHeader/>
          <FormConfiguration/>
        </FormEditorForm>
      </section>
    )
  }

};

FormEditor.propTypes = {
  formId: PropTypes.string,
  form: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(FormEditor);