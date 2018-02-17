import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import { textToName, concatClassNames } from '../../../admin/util/StringUtil';

const resolveClassName = className => concatClassNames(
  'xpFormsInput xpFormsTextInput',
  className,
);

const CheckboxInput = ({
  className, id, label, required,
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
      type="checkbox"
      name={id || textToName(label)}
      className={resolveClassName(className)}
      required={required}
    />
  </label>
);

CheckboxInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  required: PropTypes.bool,
};

CheckboxInput.defaultProps = {
  label: 'Checkbox',
};

export default CheckboxInput;
