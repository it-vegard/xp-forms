import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import LauncherItem from './LauncherItem';

const mapStateToProps = (state, ownProps) => ({
  adminTools: state.admin.launcher.tools,
  title: state.admin.launcher.title || 'Tools',
  currentApplication: ownProps.match.url,
});

class Launcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.toggleLauncher = this.toggleLauncher.bind(this);
  }

  toggleLauncher() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    if (this.props.adminTools.length > 0) {
      const that = this;
      const launcherClassName = ['xpLauncher'];
      if (this.state.isOpen) {
        launcherClassName.push('open');
      }

      return (
        <nav
          aria-labelledby="xpLauncherHeading"
          className={launcherClassName.join(' ')}
          id="xpLauncher"
        >
          <h2 id="xpLauncherHeading" className="xpFormsVisuallyHidden">Applications</h2>
          <button
            className="xpLauncherToggle"
            onClick={that.toggleLauncher}
          >
            <svg className="xpLauncherToggle__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
              <title>Menu</title>
              <g>
                <path className="xpLauncherToggle__icon__line" d="M13,26.5 L88,26.5" />
                <path className="xpLauncherToggle__icon__line" d="M13,50.5 L88,50.5" />
                <path className="xpLauncherToggle__icon__line" d="M13,50.5 L88,50.5" />
                <path className="xpLauncherToggle__icon__line" d="M13,74.5 L88,74.5" />
              </g>
            </svg>
          </button>
          <ul className="xpLauncherList">
            <li>
              <h3>Demo</h3>
            </li>
            {this.props.adminTools.map(tool => (
              <LauncherItem
                currentApplication={that.props.currentApplication}
                key={`${tool.key.application}-${tool.key.name}`}
                tool={tool}
              />
            ))}
          </ul>
        </nav>
      );
    }
    return null;
  }
}

Launcher.propTypes = {
  adminTools: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.shape({
      application: PropTypes.string,
      name: PropTypes.string,
    }),
    displayName: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.string,
  })),
};

export default withRouter(connect(mapStateToProps)(Launcher));
