import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import AppBar from '../common/AppBar';
import FormEditorForm from './FormEditorForm';
import FormEditorToolbar from './FormEditorToolbar';
import FormHeader from './FormHeader';
import FormConfiguration from './FormConfiguration';
import FormPreview from './preview/FormPreview';
import { loadForm } from '../actions';

function mapStateToProps(state, ownProps) {
  return {
    formId: ownProps.match.params.id ? ownProps.match.params.id : null,
    form: state.app.editor.form,
    isLoading: state.app.editor.isLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLoad: id => dispatch(loadForm(id)),
  };
}

class FormEditor extends React.Component {
  componentWillMount() {
    if (this.props.formId) {
      this.props.onLoad(this.props.formId);
    }
  }

  render() {
    if (this.props.isLoading === true || !this.props.form) {
      return (
        <p>Loading...</p>
      );
    }
    return (
      <section id="xpFormsEditor">
        <AppBar heading="Form Editor" />
        <FormEditorToolbar />
        <FormEditorForm formId={this.props.formId} initialValues={this.props.form}>
          <FormHeader />
          <FormConfiguration />
        </FormEditorForm>
        <FormPreview formId={this.props.formId} />
      </section>
    );
  }
}

FormEditor.propTypes = {
  formId: PropTypes.string,
  form: PropTypes.shape({
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
  }),
  isLoading: PropTypes.bool,
  onLoad: PropTypes.func,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FormEditor));
