import React from 'react';
import PropTypes from 'prop-types';

const FlexibleColumn = props => (
  <section className="xpFlexibleColumn">
    { props.children }
  </section>
);

FlexibleColumn.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default FlexibleColumn;
