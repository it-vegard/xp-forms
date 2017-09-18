import React from 'react';
import PropTypes from 'prop-types';
import { textToName, concatClassNames } from '../../util/StringUtil';

class HtmltInput extends React.Component {

  render() {
    const className = concatClassNames(
      'xpFormInput xpFormHtmlInput',
      (!this.props.label ? 'noLabel ' : null),
      this.props.className
    );

    return (
      <label className="xpFormEditorLabel">
        {
          this.props.label &&
          <span>{this.props.label}</span>
        }
        <textarea
          name={textToName(this.props.label)}
          placeholder={this.props.placeholder}
          className={className}
          required={this.props.required}
        />
      </label>
    );
  }
}

HtmltInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  required: PropTypes.bool
};

export default HtmltInput;