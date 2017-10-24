import React from 'react';
import { connect } from 'react-redux';
import { submit } from 'redux-form';
import { push as navigateTo } from 'react-router-redux';
import PropTypes from 'prop-types';
import { deleteForm, duplicateForm, closeForm } from '../actions';
import { formAdminUrl } from '../util/EnonicHelper';
import Toolbar from '../common/Toolbar';

function mapDispatchToProps(dispatch) {
  return {
    submitForm: () => dispatch(submit('formeditor')),
    goToPreview: () => dispatch(navigateTo(formAdminUrl('/editor'))),
    closeAndReturnToFormStudio: () => dispatch(closeForm()),
    duplicateForm: () => dispatch(duplicateForm('id')),
    deleteForm: () => dispatch(deleteForm('id')),
  };
}

const FormEditorToolbar = props => (
  <Toolbar buttons={[
      { text: 'Submit', action: props.submitForm },
      { text: 'Delete...', action: props.deleteForm },
      { text: 'Duplicate', action: props.duplicateForm },
      { text: 'Preview', action: props.goToPreview },
      { text: 'Close', action: props.closeAndReturnToFormStudio },
    ]}
  />
);

FormEditorToolbar.propTypes = {
  closeAndReturnToFormStudio: PropTypes.func,
  goToPreview: PropTypes.func,
  submitForm: PropTypes.func,
  duplicateForm: PropTypes.func,
  deleteForm: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(FormEditorToolbar);
