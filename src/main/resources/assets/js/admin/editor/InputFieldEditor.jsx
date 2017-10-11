import React from 'react';
import PropTypes from 'prop-types';
import EditorFieldset from './fields/EditorFieldset';
import TextInput from './fields/TextInput';

const InputFieldEditor = props => (
  <div className="xpFormEditorContainer">
    {props.fields.map((field, index) => (
      <EditorFieldset key={field.id || index} legend="New input field">
        <TextInput
          id={`${field}.label`}
          label="Label"
          required
        />
        <TextInput
          id={`${field}.id`}
          label="Name"
          required
        />
      </EditorFieldset>
      ))}
    <button
      className="xpFormAddInputFieldButton"
      onClick={() => {
        props.fields.push({});
      }}
    >Add Input Field
    </button>
  </div>
);

InputFieldEditor.propTypes = {
  fields: PropTypes.arrayOf({
    id: PropTypes.string,
    label: PropTypes.string,
  }),
};

export default InputFieldEditor;
