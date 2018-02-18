import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import { textToName, concatClassNames } from '../../../admin/util/StringUtil';

const resolveClassName = className => concatClassNames(
  'xpFormsInput xpFormsTextInput',
  className,
);

const NumberInput = props => (
  <label
    htmlFor={props.id || textToName(props.label)}
    className="xpFormEditorLabel"
  >
    {
        props.label &&
        <span>{props.label || 'Number'}</span>
      }
    <Field
      component="input"
      id={props.id || textToName(props.label)}
      type="number"
      name={props.id || textToName(props.label)}
      placeholder={props.placeholder}
      className={resolveClassName(props.className)}
      required={props.required}
    />
  </label>
);

NumberInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  required: PropTypes.bool,
};

NumberInput.defaultProps = {
  label: 'Number',
};

export default NumberInput;