import { Formio } from 'react-formio';
import { createMuiTheme } from '@material-ui/core/styles';
import * as utils from 'utils';
import * as icons from 'components/Icons';
import AccountMenu from './components/AccountMenu';
import Button from './components/Button';
import FlashMessage from './components/FlashMessage';
import Container from './components/Container';
import Divider from './components/Divider';
import IconButton from './components/IconButton';
import StandardLayout from './components/Layouts/Standard';
import SidebarLayout from './components/Layouts/Sidebar';
import ErrorLayout from './components/Layouts/Error';
import Link from './components/Link';
import Loader from './components/Loader';
import Typography from './components/Typography';
import MenuPanel from './components/MenuPanel';
import Table from './components/Table';
import Popper from './components/Popper';
import PopperButton from './components/PopperButton';
import Input from './components/FormControls/Input';
import Checkbox from './components/FormControls/Checkbox';
import DateTimePicker from './components/FormControls/DateTimePicker';
import Switch from './components/Switch';
import Navbar from './components/Navbar';
import Form, { FormBuilder } from './components/Form';
import FormioModule from './components/Form/FormioModule';
import LinkBack from './components/LinkBack';
import ButtonCell from './components/Table/Cells/ButtonCell';
import Tabs from './components/Tabs';
import SignatureWidget from './components/SignatureWidget';
import ColoredBox from './components/ColoredBox';
import PropertyValueItem from './components/PropertyValueItem';
import MenuList from './components/MenuList';
import MenuItem from './components/MenuList/components/MenuItem';
import Chip from './components/Chip';
import { ThemeColors } from './types/theme';

declare module '@material-ui/core/styles' {
  interface Theme {
    colors: ThemeColors,
  }
  interface ThemeOptions {
    colors?: Partial<ThemeColors>
  }
}

export { ButtonVariants } from './components/Button';
export {
  AccountMenu,
  Button,
  ButtonCell,
  Container,
  Divider,
  IconButton,
  StandardLayout,
  SidebarLayout,
  ErrorLayout,
  Link,
  LinkBack,
  Loader,
  Typography,
  MenuPanel,
  Table,
  Popper,
  PopperButton,
  Input,
  Checkbox,
  Switch,
  Navbar,
  FlashMessage,
  Form,
  FormBuilder,
  utils,
  icons,
  Formio,
  FormioModule,
  Tabs,
  SignatureWidget,
  ColoredBox,
  PropertyValueItem,
  MenuList,
  MenuItem,
  Chip,
  createMuiTheme,
  DateTimePicker,
};

export * as STYLES from './styles';
