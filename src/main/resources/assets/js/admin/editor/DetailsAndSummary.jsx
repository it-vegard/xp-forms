import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

class DetailsAndSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  openDetails() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <Fragment>
        <button
          className={`detailsButton${this.state.isOpen ? ' detailsButton--open' : ''}`}
          onClick={() => this.openDetails()}
          type="button"
        >
          {this.props.summary}
        </button>
        {this.state.isOpen && this.props.children}
      </Fragment>
    );
  }
}

DetailsAndSummary.propTypes = {
  children: PropTypes.element,
  summary: PropTypes.string,
};

export default DetailsAndSummary;
