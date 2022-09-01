import React from 'react';
import { shallow } from 'enzyme';
import { Form } from 'react-formio';

import FormioForm from '..';

describe('Form', () => {
  const i18n = { language: 'ua' };

  it('Form should render FormioForm', () => {
    const wrapper = shallow(<FormioForm language="ua" onSubmit={() => {}} />);
    expect(wrapper.find(Form).exists()).toBeTruthy();
  });
});
