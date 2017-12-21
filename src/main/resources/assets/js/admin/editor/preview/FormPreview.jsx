import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import XpForm from '../../../formbuilder/form/XpForm';

const FormPreview = props => (
  <div className="xpFormPreview">
    {props.initialValues &&
      <XpForm
        form={props.formId}
        initialValues={props.initialValues}
        handleSubmit={values => console.log('Submitting: ', values)}
      />
    }
  </div>
);

FormPreview.propTypes = {
  initialValues: PropTypes.shape({
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
  formId: PropTypes.string,
};

export default connect()(FormPreview);
