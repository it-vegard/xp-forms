import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import XpForm from '../../../formbuilder/form';

function mapStateToProps(state) {
  return {
    form: state.form.formeditor,
  };
}

const FormPreview = props => (
  <div className="xpFormPreview">
    <XpForm previewForm={props.form} />
  </div>
);

FormPreview.propTypes = {
  form: PropTypes.shape({
    values: PropTypes.shape({
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
  }),
};

export default connect(mapStateToProps)(FormPreview);
