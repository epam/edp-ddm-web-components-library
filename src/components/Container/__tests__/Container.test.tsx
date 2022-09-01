import React from 'react';
import { shallow } from 'enzyme';

import Container from '../Container';

describe('Container test', () => {
  const containerText = 'some text';
  it('Container should render child', () => {
    const wrapper = shallow(<Container> {containerText} </Container>);
    expect(wrapper.contains(containerText)).toBeTruthy();
  });
});
