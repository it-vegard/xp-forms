import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import NumberInput from '../fields/TextInput';

const NumberFieldEditor = ({ id }) => (
  <Fragment>
    <span>Number</span>
    <NumberInput
      id={`${id}.label`}
      label="Label"
      required
    />
  </Fragment>
);

NumberFieldEditor.propTypes = {
  id: PropTypes.string,
};

export default NumberFieldEditor;
