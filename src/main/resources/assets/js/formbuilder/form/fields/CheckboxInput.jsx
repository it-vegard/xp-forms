import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import { textToName, concatClassNames } from '../../../admin/util/StringUtil';

const resolveClassName = className => concatClassNames(
  'xpFormsInput xpFormsTextInput',
  className,
);

const CheckboxInput = ({
  className, id, inputName, label, required,
}) => (
  <label
    htmlFor={id || textToName(label)}
    className="xpFormEditorLabel"
  >
    <Field
      component="input"
      id={id || textToName(label)}
      type="checkbox"
      name={inputName || id || textToName(label)}
      className={resolveClassName(className)}
      required={required}
    />
    {
      label &&
      <span>{`${label}${required ? ' *' : ''}`}</span>
    }
  </label>
);

CheckboxInput.propTypes = {
  id: PropTypes.string,
  inputName: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  required: PropTypes.bool,
};

CheckboxInput.defaultProps = {
  label: 'Checkbox',
};

CheckboxInput.displayName = 'Checkbox';

export default CheckboxInput;
