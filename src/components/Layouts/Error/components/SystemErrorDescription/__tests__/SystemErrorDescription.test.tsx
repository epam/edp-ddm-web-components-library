import React from 'react';
import { shallow } from 'enzyme';
import Typography from 'components/Typography';
import { Box } from '@material-ui/core';
import SystemErrorDescription from '../SystemErrorDescription';

describe('SystemErrorDescription', () => {
  const fields = [
    {
      name: 'Trace ID',
      value: '66535da7-bc2b-4966-a9b8-d45642b4fb79',
    },
    {
      name: 'Page url',
      value: 'https://test.com',
    },
  ];
  it('should render fields', () => {
    const wrapper = shallow(<SystemErrorDescription title="title" fields={fields} />);
    expect(wrapper.find(Typography).findWhere((n) => n.text() === '66535da7-bc2b-4966-a9b8-d45642b4fb79').length)
      .toBeTruthy();

    expect(wrapper.find(Box).length).toBe(3);
  });
});
