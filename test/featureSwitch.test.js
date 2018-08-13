import test from 'ava';
import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import './helpers/setup';

import { FeatureSwitch } from '..';

configure({ adapter: new Adapter() });

test('shallow rendering with no children', t => {
  const wrapper = shallow(<FeatureSwitch />);

  t.pass();
});
