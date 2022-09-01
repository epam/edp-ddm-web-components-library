import React from 'react';
import { shallow } from 'enzyme';
import Typography from 'components/Typography';

import MenuEmptyListPlaceholder from '../MenuEmptyListPlaceholder';

describe('MenuEmptyListPlaceholder', () => {
  const props: any = {
    message: 'message text',
    description: 'description text',
  };

  it('should render Typography component with message', () => {
    const wrapper = shallow(<MenuEmptyListPlaceholder {...props} />);
    expect(wrapper.find(Typography).at(1).render().text()).toEqual('message text');
  });
});
