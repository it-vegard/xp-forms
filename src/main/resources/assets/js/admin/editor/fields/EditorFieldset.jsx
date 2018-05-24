import React from 'react';
import PropTypes from 'prop-types';
import { textToName } from '../../util/StringUtil';

const EditorFieldset = props => (
  <fieldset className="xpFormEditorFieldset" id={textToName(props.id)}>
    <legend>
      <span className="drag-handle" aria-hidden="true">:::</span>
      {props.legend}
    </legend>
    <button
      type="button"
      className="xpFormEditorDeleteFieldButton"
      aria-label="Delete input"
      onClick={props.deleteInputHandler}
    >
      &times;
    </button>
    {props.children}
  </fieldset>
);

EditorFieldset.propTypes = {
  id: PropTypes.string.isRequired,
  legend: PropTypes.string.isRequired,
  deleteInputHandler: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default EditorFieldset;
