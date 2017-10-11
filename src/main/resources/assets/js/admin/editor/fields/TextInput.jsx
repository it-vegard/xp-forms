import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import { textToName, concatClassNames } from '../../util/StringUtil';

const TextInput = (props) => {
  const className = concatClassNames(
    'xpFormInput xpFormTextInput',
    (!props.label ? 'noLabel' : null),
    (props.size ? props.size : null),
    (props.className ? props.className : null),
  );

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
        className={className}
        required={props.required}
      />
    </label>
  );
};

TextInput.Sizes = {
  SMALL: 'smallSize',
  NORMAL: 'normalSize',
  LARGE: 'largeSize',
};

TextInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOf([
    TextInput.Sizes.SMALL,
    TextInput.Sizes.NORMAL,
    TextInput.Sizes.LARGE,
  ]),
  required: PropTypes.bool,
};

export default TextInput;
