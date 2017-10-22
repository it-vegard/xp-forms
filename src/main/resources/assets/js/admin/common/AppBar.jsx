import React from 'react';
import PropTypes from 'prop-types';
import { assetUrl } from '../util/EnonicHelper';

const AppBar = props => (
  <div className="xpAppBar">
    <img
      src={assetUrl('img/icons/xpFormIcon.svg')}
      className="xpFormLogo"
      alt=""
    />
    <span className="xpAppBarHeading">{props.heading}</span>
  </div>
);

AppBar.propTypes = {
  heading: PropTypes.string,
};

export default AppBar;
