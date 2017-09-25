import React from 'react';
import EditorFieldset from './fields/EditorFieldset';
import TextInput from './fields/TextInput';

class InputFieldEditor extends React.Component {
  render() {
    return (
      <div className="xpFormEditorContainer">
        <EditorFieldset legend="New input field">
          <TextInput label="Label" required={true}/>
          <TextInput label="Name" required={true}/>
        </EditorFieldset>
        <EditorFieldset legend="Second input field">
          <TextInput label="Label" required={true}/>
          <TextInput label="Name" required={true}/>
        </EditorFieldset>
        <button className="xpFormAddInputFieldButton">Add Input Field</button>
      </div>
    );
  }
}

export default InputFieldEditor;