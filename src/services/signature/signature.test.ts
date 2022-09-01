import * as EU from 'vendor/eusign';
import SignatureService from './signature';

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

describe('Signature service', () => {
  beforeEach(() => {
    EndUserMock.mockClear();
  });

  const signatureConstructorArgs = ['some-parent-id', 'some-widget-uri', 'some-widget-id'] as const;

  it('should create EndUser instance', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const signatureService = new SignatureService(...signatureConstructorArgs);
    expect(EndUserMock).toHaveBeenCalled();
  });
  it('resetKey should call ResetPrivateKey method', () => {
    const ResetKeyMock = jest.fn();
    EndUserMock.mockReturnValue({ ResetPrivateKey: ResetKeyMock });

    const signatureService = new SignatureService(...signatureConstructorArgs);
    signatureService.resetKey();
    expect(ResetKeyMock).toHaveBeenCalled();
  });
  it('readPrivateKey should call ReadPrivateKey method', () => {
    const ReadPrivateKeyMock = jest.fn();
    EndUserMock.mockReturnValue({ ReadPrivateKey: ReadPrivateKeyMock });

    const signatureService = new SignatureService(...signatureConstructorArgs);
    signatureService.readPrivateKey();
    expect(ReadPrivateKeyMock).toHaveBeenCalled();
  });
  it('signData should call SignData method with correct arguments', () => {
    const SignDataMock = jest.fn();
    EndUserMock.mockReturnValue({ SignData: SignDataMock });

    const signatureService = new SignatureService(...signatureConstructorArgs);
    const signText = 'some sign data';
    const external = true;
    const asBase64String = true;
    const signAlgo = EndUser.SignAlgo.DSTU4145WithGOST34311;
    const signType = EndUser.SignType.CAdES_X_Long;
    signatureService.signData(signText);
    expect(SignDataMock).toHaveBeenCalledWith(signText, external, asBase64String, signAlgo, null, signType);
  });
  it('signData should throw error if SignData method throw error', async () => {
    expect.assertions(1);
    const SignDataMock = jest.fn(() => {
      throw new Error('Some lib error');
    });
    EndUserMock.mockReturnValue({ SignData: SignDataMock });

    const signatureService = new SignatureService(...signatureConstructorArgs);
    const signText = 'some sign data';
    try {
      await signatureService.signData(signText);
    } catch (error) {
      expect(error).toEqual(new Error('Some lib error'));
    }
  });
  it('should remove lib iframe if he exists', () => {
    const removeMock = jest.fn();
    document.getElementById = jest.fn().mockReturnValue({ remove: removeMock });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const signatureService = new SignatureService(...signatureConstructorArgs);
    expect(removeMock).toHaveBeenCalled();
  });
});
