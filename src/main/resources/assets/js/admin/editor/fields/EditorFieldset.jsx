import React from 'react';
import PropTypes from 'prop-types';
import { textToName } from '../../util/StringUtil';

class EditorFieldset extends React.Component {

  render() {
    return (
      <fieldset className="xpFormEditorFieldset" id={textToName(this.props.legend)}>
        <legend className="xpFormEditorConfigurationHeading">{this.props.legend}</legend>
        {this.props.children}
      </fieldset>
    )
  }

}

EditorFieldset.propTypes = {
  legend: PropTypes.string,
  children: PropTypes.node
};

export default EditorFieldset;