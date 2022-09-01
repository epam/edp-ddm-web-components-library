import React from 'react';
import { shallow } from 'enzyme';
import * as EU from 'vendor/eusign';
import SignatureService from 'services/signature';

import SignatureWidget from '../SignatureWidget';

const { EndUser } = EU;

jest.mock('vendor/eusign', () => ({
  EndUser: jest.fn(),
}));

const EndUserMock = EndUser as jest.Mock;

Object.defineProperties(EndUserMock, {
  FormType: { value: '' },
  SignAlgo: {
    value: {
      DSTU4145WithGOST34311: 'foo',
    },
  },
  SignType: {
    value: {
      CAdES_X_Long: 'bar',
    },
  },
});

jest.mock('services/signature', () => {
  return jest.fn();
});

const SignatureServiceMock = SignatureService as jest.Mock;

describe('SignatureWidget', () => {
  beforeEach(() => {
    SignatureServiceMock.mockImplementation(() => ({
      readPrivateKey: jest.fn(() => Promise.resolve()),
      resetKey: jest.fn(() => Promise.resolve()),
    }));
  });

  const props: any = {
    text: 'some text',
    onSignText: jest.fn(),
    t: jest.fn(),
    classes: {},
    onLoadingChange: jest.fn(),
  };
  describe('componentDidMount', () => {
    it('should subscribe to signature key reading', () => {
      const readPrivateKey = jest.fn(() => Promise.resolve());
      SignatureServiceMock.mockReturnValue({ readPrivateKey });
      const wrapper = shallow(<SignatureWidget {...props} />);

      (wrapper.instance() as SignatureWidget).componentDidMount();
      expect(readPrivateKey).toHaveBeenCalled();
    });
    it('should subscribe to iframe loading event', () => {
      const wrapper = shallow(<SignatureWidget {...props} />);
      const componentInstance = wrapper.instance() as SignatureWidget;
      const loadIframeHandler = () => 'hello handler';
      componentInstance.onLoadIframe = loadIframeHandler;
      const creteElementMock = jest.spyOn(document, 'getElementById');
      creteElementMock.mockReturnValue({
        addEventListener: jest.fn(),
        remove: jest.fn(),
        setAttribute: jest.fn(),
      } as any);
      (componentInstance).componentDidMount();

      expect(componentInstance.iframe?.addEventListener).toHaveBeenCalledWith('load', loadIframeHandler);
      creteElementMock.mockRestore();
    });
    it('should set signature key info and isKeyReady after key is read', async () => {
      function flushPromises() {
        return new Promise((resolve) => setImmediate(resolve));
      }
      expect.assertions(1);
      const keyInfo = [{ some: 'keyInfo' }];
      const ReadPrivateKeyMock = jest.fn(() => Promise.resolve<any[]>(keyInfo));
      SignatureServiceMock.mockReturnValue({ readPrivateKey: ReadPrivateKeyMock });
      const wrapper = shallow(<SignatureWidget {...props} />);
      (wrapper.instance() as SignatureWidget).componentDidMount();
      await flushPromises();
      expect(wrapper.instance().state).toMatchObject(({ keyInfo, isSignKeyReady: true }));
    });
  });
  describe('componentWillUnmount', () => {
    it('should unsubscribe from iframe load event on unmount', () => {
      const wrapper = shallow(<SignatureWidget {...props} />);
      const componentInstance = wrapper.instance() as SignatureWidget;
      const loadIframeHandler = () => 'hello handler';
      componentInstance.onLoadIframe = loadIframeHandler;
      (componentInstance).componentDidMount();
      componentInstance.iframe = document.createElement('iframe');
      componentInstance.iframe.removeEventListener = jest.fn();
      componentInstance.componentWillUnmount();

      expect(componentInstance.iframe.removeEventListener).toHaveBeenCalledWith('load', loadIframeHandler);
    });
  });
  describe('class methods', () => {
    it('setLoading should call onLoadingChange method', () => {
      const wrapper = shallow(<SignatureWidget {...props} />);
      (wrapper.instance() as SignatureWidget).setLoading(true);
      expect(props.onLoadingChange).toHaveBeenCalledWith(true);
      (wrapper.instance() as SignatureWidget).setLoading(false);
      expect(props.onLoadingChange).toHaveBeenCalledWith(false);
    });
    it('onLoadIframe should call setLoading method with false value', () => {
      const wrapper = shallow(<SignatureWidget {...props} />);
      const componentInstance = wrapper.instance() as SignatureWidget;
      componentInstance.setLoading = jest.fn();
      componentInstance.onLoadIframe();
      expect(componentInstance.setLoading).toHaveBeenCalledWith(false);
    });
    it('handleResetKey should set keyInfo null, call signature lib method resetKey', () => {
      const wrapper = shallow(<SignatureWidget {...props} />);
      const componentInstance = wrapper.instance() as SignatureWidget;
      const resetKeyMock = jest.fn(() => Promise.resolve());
      SignatureServiceMock.mockReturnValue({ resetKey: resetKeyMock });
      componentInstance.signLib = new SignatureServiceMock();
      componentInstance.state = {
        isSignKeyReady: true,
        keyInfo: [{ some: 'info' }] as any,
      };

      componentInstance.handleResetKey();
      expect(componentInstance.state).toMatchObject({ isSignKeyReady: false, keyInfo: null });
      expect(resetKeyMock).toHaveBeenCalled();
    });
    it('handleSignText should call signature lib method signData', () => {
      const wrapper = shallow(<SignatureWidget {...props} />);
      const componentInstance = wrapper.instance() as SignatureWidget;
      const signDataMock = jest.fn(() => Promise.resolve());
      SignatureServiceMock.mockReturnValue({ signData: signDataMock });
      componentInstance.signLib = new SignatureServiceMock();

      componentInstance.handleSignText();
      expect(signDataMock).toHaveBeenCalled();
    });
  });
});
