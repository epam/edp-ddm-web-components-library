import React from 'react';
import { shallow } from 'enzyme';
import { TabPanelProps } from '../components/TabPanel/TabPanel';

import Tabs from '../Tabs';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TabPanel = (props: TabPanelProps) => <div />;

describe('Tabs', () => {
  const props = {
    classes: {},
    location: { search: '' },
  } as any;

  describe('activeIndex', () => {
    it('should pass correct index from state', () => {
      const wrapper = shallow(
        <Tabs {...props}>
          <TabPanel title="1" code="code1" />
          <TabPanel title="2" code="code2" />
        </Tabs>,
      );
      wrapper.setState({ activeIndex: 1 });
      const panels = wrapper.find(TabPanel);

      expect(panels.slice(0, 1).props().activeIndex).toEqual(1);
    });

    it('should pass correct index from props', () => {
      const wrapper = shallow(
        <Tabs {...props} activeIndex={2}>
          <TabPanel title="1" code="code1" />
          <TabPanel title="2" code="code2" />
        </Tabs>,
      );
      const panels = wrapper.find(TabPanel);

      expect(panels.slice(0, 1).props().activeIndex).toEqual(2);
    });
  });
});
