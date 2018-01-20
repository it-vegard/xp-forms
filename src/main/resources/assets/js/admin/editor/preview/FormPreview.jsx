import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import XpForm from '../../../formbuilder/form/XpForm';
import formPropType from '../../../models/form';

const FormPreview = props => (
  <div className="xpFormPreview">
    {props.initialValues &&
      <XpForm
        form={props.formId}
        initialValues={props.initialValues}
        handleSubmit={() => {}}
      />
    }
  </div>
);

FormPreview.propTypes = {
  formId: PropTypes.string,
  initialValues: PropTypes.shape(formPropType),
};

export default connect()(FormPreview);
