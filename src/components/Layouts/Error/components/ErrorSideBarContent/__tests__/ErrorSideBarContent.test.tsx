import React from 'react';
import { shallow } from 'enzyme';
import Typography from 'components/Typography';
import LinkMail from 'components/LinkMail';
import ErrorSideBarContent from '../ErrorSideBarContent';

describe('ErrorSideBarContent', () => {
  const props = {
    title: 'Title',
    description: 'Description',
    mail: {
      email: 'test@test.com',
      subject: 'Subject',
      body: 'Some text body',
    },
    errorData: [
      {
        name: 'Trace ID',
        value: '66535da7-bc2b-4966-a9b8-d45642b4fb79',
      },
      {
        name: 'Page url',
        value: 'https://test.com',
      },
    ],
  };
  it('should render traceId', () => {
    const wrapper = shallow(<ErrorSideBarContent {...props} />);
    expect(wrapper.find(Typography).findWhere((n) => n.text() === 'Title').length).toBeTruthy();
  });

  it('should render LinkMail component with correct props', () => {
    const wrapper = shallow(<ErrorSideBarContent {...props} />);
    expect(wrapper.find(LinkMail).props().body)
      .toBe('Some text body %0D%0ATrace ID: 66535da7-bc2b-4966-a9b8-d45642b4fb79,%0D%0APage url: https://test.com');
  });
});
