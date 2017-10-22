import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AppBar from '../common/AppBar';
import { loadForms } from '../actions';
import ScrollableColumn from '../common/ScrollableColumn';
import FlexibleColumn from '../common/FlexibleColumn';
import Toolbar from '../common/Toolbar';

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
        <Toolbar buttons={[
          { text: 'New...', action: () => 'test' },
          { text: 'Edit', action: () => 'test' },
          { text: 'Delete...', action: () => 'test' },
          { text: 'Duplicate', action: () => 'test' },
          { text: 'Move', action: () => 'test' },
          { text: 'Sort', action: () => 'test' },
          { text: 'Preview', action: () => 'test' },
        ]}
        />
        <ScrollableColumn>
          <p>Under construction</p>
        </ScrollableColumn>
        <FlexibleColumn>
          <p>TODO</p>
        </FlexibleColumn>
      </section>
    );
  }
}

FormStudio.propTypes = {
  onLoad: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(FormStudio);
