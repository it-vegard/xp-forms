import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

function mapStateToProps(state) {
  return { form: state.editor }
}

class FormEditorForm extends React.Component {

  render() {
    return (
      <form>
        {this.props.children}
      </form>
    )
  }

}

FormEditorForm.propTypes = {
  initialValues: PropTypes.object
};

FormEditorForm = connect(mapStateToProps)(FormEditorForm);

export default reduxForm({
  form: 'formeditor'
}, mapStateToProps)(FormEditorForm);