import React from 'react';
import PropTypes from 'prop-types';
import EditorFieldset from './fields/EditorFieldset';
import SelectInput from './SelectInput';
import FieldTypes from './FieldTypes';
import InputEditor from './inputEditor';

// const isValid = field => ((field.type && field.label) || true);

const InputFieldEditor = ({ fields }) => {
  const selectOptions = Object.values(FieldTypes);

  return (
    <div className="xpFormEditorContainer">
      {fields.map((fieldId, index) => {
        const field = fields.get(index);

        return (
          <EditorFieldset
            id={fieldId || index}
            key={fieldId || index}
            legend="New input field"
            deleteInputHandler={() => fields.remove(index)}
          >
            <SelectInput
              id={`${fieldId}.type`}
              options={selectOptions}
              required
            />
            {field.type && <InputEditor id={fieldId} field={field} /> }
          </EditorFieldset>
          );
      })}
      <button
        type="button"
        className="xpFormAddInputFieldButton"
        onClick={() => fields.push({ xpInputId: fields.length })}
      >Add Input Field
      </button>
    </div>
  );
};

InputFieldEditor.propTypes = {
  fields: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
  }),
};

export default InputFieldEditor;
