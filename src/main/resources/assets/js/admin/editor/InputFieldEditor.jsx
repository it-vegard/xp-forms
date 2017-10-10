import React from 'react';
import PropTypes from 'prop-types';
import EditorFieldset from './fields/EditorFieldset';
import TextInput from './fields/TextInput';

class InputFieldEditor extends React.Component {
  render() {
    return (
      <div className="xpFormEditorContainer">
        {this.props.fields.map((field, index) => {
          return (
            <EditorFieldset key={field.id || index} legend="New input field">
              <TextInput
                id={`${field}.label`}
                label="Label"
                required={true}/>
              <TextInput
                id={`${field}.id`}
                label="Name"
                required={true}/>
            </EditorFieldset>
          );
        })}
        <button
          className="xpFormAddInputFieldButton"
          onClick={() => {
            this.props.fields.push({})
          }}>Add Input Field</button>
      </div>
    );
  }
}

InputFieldEditor.propTypes = {
  fields: PropTypes.object
};

export default InputFieldEditor;