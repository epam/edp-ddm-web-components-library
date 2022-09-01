import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import '@testing-library/jest-dom/extend-expect';
configure({ adapter: new Adapter() });

jest.spyOn(global.console, 'warn').mockImplementation(() => jest.fn());

jest.mock('@material-ui/core/styles', () => {
    const styles = jest.requireActual('@material-ui/core/styles');
  
    const createMuiTheme = jest.requireActual(
      '@material-ui/core/styles/createMuiTheme',
    ).default;
  
    return {
      ...styles,
      makeStyles: (func: { bind: (arg0: null, arg1: any) => any; }) => {
        const theme = createMuiTheme({ colors: {} });
        return styles.makeStyles(func.bind(null, theme));
      },
    };
});