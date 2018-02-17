import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TextInput from '../fields/TextInput';

const TimeFieldEditor = ({ id }) => (
  <Fragment>
    <span>Time input</span>
    <TextInput
      id={`${id}.label`}
      label="Label"
      required
    />
  </Fragment>
);

TimeFieldEditor.propTypes = {
  id: PropTypes.string,
};

export default TimeFieldEditor;
