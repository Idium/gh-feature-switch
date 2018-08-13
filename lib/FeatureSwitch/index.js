import React from 'react';
import PropTypes from 'prop-types';

const FeatureSwitch = props => {
  return (
    <React.Fragment>
      { props.children }
    </React.Fragment>
  );
};

FeatureSwitch.propTypes = {
  children: PropTypes.node,
  all: PropTypes.arrayOf(PropTypes.bool),
  either: PropTypes.arrayOf(PropTypes.bool)
};

FeatureSwitch.defaultProps = {
  children: null,
  all: [],
  either: []
};

export default FeatureSwitch;
