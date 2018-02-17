import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TextInput from '../fields/TextInput';

const RangeFieldEditor = ({ id }) => (
  <Fragment>
    <span>Range input</span>
    <TextInput
      id={`${id}.label`}
      label="Label"
      required
    />
  </Fragment>
);

RangeFieldEditor.propTypes = {
  id: PropTypes.string,
};

export default RangeFieldEditor;
