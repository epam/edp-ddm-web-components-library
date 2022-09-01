import React from 'react';
import { shallow } from 'enzyme';
import FolderIcon from '../FolderIcon';

describe('FolderIcon', () => {
  it('should render span', () => {
    const wrapper = shallow(<FolderIcon />);
    expect(wrapper.find('span')).toBeTruthy();
    expect(wrapper.find('span').text()).toEqual('📂');
  });
});
