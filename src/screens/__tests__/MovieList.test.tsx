import React from 'react'
import { FlatList } from 'react-native';
import MovieList from "../MovieList";
import { shallow } from '../../../enzyme.config';
import { Surface } from 'react-native-paper';

describe('Movie List', () => {
  const mockProps = {
    navigation: {
      navigate: jest.fn(),
    }
  }
  it("should render correctly", () => {
    const wrapper = shallow(<MovieList {...mockProps} />);
    expect(wrapper.find(Surface)).toHaveLength(1);
    expect(wrapper.find(FlatList)).toHaveLength(1);
  });
})
