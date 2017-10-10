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

class FormEditor extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (!this.props.form  && !this.props.formId && nextProps.formId) {
      this.props.onLoad(nextProps.formId);
    }
  }

  render() {

    if (this.props.isLoading === true || !this.props.form) {
      return (
        <p>Loading...</p>
      )
    } else {
      return (
        <section id="xpFormsEditor">
          <FormEditorForm formId={this.props.formId} initialValues={this.props.form}>
            <FormHeader/>
            <FormConfiguration/>
            <button type="submit" className="formButton">Submit</button>
          </FormEditorForm>
        </section>
      )
    }
  }

}

FormEditor.propTypes = {
  formId: PropTypes.string,
  form: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(FormEditor);