import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TextInput from '../fields/TextInput';

const UrlFieldEditor = ({ id }) => (
  <Fragment>
    <span>URL input</span>
    <TextInput
      id={`${id}.label`}
      label="Label"
      required
    />
  </Fragment>
);

UrlFieldEditor.propTypes = {
  id: PropTypes.string,
};

export default UrlFieldEditor;
