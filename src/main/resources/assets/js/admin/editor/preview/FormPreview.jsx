import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import App from '../../../formbuilder/App';

function mapStateToProps(state) {
  return {
    initialValues: state.form.formeditor.values,
  };
}

const FormPreview = props => (
  <div className="xpFormPreview">
    <App initialValues={props.initialValues} />
  </div>
);

FormPreview.propTypes = {
  initialValues: PropTypes.shape({
    type: PropTypes.string,
    config: PropTypes.shape({
      id: PropTypes.string,
      displayName: PropTypes.string,
      title: PropTypes.string,
      submitButton: PropTypes.string,
      successMessage: PropTypes.string,
      overrideSubmitMethod: PropTypes.string,
      overrideSubmitUrl: PropTypes.string,
      fields: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        id: PropTypes.string,
      })),
    }),
  }),
};

export default connect(mapStateToProps)(FormPreview);
