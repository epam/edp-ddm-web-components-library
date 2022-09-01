import React from 'react';
import { shallow } from 'enzyme';
import Modal from '../Modal';

describe('Modal', () => {
  const ChildComponent = () => <>Child</>;
  const classes = {} as any;

  it('should render children', () => {
    const wrapper = shallow(<Modal isOpen onOpenChange={() => {}} classes={classes}> <ChildComponent /> </Modal>);
    expect(wrapper.find(ChildComponent).length).toBeTruthy();
  });

  describe('handleClose', () => {
    it('should not render children on closed modal', () => {
      const onOpenChange = jest.fn();
      const wrapper = shallow(<Modal isOpen onOpenChange={onOpenChange} classes={classes}> <ChildComponent /> </Modal>);
      const instance = wrapper.instance() as Modal;

      instance.handleClose();

      expect(onOpenChange).toHaveBeenCalledWith(false);
    });
  });
});
