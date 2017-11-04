import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { push as navigateTo } from 'react-router-redux';
import AppBar from '../common/AppBar';
import { loadForms, duplicateForm, deleteForm } from '../actions';
import { formAdminUrl } from '../util/EnonicHelper';
import ScrollableColumn from '../common/ScrollableColumn';
import FlexibleColumn from '../common/FlexibleColumn';
import Toolbar from '../common/Toolbar';
import FormStudioOverview from './overview';

function mapStateToProps(state) {
  return {
    selectedForms: state.app.formStudio.selectedForms,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLoad: () => dispatch(loadForms()),
    createNewForm: () => dispatch(navigateTo(formAdminUrl('/editor'))),
    editForm: () => dispatch(navigateTo(formAdminUrl('/editor/92e31d28-7251-44e1-8cda-65b51e6822dd'))),
    deleteForm: () => dispatch(deleteForm('id')),
    duplicateForm: () => dispatch(duplicateForm('id')),
    // moveForm: () => 'not yet implemented',
    // sort: () => 'not yet implemented',
    goToPreview: () => dispatch(navigateTo(formAdminUrl('/preview'))),
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
            { text: 'New...', action: this.props.createNewForm },
            { text: 'Edit', action: this.props.editForm, disabled: (this.props.selectedForms.length !== 1) },
            { text: 'Delete...', action: this.props.deleteForm, disabled: (this.props.selectedForms.length === 0) },
            { text: 'Duplicate', action: this.props.duplicateForm, disabled: (this.props.selectedForms.length !== 1) },
            // { text: 'Move', action: this.props.moveForm },
            // { text: 'Sort', action: this.props.sort },
            { text: 'Preview', action: this.props.goToPreview, disabled: (this.props.selectedForms.length !== 1) },
          ]}
        />
        <ScrollableColumn>
          <FormStudioOverview />
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
  createNewForm: PropTypes.func,
  editForm: PropTypes.func,
  deleteForm: PropTypes.func,
  duplicateForm: PropTypes.func,
  // moveForm: PropTypes.func,
  // sort: PropTypes.func,
  goToPreview: PropTypes.func,
  selectedForms: PropTypes.arrayOf(PropTypes.string),
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FormStudio));
