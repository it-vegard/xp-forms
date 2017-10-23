import React from 'react';
import PropTypes from 'prop-types';

const ScrollableColumn = props => (
  <section className="xpScrollableColumn">
    { props.children }
  </section>
);

ScrollableColumn.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default ScrollableColumn;
