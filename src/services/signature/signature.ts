// eslint-disable-next-line @typescript-eslint/no-var-requires
import * as EU from 'vendor/eusign';
import { ReadKeyResponse } from 'types/signature';

const { EndUser } = EU;

export {
  EndUser,
};

export type EndUserType = typeof EndUser;

class SignatureLib {
  public lib: EndUserType;

  /*
    Ідентифікатор iframe, який завантажує сторінку SignWidget
  */
  public SIGN_WIDGET_ID: string;

  /*
    URI з адресою за якою розташована сторінка SignWidget
  */
  public SIGN_WIDGET_URI: string;

  public SIGN_WIDGET_PARENT_ID: string;

  constructor(signWidgetParentId: string, signWidgetUri: string, signWidgetId: string) {
    this.SIGN_WIDGET_PARENT_ID = signWidgetParentId;
    this.SIGN_WIDGET_ID = signWidgetId;
    this.SIGN_WIDGET_URI = signWidgetUri;

    const iframe = document.getElementById(this.SIGN_WIDGET_ID);
    if (iframe) {
      iframe.remove();
    }

    /*
      Створення об'єкту типу EndUser для взаємодії з iframe,
      який завантажує сторінку SignWidget
    */
    this.lib = new EndUser(
      this.SIGN_WIDGET_PARENT_ID,
      this.SIGN_WIDGET_ID,
      this.SIGN_WIDGET_URI,
      EndUser.FormType.ReadPKey,
      {
        ownCAOnly: false,
        showPKInfo: false,
      },
    );
  }

  resetKey = async () => {
    return this.lib.ResetPrivateKey();
  };

  readPrivateKey = async (): Promise<ReadKeyResponse[]> => {
    return this.lib.ReadPrivateKey();
  };

  signData = async (text: string) => {
    const external = true;
    const asBase64String = true;
    const signAlgo = EndUser.SignAlgo.DSTU4145WithGOST34311;
    const signType = EndUser.SignType.CAdES_X_Long;
    // const signType = EndUser.SignType.CAdES_BES;
    try {
      const sign = await this.lib.SignData(text, external, asBase64String, signAlgo, null, signType);
      return sign;
    } catch (error) {
      throw new Error(error.message || error);
    }
  };
}

export default SignatureLib;
