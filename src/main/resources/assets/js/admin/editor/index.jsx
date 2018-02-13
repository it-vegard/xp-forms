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
import LoadingWidget from '../../common/LoadingWidget';
import { initializeFormsAdmin, loadForm } from '../actions';
import formPropType from '../../models/form';

function mapStateToProps(state, ownProps) {
  return {
    formId: ownProps.match.params.id ? ownProps.match.params.id : null,
    form: state.app.editor.form,
    previewForm: state.form.formeditor ? state.form.formeditor.values : null,
    isLoading: state.app.editor.isLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLoad: (id) => {
      dispatch(loadForm(id));
      dispatch(initializeFormsAdmin());
    },
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
        <LoadingWidget />
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
        <FormPreview formId={this.props.formId} initialValues={this.props.previewForm} />
      </section>
    );
  }
}

FormEditor.propTypes = {
  formId: PropTypes.string,
  form: PropTypes.shape({
    type: PropTypes.string,
    config: PropTypes.shape(formPropType),
  }),
  previewForm: PropTypes.shape(formPropType),
  isLoading: PropTypes.bool,
  onLoad: PropTypes.func,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FormEditor));
