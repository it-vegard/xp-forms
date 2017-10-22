import React from 'react';
import PropTypes from 'prop-types';
import { textToName } from '../util/StringUtil';

const Toolbar = props => (
  <nav className="xpToolbar">
    <ul>
      { props.buttons.map(button => (
        <li key={textToName(button.text)} className="xpToolbar__item">
          <button className="xpToolbar__button" onClick={button.action}>
            {button.text}
          </button>
        </li>
      ))
      }
    </ul>
  </nav>
);

Toolbar.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
  }).isRequired).isRequired,
};

export default Toolbar;
