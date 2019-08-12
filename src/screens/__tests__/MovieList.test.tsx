import React from 'react'
import { FlatList } from 'react-native';
import MovieList from "../MovieList";
import MovieItem from "../../components/MovieItem";
import { shallow, mount } from 'enzyme';
import { Surface } from 'react-native-paper';

describe('Movie List', () => {
  const mockProps = {
    navigation: {
      navigate: jest.fn(),
    }
  }
  it("should render correctly", () => {
    // create a snapshot
    const component = shallow(<MovieList {...mockProps} />);
    expect(component).toMatchSnapshot();
    expect(component.exists()).toBeTruthy();
  });
  // TODO: test flatlist renderItem
  it("should render 5 items in flatlist", () => {
    const flatlistProps = {
      ...mockProps,
      data: [
        { title: "Avengers 1" },
        { title: "Avengers 2" },
        { title: "Avengers 3" },
        { title: "X-men 1" },
        { title: "X-men 2" },
      ],
    }
    const wrapper = shallow(<MovieList {...flatlistProps} />);
    expect(wrapper).toMatchSnapshot();
  });
})
