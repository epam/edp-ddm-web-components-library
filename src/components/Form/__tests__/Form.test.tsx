import React from 'react';
import { shallow } from 'enzyme';

import FormioForm from '../components/FormioForm';

import Form from '..';

describe('Form', () => {
  const language = 'ua';

  it('Form should not render FormioForm with empty components', () => {
    const wrapper = shallow(<Form language={language} onSubmit={() => ({})} />);
    expect(wrapper.find(FormioForm).exists()).toBeFalsy();
  });

  it('Form should render FormioForm', () => {
    const wrapper = shallow(<Form language={language} onSubmit={() => ({})} components={[{} as any]} />);
    expect(wrapper.find(FormioForm).exists()).toBeTruthy();
  });
});
