/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { shallow } from "../enzyme.config";

it('renders correctly', () => {
  renderer.create(<App />);
});

it('renders only one Fragment component', () => {
  const wrapper = shallow(<App />);
  // one fragment component
  expect(wrapper.find('Fragment')).toHaveLength(1);
})