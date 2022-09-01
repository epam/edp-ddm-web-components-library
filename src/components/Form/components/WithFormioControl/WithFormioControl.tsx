import { Theme } from '@material-ui/core';
import { isEqual } from 'lodash';
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

interface Props {
  value: unknown;
  onChange: (value: unknown, flags?: Record<string, unknown>) => void;
}

interface ProviderProps {
  theme: Theme;
}

interface State {
  value: unknown;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const withFormioControl = <P extends Props>(Component: React.ComponentType<P>) : any => {
  class WithFormioControl extends React.Component<P & ProviderProps, State> {
    constructor(props: P & ProviderProps) {
      super(props);
      this.state = {
        value: props.value,
      };
    }

    componentDidUpdate(prevProps: Props) {
      const { value } = this.props;
      if (!isEqual(prevProps.value, value)) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({ value });
      }
    }

    setValue = (value: unknown) => {
      this.setState(
        () => ({ value }),
        () => this.props.onChange(this.state.value),
      );
    };

    render() {
      const {
        value, onChange, theme, ...props
      } = this.props;
      const { value: stateValue } = this.state;

      return (
        <ThemeProvider theme={theme}>
          <Component {...props as P} theme={theme} value={stateValue} onChange={this.setValue} />
        </ThemeProvider>
      );
    }
  }

  return WithFormioControl;
};

export default withFormioControl;
