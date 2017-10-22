import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AppBar from '../editor/xp/AppBar';
import { loadForms } from '../actions';

function mapDispatchToProps(dispatch) {
  return {
    onLoad: () => {
      dispatch(loadForms());
    },
  };
}

class FormStudio extends React.Component {
  componentWillMount() {
    this.props.onLoad();
  }

  render() {
    return (
      <section id="xpFormStudio">
        <AppBar heading="Form Studio" />
      </section>
    );
  }
}

FormStudio.propTypes = {
  onLoad: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(FormStudio);
