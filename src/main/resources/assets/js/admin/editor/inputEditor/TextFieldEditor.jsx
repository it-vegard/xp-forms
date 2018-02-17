import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TextInput from '../fields/TextInput';

const TextFieldEditor = ({ id }) => (
  <Fragment>
    <span>Text input</span>
    <TextInput
      id={`${id}.label`}
      label="Label"
      required
    />
  </Fragment>
);

TextFieldEditor.propTypes = {
  id: PropTypes.string,
};

export default TextFieldEditor;
