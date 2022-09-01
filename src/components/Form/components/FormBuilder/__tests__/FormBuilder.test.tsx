import React from 'react';
import { shallow } from 'enzyme';
import { FormBuilder as FormioFormBuilder } from 'react-formio';

import FormBuilder from '../FormBuilder';

describe('FormBuilder', () => {
  it('should render FormioFormBuilder', () => {
    const wrapper = shallow(<FormBuilder
      formSchema={{}}
      onChange={() => {}}
      language="ua"
      localization={{
        basicTitle: 'basic',
        advancedTitle: 'advanced',
        premiumTitle: 'premium',
        autocompleteDescription: 'autocompleteDescription',
      }}
    />);
    expect(wrapper.find(FormioFormBuilder).exists()).toBeTruthy();
  });
});
