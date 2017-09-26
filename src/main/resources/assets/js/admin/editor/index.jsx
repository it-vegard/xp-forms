import React from 'react';
import { connect } from 'react-redux';
import FormHeader from "./FormHeader";
import FormConfiguration from './FormConfiguration';
import FormEditorCss from '../../../scss/admin/editor/form-editor.scss';

function mapStateToProps(state) {
  return { form: state.editor }
}

class FormEditor extends React.Component {

  render() {
    return (
      <section id="xpFormsEditor">
        <form>
          <FormHeader/>
          <FormConfiguration/>
        </form>
      </section>
    )
  }

}

export default connect(mapStateToProps)(FormEditor);