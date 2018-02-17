import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import { textToName, concatClassNames } from '../../../admin/util/StringUtil';

const resolveClassName = className => concatClassNames(
  'xpFormsInput xpFormsTextInput',
  className,
);

const TextInput = ({
  className, id, label, placeholder, required,
}) => (
  <label
    htmlFor={id || textToName(label)}
    className="xpFormEditorLabel"
  >
    {
      label &&
      <span>{label}</span>
    }
    <Field
      component="input"
      id={id || textToName(label)}
      type="text"
      name={id || textToName(label)}
      placeholder={placeholder}
      className={resolveClassName(className)}
      required={required}
    />
  </label>
);

TextInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  required: PropTypes.bool,
};

TextInput.defaultProps = {
  label: 'Text',
};

export default TextInput;
