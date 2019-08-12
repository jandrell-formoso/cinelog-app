import React from 'react'
import { shallow } from 'enzyme';
import MovieItem from '../MovieItem';

describe('Rendering MovieItem', () => {
  it("should be rendered correctly", () => {
    const wrapper = shallow(<MovieItem />);
    expect(wrapper.exists()).toBeTruthy();
  });
  it("should render title", () => {
    const props = {
      title: 'Avengers: Endgame',
      rating: 4.8,
    };
    const wrapper = shallow(<MovieItem {...props}/>);
    expect(wrapper.children().length).toBe(1);
    console.log(wrapper.props());
  })
});
