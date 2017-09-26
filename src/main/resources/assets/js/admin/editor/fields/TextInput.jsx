import React from 'react';
import PropTypes from 'prop-types';
import { textToName, concatClassNames } from '../../util/StringUtil';

class TextInput extends React.Component {

  render() {
    const className = concatClassNames(
      'xpFormInput xpFormTextInput',
      (!this.props.label ? 'noLabel' : null),
      (this.props.size ? this.props.size : null),
      (this.props.className ? this.props.className : null)
    );

    return (
      <label className="xpFormEditorLabel">
        {
          this.props.label &&
          <span>{this.props.label}</span>
        }
        <input
          type="text"
          name={this.props.id || textToName(this.props.label)}
          placeholder={this.props.placeholder}
          className={className}
          required={this.props.required}
        />
      </label>
    );
  }
}

TextInput.Sizes = {
  SMALL: "smallSize",
  NORMAL: "normalSize",
  LARGE: "largeSize"
};

TextInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOf([
    TextInput.Sizes.SMALL,
    TextInput.Sizes.NORMAL,
    TextInput.Sizes.LARGE
  ]),
  required: PropTypes.bool
};

export default TextInput;