import React from 'react';
import PropTypes from 'prop-types';
import { textToName } from '../util/StringUtil';

class FormEditorNavigation extends React.Component {
  render() {
    return (
      <nav className="xpFormEditorNavigation">
        <ul>
          {this.props.items.map((item, index) => {
            const className = (index === 2) ? 'active' : null;
            return (
              <li className={className} key={textToName(item)}>
                <a href={`#${textToName(item)}`}>{item}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

FormEditorNavigation.propTypes = {
  items: PropTypes.array,
};

export default FormEditorNavigation;
