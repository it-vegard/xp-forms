import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TextInput from '../fields/TextInput';

const TelFieldEditor = ({ id }) => (
  <Fragment>
    <span>Tel input</span>
    <TextInput
      id={`${id}.label`}
      label="Label"
      required
    />
  </Fragment>
);

TelFieldEditor.propTypes = {
  id: PropTypes.string,
};

export default TelFieldEditor;
