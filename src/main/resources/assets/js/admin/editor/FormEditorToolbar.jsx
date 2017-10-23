import React from 'react';
import { connect } from 'react-redux';
import { submit } from 'redux-form';
import { push as navigateTo } from 'react-router-redux';
import PropTypes from 'prop-types';
import { deleteForm, duplicateForm } from '../actions';
import { formAdminUrl } from '../util/EnonicHelper';

function mapDispatchToProps(dispatch) {
  return {
    submitForm: () => dispatch(submit('formeditor')),
    goToPreview: () => dispatch(navigateTo(formAdminUrl('/editor'))),
    closeAndReturnToFormStudio: () => dispatch(navigateTo(formAdminUrl('/'))),
    duplicateForm: () => dispatch(duplicateForm('id')),
    deleteForm: () => dispatch(deleteForm('id')),
  };
}

function clickIfEnterOrSpaceClicked(event, callback) {
  if (event.key === 'Enter' || event.key === 'Space') {
    callback();
  }
}

const FormEditorToolbar = props => (
  <div className="xpFormEditorToolbar">
    <ul className="xpFormEditorControls">
      <li className="xpFormEditorControls__item">
        <button
          id="xpFormEditorSaveButton"
          className="xpFormEditorControls__button"
          onClick={props.submitForm}
          onKeyPress={event => clickIfEnterOrSpaceClicked(event, props.submitForm)}
        >
          Submit
        </button>
      </li>
      <li className="xpFormEditorControls__item">
        <button
          id="xpFormEditorDeleteButton"
          className="xpFormEditorControls__button"
          onClick={props.deleteForm}
          onKeyPress={event => clickIfEnterOrSpaceClicked(event, props.submitForm)}
        >
          Delete...
        </button>
      </li>
      <li className="xpFormEditorControls__item">
        <button
          id="xpFormEditorDuplicateButton"
          className="xpFormEditorControls__button"
          onClick={props.duplicateForm}
          onKeyPress={event => clickIfEnterOrSpaceClicked(event, props.duplicateForm)}
        >
          Duplicate
        </button>
      </li>
      <li className="xpFormEditorControls__item">
        <button
          id="xpFormEditorPreviewButton"
          className="xpFormEditorControls__button"
          onClick={props.goToPreview}
          onKeyPress={event => clickIfEnterOrSpaceClicked(event, props.goToPreview)}
        >
          Preview
        </button>
      </li>
      <li className="xpFormEditorControls__item">
        <button
          id="xpFormEditorCloseButton"
          className="xpFormEditorControls__button"
          onClick={props.closeAndReturnToFormStudio}
          onKeyPress={event => clickIfEnterOrSpaceClicked(event, props.closeAndReturnToFormStudio)}
        >
          Close
        </button>
      </li>
    </ul>
  </div>
);

FormEditorToolbar.propTypes = {
  closeAndReturnToFormStudio: PropTypes.func,
  goToPreview: PropTypes.func,
  submitForm: PropTypes.func,
  duplicateForm: PropTypes.func,
  deleteForm: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(FormEditorToolbar);
