import React from 'react';
import PropTypes from 'prop-types';
import { textToName } from '../../util/StringUtil';

class EditorFieldset extends React.Component {

  render() {
    return (
      <fieldset className="xpFormEditorFieldset" id={textToName(this.props.legend)}>
        <legend>
          <span className="drag-handle">:::</span>
          {this.props.legend}
        </legend>
        {this.props.children}
      </fieldset>
    )
  }

}

EditorFieldset.propTypes = {
  legend: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default EditorFieldset;