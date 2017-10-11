import React from 'react';
import PropTypes from 'prop-types';
import { textToName } from '../../util/StringUtil';

const EditorFieldset = props => (
  <fieldset className="xpFormEditorFieldset" id={textToName(props.legend)}>
    <legend>
      <span className="drag-handle">:::</span>
      {props.legend}
    </legend>
    {props.children}
  </fieldset>
);

EditorFieldset.propTypes = {
  legend: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default EditorFieldset;
