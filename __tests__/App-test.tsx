/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { View } from 'react-native';
import { shallow } from 'enzyme';

const app = shallow(<App />);

it('renders correctly', () => {
  expect(app).toMatchSnapshot();
});

it('renders only one Fragment component', () => {
  const tree = renderer.create(<MockApp />).toJSON;
  // one fragment component
})