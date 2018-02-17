import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TextInput from '../fields/TextInput';

const DateFieldEditor = ({ id }) => (
  <Fragment>
    <span>Date input</span>
    <TextInput
      id={`${id}.label`}
      label="Label"
      required
    />
  </Fragment>
);

DateFieldEditor.propTypes = {
  id: PropTypes.string,
};

export default DateFieldEditor;
