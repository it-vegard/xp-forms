import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TextInput from '../fields/TextInput';
import DetailsAndSummary from '../DetailsAndSummary';

const CheckboxFieldEditor = ({ id }) => (
  <Fragment>
    <span>Checkbox</span>
    <TextInput
      id={`${id}.label`}
      label="Label"
      required
    />
    <TextInput
      id={`${id}.name`}
      label="Name"
      required
    />
    <TextInput
      id={`${id}.value`}
      label="Value"
      required
    />
    <DetailsAndSummary summary="Show advanced options">
      <TextInput
        id={`${id}.id`}
        label="Id"
        required
      />
    </DetailsAndSummary>
  </Fragment>
);

CheckboxFieldEditor.propTypes = {
  id: PropTypes.string,
};

export default CheckboxFieldEditor;
