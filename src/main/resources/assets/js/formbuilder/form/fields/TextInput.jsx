import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import { textToName, concatClassNames } from '../../../admin/util/StringUtil';

const resolveClassName = className => concatClassNames(
  'xpFormsInput xpFormsTextInput',
  className,
);

const TextInput = (props) => {
  if (!props.id || !props.label) {
    console.warn('Input field is not correctly configured.');
  }
  return (
    <label
      htmlFor={props.id || textToName(props.label)}
      className="xpFormEditorLabel"
    >
      {
        props.label &&
        <span>{props.label}</span>
      }
      <Field
        component="input"
        id={props.id || textToName(props.label)}
        type="text"
        name={props.id || textToName(props.label)}
        placeholder={props.placeholder}
        className={resolveClassName(props.className)}
        required={props.required}
      />
    </label>
  );
};

TextInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  required: PropTypes.bool,
};

export default TextInput;
