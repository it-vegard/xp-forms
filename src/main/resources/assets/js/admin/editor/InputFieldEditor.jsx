import React from 'react';
import PropTypes from 'prop-types';
import EditorFieldset from './fields/EditorFieldset';
import TextInput from './fields/TextInput';

const InputFieldEditor = ({ fields }) => (
  <div className="xpFormEditorContainer">
    {fields.map((field, index) => (
      <EditorFieldset
        key={field.id || index}
        legend="New input field"
        deleteInputHandler={() => fields.remove(index)}
      >
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
      type="button"
      className="xpFormAddInputFieldButton"
      onClick={() => fields.push({ xpInputId: fields.length })}
    >Add Input Field
    </button>
  </div>
);

InputFieldEditor.propTypes = {
  fields: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
  }),
};

export default InputFieldEditor;
