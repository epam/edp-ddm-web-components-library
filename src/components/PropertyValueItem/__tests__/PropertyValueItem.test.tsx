import React from 'react';
import { shallow } from 'enzyme';
import Typography from 'components/Typography';

import PropertyValueItem from '../PropertyValueItem';

describe('PropertyValueItem', () => {
  const props: any = {
    property: 'Property Text',
    value: 'Value Text',
  };

  it('should render Typography component with property content', () => {
    const wrapper = shallow(<PropertyValueItem {...props} />);
    expect(wrapper.find(Typography).at(0).render().text()).toEqual('Property Text');
  });

  it('should render Typography component with value content', () => {
    const wrapper = shallow(<PropertyValueItem {...props} />);
    expect(wrapper.find(Typography).at(1).render().text()).toEqual('Value Text');
  });
});
