import test from 'ava';
import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import './helpers/setup';

import { FeatureSwitch } from '..';

configure({ adapter: new Adapter() });

test('shallow rendering with no children', t => {
  const wrapper = shallow(<FeatureSwitch />);
  t.is(wrapper.html(), null);
});

test('shallow rendering with children and no conditions', t => {
  const wrapper = shallow(
    <FeatureSwitch>
      <span>test</span>
    </FeatureSwitch>
  );
  t.is(wrapper.html(), null);
});

test('full rendering with children and "all" true condition', t => {
  const wrapper = mount(
    <FeatureSwitch
      all={ [1 === 1, 0 === 0, true] }
    >
      <span>test</span>
    </FeatureSwitch>
  );
  
  t.true(wrapper.containsMatchingElement(<span>test</span>));
});

test('full rendering with children and "all" false condition', t => {
  const wrapper = mount(
    <FeatureSwitch
      all={ [1 === 0, 0 === 1, true] }
    >
      <span>test</span>
    </FeatureSwitch>
  );
  
  t.is(wrapper.html(), null);
});

test('full rendering with children and "either" true condition', t => {
  const wrapper = mount(
    <FeatureSwitch
      either={ [0 === 1, 1 === 0, true] }
    >
      <span>test</span>
    </FeatureSwitch>
  );
  
  t.true(wrapper.containsMatchingElement(<span>test</span>));
});

test('full rendering with children and "either" false condition', t => {
  const wrapper = mount(
    <FeatureSwitch
      either={ [0 === 1, 1 === 0, false] }
    >
      <span>test</span>
    </FeatureSwitch>
  );
  
  t.is(wrapper.html(), null);
});

test('full rendering with "either" and "all", "either" must be ignored', t => {
  const wrapper = mount(
    <FeatureSwitch
      either={ [true] }
      all={ [false] }
    >
      <span>test</span>
    </FeatureSwitch>
  );
  
  t.is(wrapper.html(), null);
});

test('full rendering with "either" and "all", "either" must be ignored, reversed conditions', t => {
  const wrapper = mount(
    <FeatureSwitch
      either={ [false] }
      all={ [true] }
    >
      <span>test</span>
    </FeatureSwitch>
  );
  
  t.true(wrapper.containsMatchingElement(<span>test</span>));
});

test('using environment variables in conditions', t => {
  process.env.testvar = true;
  
  const wrapper = mount(
    <FeatureSwitch
      all={ [process.env.testvar] }
    >
      <span>test</span>
    </FeatureSwitch>
  );

  t.true(wrapper.containsMatchingElement(<span>test</span>));
});

test('using different types of environment variables in conditions', t => {
  process.env.testvar = true;
  process.env.testvar2 = 'true';
  process.env.testvar3 = 1;
  
  const wrapper = mount(
    <FeatureSwitch
      all={ [process.env.testvar, process.env.testvar2, process.env.testvar3] }
    >
      <span>test</span>
    </FeatureSwitch>
  );

  t.true(wrapper.containsMatchingElement(<span>test</span>));
});

test('using different types of falsey environment variables in conditions', t => {
  process.env.testvar = false;
  process.env.testvar2 = 0;
  process.env.testvar3 = 'false';
  process.env.testvar4 = '0';
  
  const wrapper = mount(
    <FeatureSwitch
      either={ [
        process.env.testvar,
        process.env.testvar2,
        process.env.testvar3,
        process.env.testvar4
      ] }
    >
      <span>test</span>
    </FeatureSwitch>
  );

  t.is(wrapper.html(), null);
});
