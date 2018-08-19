import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../fields/TextInput';
import DetailsAndSummary from '../DetailsAndSummary';
import CheckboxInput from '../fields/CheckboxInput';

const CheckboxFieldEditor = ({ id, name }) => (
  <div className="checkbox-editor">
    <span>Checkbox</span>
    <TextInput
      id={`${id || name}.label`}
      label="Label"
      required
    />
    <TextInput
      id={`${id || name}.inputName`}
      label="Name"
      required
    />
    <TextInput
      id={`${id || name}.value`}
      label="Value"
      required
    />
    <CheckboxInput
      id={`${id || name}.required`}
      label="Required"
    />
    <DetailsAndSummary summary="Show advanced options">
      <TextInput
        id={`${id || name}.id`}
        label="Id"
      />
      <TextInput
        id={`${id || name}.className`}
        label="Class"
      />
    </DetailsAndSummary>
  </div>
);

CheckboxFieldEditor.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
};

export default CheckboxFieldEditor;
