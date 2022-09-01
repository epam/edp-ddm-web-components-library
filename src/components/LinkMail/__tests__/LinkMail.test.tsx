import React from 'react';
import { shallow } from 'enzyme';

import Typography from 'components/Typography';
import LinkMail from '../LinkMail';

describe('LinkMail', () => {
  it('should contain a link to passed location', () => {
    const wrapper = shallow(<LinkMail email="test@test.com" subject="Subject" body="Some text body" />);
    expect(wrapper.find(Typography)).toHaveLength(1);
    expect(wrapper.find(Typography).props().children).toEqual('test@test.com');
  });
});
