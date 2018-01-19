import PropTypes from 'prop-types';

const formPropType = {
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
};

export default formPropType;
