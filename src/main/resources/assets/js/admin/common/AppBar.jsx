import React from 'react';
import PropTypes from 'prop-types';
import Launcher from './Launcher';
import { assetUrl } from '../util/EnonicHelper';

const AppBar = props => (
  <div className="xpAppBar">
    <img
      src={assetUrl('img/icons/xpFormIcon.svg')}
      className="xpFormLogo"
      alt=""
    />
    <h1 className="xpAppBarHeading">{props.heading}</h1>
    <Launcher />
  </div>
);

AppBar.propTypes = {
  heading: PropTypes.string,
};

export default AppBar;
