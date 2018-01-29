import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

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
          <button className="xpLauncherToggle" onClick={that.toggleLauncher}>
            <span className="xpFormsVisuallyHidden">Menu</span>
          </button>
          <ul className="xpLauncherList">
            <li>
              <h3>Demo</h3>
            </li>
            {this.props.adminTools.map((tool) => {
              const launcherItemClassName = ['xpLauncherList__item'];
              if (that.props.currentApplication.indexOf(tool.key.application) !== -1) {
                launcherItemClassName.push('current');
              }
              const launcherItemIcon = { __html: tool.icon };
              return (
                <li
                  key={tool.key.application}
                >
                  <a href={`/admin/tool/${tool.key.application}/${tool.key.name}`}>
                    <div className={launcherItemClassName.join(' ')}>
                      <div
                        className="xpLauncherList__item__icon"
                        dangerouslySetInnerHTML={launcherItemIcon} // eslint-disable-line no-danger
                      />
                      <span className="xpLauncherList__item__title">{tool.displayName}</span>
                      <span className="xpLauncherList__item__description">{tool.description}</span>
                    </div>
                  </a>
                </li>
              );
            })}
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
