import React from 'react';
import PropTypes from 'prop-types';

import { getBool } from '../util';

const FeatureSwitch = props => {
  let children = <React.Fragment>{ props.children }</React.Fragment>;
  if (props.all && props.all.length > 0) {
    if(props.all.every(x => getBool(x))) {
      return children;
    }
  } else if (props.either && props.either.length > 0) {
    if(props.either.some(x => getBool(x))) {
      return children;
    }
  }

  return null;
};

FeatureSwitch.propTypes = {
  children: PropTypes.node,
  all: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.bool, PropTypes.string])),
  either: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.bool, PropTypes.string]))
};

FeatureSwitch.defaultProps = {
  children: null,
  all: [],
  either: []
};

export default FeatureSwitch;
