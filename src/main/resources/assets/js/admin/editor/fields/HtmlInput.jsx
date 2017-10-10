import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import { textToName, concatClassNames } from '../../util/StringUtil';

class HtmltInput extends React.Component {
  render() {
    const className = concatClassNames(
      'xpFormInput xpFormHtmlInput',
      (!this.props.label ? 'noLabel ' : null),
      this.props.className,
    );

    return (
      <label className="xpFormEditorLabel">
        {
          this.props.label &&
          <span>{this.props.label}</span>
        }
        <Field
          component="textarea"
          name={this.props.id || textToName(this.props.label)}
          placeholder={this.props.placeholder}
          className={className}
          required={this.props.required}
        />
      </label>
    );
  }
}

HtmltInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  required: PropTypes.bool,
};

export default HtmltInput;
