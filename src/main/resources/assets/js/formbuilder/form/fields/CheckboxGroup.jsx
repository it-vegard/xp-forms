import React from 'react';
import { FieldArray } from 'redux-form';
import PropTypes from 'prop-types';
import CheckboxInput from './CheckboxInput';

const CheckboxInputArray = ({ fields }) =>
  fields.map((field, index) =>
    fields.get(index)).map(field => (
      <CheckboxInput
        key={field}
        className={field.className}
        id={field.inputName}
        inputName={field.inputName}
        label={field.label}
        required={field.required}
      />
  ));

const CheckboxGroup = ({
  legend, xpInputId,
}) => (
  <fieldset>
    <legend>{legend}</legend>
    <FieldArray
      component={CheckboxInputArray}
      name={`fields[${xpInputId}].checkboxes`}
    />
  </fieldset>
);

CheckboxGroup.propTypes = {
  legend: PropTypes.string,
  xpInputId: PropTypes.number,
};

CheckboxGroup.defaultProps = {
  legend: 'Checkbox group',
};

CheckboxGroup.displayName = 'CheckboxGroup';

export default CheckboxGroup;
