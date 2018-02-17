import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TextInput from '../fields/TextInput';

const CheckboxFieldEditor = ({ id }) => (
  <Fragment>
    <span>Checkbox</span>
    <TextInput
      id={`${id}.label`}
      label="Label"
      required
    />
  </Fragment>
);

CheckboxFieldEditor.propTypes = {
  id: PropTypes.string,
};

export default CheckboxFieldEditor;
