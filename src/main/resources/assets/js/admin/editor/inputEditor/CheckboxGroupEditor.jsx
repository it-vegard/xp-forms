import React, { Fragment } from 'react';
import { FieldArray } from 'redux-form';
import PropTypes from 'prop-types';
import TextInput from '../fields/TextInput';
import CheckboxFieldEditor from './CheckboxFieldEditor';

const CheckboxFieldEditorArray = ({ fields }) => (
  <div>
    { fields.map((field, index) =>
      <CheckboxFieldEditor key={field} id={field} field={field[index]} />)
    }
    <button
      type="button"
      className="xpFormAddInputFieldButton"
      onClick={() => fields.push({})}
    >Add checkbox
    </button>
  </div>
);

CheckboxFieldEditorArray.propTypes = {
  fields: PropTypes.shape(CheckboxFieldEditor.propTypes),
};

const CheckboxGroupEditor = ({ id }) => (
  <Fragment>
    <span>Checkbox group</span>
    <TextInput
      id={`${id}.label`}
      label="Group label"
      required
    />
    <TextInput
      id={`${id}.name`}
      label="Group name"
      required
    />
    <FieldArray component={CheckboxFieldEditorArray} name={`${id}.checkboxes`} />
  </Fragment>
);

CheckboxGroupEditor.propTypes = {
  id: PropTypes.string,
};

export default CheckboxGroupEditor;
