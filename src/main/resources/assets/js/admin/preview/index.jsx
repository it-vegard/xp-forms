import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import FormWrapper from '../../formbuilder/form';

const FormPreview = (props) => {
  if (!props.match.params.id) {
    return (
      <p>Loading...</p>
    );
  }
  return (
    <section id="xpFormPreview">
      <FormWrapper formId={props.match.params.id} />
    </section>
  );
};

FormPreview.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

export default withRouter(connect()(FormPreview));
