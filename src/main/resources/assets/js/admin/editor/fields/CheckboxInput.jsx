import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import { textToName, concatClassNames } from '../../util/StringUtil';

const CheckboxInput = (props) => {
  const className = concatClassNames(
    'xpFormInput xpFormCheckboxInput',
    (props.className ? props.className : null),
  );

  return (
    <label
      htmlFor={props.id || textToName(props.label)}
      className="xpFormEditorLabel"
    >
      <Field
        component="input"
        id={props.id || textToName(props.label)}
        type="checkbox"
        name={props.id || textToName(props.label)}
        className={className}
        required={props.required}
      />
      {
        props.label &&
        <span>{props.label}</span>
      }
    </label>
  );
};

CheckboxInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  required: PropTypes.bool,
};

export default CheckboxInput;
