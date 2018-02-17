import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TextInput from '../fields/TextInput';

const RadioButtonsFieldEditor = ({ id }) => (
  <Fragment>
    <span>Radio Buttons</span>
    <TextInput
      id={`${id}.label`}
      label="Label"
      required
    />
  </Fragment>
);

RadioButtonsFieldEditor.propTypes = {
  id: PropTypes.string,
};

export default RadioButtonsFieldEditor;
