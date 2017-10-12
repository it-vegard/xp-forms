import React from 'react';
import { connect } from 'react-redux';
import { submit } from 'redux-form';
import PropTypes from 'prop-types';
import { assetUrl } from '../util/EnonicHelper';

let SubmitFormButton = ({ dispatch }) => (
  <button
    id="xpFormEditorSaveButton"
    className="xpFormEditorControls__button"
    onClick={() => dispatch(submit('formeditor'))}
  >
    Save draft
  </button>
);

SubmitFormButton.propTypes = {
  dispatch: PropTypes.func,
};

SubmitFormButton = connect()(SubmitFormButton);

const FormEditorToolbar = () => (
  <div className="xpFormEditorToolbar">
    <img src={assetUrl('img/icons/adminFavicon.png')} className="xpFormLogo" alt="" />
    <ul className="xpFormEditorControls">
      <li className="xpFormEditorControls__item">
        <SubmitFormButton />
      </li>
      <li className="xpFormEditorControls__item">
        <button
          id="xpFormEditorDeleteButton"
          className="xpFormEditorControls__button"
        >
          Delete...
        </button>
      </li>
      <li className="xpFormEditorControls__item">
        <button
          id="xpFormEditorDuplicateButton"
          className="xpFormEditorControls__button"
        >
          Duplicate
        </button>
      </li>
      <li className="xpFormEditorControls__item">
        <button
          id="xpFormEditorPreviewButton"
          className="xpFormEditorControls__button"
        >
          Preview
        </button>
      </li>
    </ul>
  </div>
);

export default FormEditorToolbar;
