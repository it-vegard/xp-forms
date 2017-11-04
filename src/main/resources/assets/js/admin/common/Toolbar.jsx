import React from 'react';
import PropTypes from 'prop-types';
import { textToName } from '../util/StringUtil';

function clickIfEnterOrSpaceClicked(event, callback) {
  if (event.key === 'Enter' || event.key === 'Space') {
    callback();
  }
}

const Toolbar = props => (
  <nav className="xpToolbar">
    <ul>
      { props.buttons.map(button => (
        <li key={textToName(button.text)} className="xpToolbar__item">
          <button
            className="xpToolbar__button"
            disabled={button.disabled}
            onClick={button.action}
            onKeyPress={event => clickIfEnterOrSpaceClicked(event, button.action)}
          >
            {button.text}
          </button>
        </li>
      ))}
    </ul>
  </nav>
);

Toolbar.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
  }).isRequired).isRequired,
};

export default Toolbar;
