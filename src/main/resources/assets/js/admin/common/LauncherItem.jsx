import React from 'react';
import PropTypes from 'prop-types';

const getClassName = (launcherItemApplication, currentApplication) => {
  const launcherItemClassName = ['xpLauncherList__item'];
  if (currentApplication.indexOf(launcherItemApplication) !== -1) {
    launcherItemClassName.push('current');
  }
  return launcherItemClassName.join(' ');
};

const LauncherItem = ({ currentApplication, tool }) => (
  <li
    key={tool.key.application}
  >
    <a href={`/admin/tool/${tool.key.application}/${tool.key.name}`}>
      <div className={getClassName(tool.key.application, currentApplication)}>
        <div
          className="xpLauncherList__item__icon"
          dangerouslySetInnerHTML={{ __html: tool.icon }} // eslint-disable-line react/no-danger
        />
        <span className="xpLauncherList__item__title">{tool.displayName}</span>
        <span className="xpLauncherList__item__description">{tool.description}</span>
      </div>
    </a>
  </li>
);

LauncherItem.propTypes = {
  currentApplication: PropTypes.string,
  tool: PropTypes.shape({
    description: PropTypes.string,
    displayName: PropTypes.string,
    icon: PropTypes.string,
    key: PropTypes.shape({
      application: PropTypes.string,
    }),
  }),
};

export default LauncherItem;
