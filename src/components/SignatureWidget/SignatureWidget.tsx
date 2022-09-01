import React from 'react';
import clsx from 'clsx';
import { WithStyles } from '@material-ui/core';

import SignatureService from 'services/signature';
import { ReadKeyResponse } from 'types/signature';
import Button, { ButtonVariants } from 'components/Button';
import Typography from 'components/Typography';
import { ButtonComponent } from 'components/Form/types';
import styles from './SignatureWidget.styles';
import ButtonGroup from './components/ButtonGroup';

const SIGN_WIDGET_PARENT_ID = 'sign-widget-parent';
const SIGN_WIDGET_ID = 'sign-widget';
export interface SignatureWidgetProps extends WithStyles<typeof styles> {
  onLoadingChange?: (isLoading: boolean) => void;
  onSignText: (text: string) => void;
  onError?: (message: string) => void;
  onSignKeyReady?: (status: boolean) => void;
  onNavigation?: (actionCode: string) => void;
  dataToSign: Record<string, unknown> | string;
  xpathConfig?: {
    changeKeyButton?: string,
    signButton?: string,
  };
  changeKeyButtonCaption: string;
  signButtonCaption: string;
  signDataTitle: string;
  readKeyTitle: string;
  organizationCaption: string;
  rnokppCaption: string;
  edrpouCaption: string;
  signWidgetUri: string;
  signWidgetParentId?: string;
  signWidgetId?: string;
  navigationButton?: ButtonComponent[];
}

interface State {
  keyInfo: ReadKeyResponse[] | null,
  isSignKeyReady: boolean,
}

export default class SignatureWidget extends React.Component<SignatureWidgetProps, State> {
  state = {
    isSignKeyReady: false,
    keyInfo: null,
  };

  setLoading = this.props.onLoadingChange || (() => undefined);

  onError = this.props.onError || (() => undefined);

  onSignKeyReady = this.props.onSignKeyReady || (() => undefined);
  
  onNavigation = this.props.onNavigation || (() => undefined);

  signLib: SignatureService | null = null;

  iframe: HTMLElement | null = null;

  componentDidMount() {
    const { signWidgetUri, signWidgetParentId = SIGN_WIDGET_PARENT_ID, signWidgetId = SIGN_WIDGET_ID } = this.props;
    this.setLoading(true);
    const instance = new SignatureService(signWidgetParentId, signWidgetUri, signWidgetId);
    instance
      .readPrivateKey()
      .then((data) => {
        this.handleChange('keyInfo')(data);
        this.handleChange('isSignKeyReady')(true);
        this.onSignKeyReady(true);
      })
      .catch((e) => {
        this.handleChange('isSignKeyReady')(false);
        this.onError(e);
        this.onSignKeyReady(false);
      });
    this.iframe = document.getElementById(instance.SIGN_WIDGET_ID);

    this.iframe?.addEventListener('load', this.onLoadIframe);
    this.iframe?.setAttribute('sandbox', '');
    this.signLib = instance;
  }

  componentWillUnmount() {
    this.iframe?.removeEventListener('load', this.onLoadIframe);
  }

  onLoadIframe = () => {
    this.setLoading(false);
  };

  handleResetKey = () => {
    this.handleChange('isSignKeyReady')(false);
    this.handleChange('keyInfo')(null);
    this.signLib
      ?.resetKey()
      .then(() => {
        return this.signLib?.readPrivateKey();
      })
      .then((data) => {
        this.handleChange('keyInfo')(data || null);
        this.handleChange('isSignKeyReady')(true);
      })
      .catch((e) => {
        this.handleChange('isSignKeyReady')(false);
        this.onError(e);
      });
  };

  handleSignText = () => {
    const dataToSign = typeof (this.props.dataToSign) === 'string'
      ? this.props.dataToSign : JSON.stringify(this.props.dataToSign);
    this.setLoading(true);
    this.signLib
      ?.signData(dataToSign)
      .then((sign) => {
        this.props.onSignText(sign);
      })
      .catch((e) => {
        this.onError(e);
      })
      .finally(() => {
        this.setLoading(false);
      });
  };

  handleChange = (name: keyof State) => (value: boolean | ReadKeyResponse[] | null) => {
    this.setState({
      [name]: value,
    } as unknown as State);
  };

  render() {
    const {
      classes,
      xpathConfig,
      signButtonCaption,
      changeKeyButtonCaption,
      signDataTitle,
      readKeyTitle,
      organizationCaption,
      rnokppCaption,
      edrpouCaption,
      navigationButton,
    } = this.props;
    const { isSignKeyReady, keyInfo: keyInfoUnknown } = this.state;
    const keyInfo = keyInfoUnknown as ReadKeyResponse[] | null;
    return (
      <div>
        <Typography variant="h2" className={classes.title}>
          {isSignKeyReady ? signDataTitle : readKeyTitle}
        </Typography>
        <div
          id={SIGN_WIDGET_PARENT_ID}
          className={clsx(classes.frameContainer, isSignKeyReady && classes.hide)}
        />
        {isSignKeyReady && keyInfo && (
          <>
            <div className={classes.keyInfo}>
              <Typography
                variant="h5"
                className={classes.name}
              >
                {keyInfo[0].infoEx.subjFullName}
              </Typography>
              <Typography variant="tinyText" className={classes.caption}>
                {organizationCaption}
              </Typography>
              <Typography
                variant="bodyText"
                className={classes.gutterBottom}
              >
                {keyInfo[0].infoEx.subjOrg}
              </Typography>
              <Typography variant="tinyText" className={classes.caption}>
                {rnokppCaption}
              </Typography>
              <Typography
                variant="bodyText"
                className={classes.gutterBottom}
              >
                {keyInfo[0].infoEx.subjDRFOCode}
              </Typography>
              {keyInfo[0].infoEx.subjEDRPOUCode && (
              <>
                <Typography variant="tinyText" className={classes.caption}>{edrpouCaption}</Typography>
                <Typography variant="bodyText">
                  {keyInfo[0].infoEx.subjEDRPOUCode}
                </Typography>
              </>
              )}
            </div>
            <div className={classes.buttonContainer}>
              <Button
                onClick={this.handleResetKey}
                className={classes.button}
                variant={ButtonVariants.secondary}
                data-xpath={xpathConfig?.changeKeyButton}
              >
                {changeKeyButtonCaption}
              </Button>
              <Button onClick={this.handleSignText} className={classes.button} data-xpath={xpathConfig?.signButton}>
                {signButtonCaption}
              </Button>
            </div>
          </>
        )}
        {!!navigationButton?.length && (
          <ButtonGroup
            buttons={navigationButton}
            onClick={this.onNavigation}
          />
        )}
      </div>
    );
  }
}
