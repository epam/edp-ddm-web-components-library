import { GridSize } from '@material-ui/core';

type ComponentType = 'textfield'
| 'checkbox'
| 'textarea'
| 'number'
| 'email'
| 'datetime'
| 'selectboxes'
| 'radio'
| 'phoneNumber'
| 'button'
| 'editgrid'
| 'day'
| 'select'
| 'file'
| 'columns';

type FormType = 'form';
type LabelPosition = 'top' | 'right';
type InputFormat = 'plain';
type FormDisplay = 'form';
type FromAccessType = {
  roles: Array<string>;
  type: 'read_all';
};
type DatePickerMode = 'day';

interface DatePicker {
  showWeeks: boolean,
  startingDay: 0 | 1 | 2 | 3 | 4 | 5 | 6,
  initDate: '',
  minMode: 'day',
  maxMode: 'year',
  yearRows: number,
  yearColumns: number,
  minDate: null,
  maxDate: null,
  datepickerMode: DatePickerMode,
  disableFunction?: string,
  disableWeekends?: boolean,
  disableWeekdays?: boolean
}

interface TimePicker {
  hourStep: number,
  minuteStep: number,
  showMeridian: boolean,
  readonlyInput: boolean,
  mousewheel: boolean,
  arrowkeys: boolean,
}

export interface TextComponent extends CommonComponentFields {
  type: 'textfield' | 'textarea';
  placeholder: string;
  prefix: string;
  suffix: string;
  inputType: 'text';
  spellcheck: boolean;
  tags: Array<string>
  inputMask: string;
  mask: boolean;
  inputMaskPlaceholderChar: string;
  case: 'uppercase' | 'lowercase' | 'mixed';
}

export interface NumberComponent extends CommonComponentFields {
  type: 'number';
  placeholder: string;
  prefix: string;
  suffix: string;
  inputType: 'number';
  spellcheck: boolean;
  tags: Array<string>;
  mask: boolean;
  decimalLimit?: number;
  delimiter: boolean;
  customDefaultValue: string;
  requireDecimal: boolean;
}

export interface TextAreaComponent extends TextComponent {
  autoExpand: boolean;
  type: 'textarea'
}

interface SelectBoxComponent extends CommonComponentFields {
  type: 'selectboxes';
  values: Array<{ value: string, label: string, shortcut: string }>;
  optionsLabelPosition: LabelPosition;
}

export interface RadioComponent extends CommonComponentFields {
  type: 'radio';
  inputType: 'radio';
  values: Array<{ value: string, label: string, shortcut: string }>;
  inline: boolean;
  fieldSet: boolean;
  tags: Array<string>;
  disabled?: boolean;
  optionsLabelPosition?: 'top' | 'left' | 'right' | 'bottom'
}

export interface EmailComponent extends CommonComponentFields {
  type: 'email';
  inputType: 'email';
  placeholder: string;
  prefix: string;
  suffix: string;
  mask: boolean;
}

interface PhoneNumberComponent extends Omit<TextComponent, 'type' | 'inputType' | 'spellcheck'>, CommonComponentFields {
  type: 'phoneNumber';
  inputType: 'tel'
}

export interface DateTimeComponent extends CommonComponentFields {
  type: 'datetime';
  format: string;
  enableDate: boolean;
  allowInput: boolean;
  enableTime: boolean;
  defaultDate: string;
  datepickerMode: DatePickerMode;
  datePicker: DatePicker;
  timePicker: TimePicker;
  placeholder: string;
  tags: Array<string>;
}

interface CheckboxComponent extends CommonComponentFields {
  type: 'checkbox';
  inputType: 'checkbox';
  tags: Array<string>;
}

export interface ButtonComponent extends CommonComponentFields {
  id?: string;
  type: 'button';
  size: 'md';
  leftIcon?: string;
  rightIcon?: string;
  block: boolean;
  action: 'submit' | 'event' | 'navigation';
  disableOnInvalid: boolean;
  theme: 'primary' | 'secondary' | 'cancel';
  input: boolean;
  label: string;
  tableView: boolean;
  key: string;
  autofocus: boolean;
  components: null;
  disabled?: boolean;
  event?: string;
  actionCode?: string;
}

export interface DayComponent extends CommonComponentFields {
  type: 'day';
  key: string;
  dayFirst: boolean;
}

export interface EditGridComponent extends CommonComponentFields {
  type: 'editgrid';
  components?: Array<FormComponent>;
  disableAddingRemovingRows?: boolean;
  addAnother?: string;
  saveRow?: string;
  removeRow?: string;
}

export interface FileComponent extends CommonComponentFields {
  type: 'file';
  options?: Record<string, unknown>;
  url: string;
}

export interface ColumnsComponent extends CommonComponentFields {
  type: FormioComponentName.columns;
  columns: Column[];
}

export interface SelectComponent extends CommonComponentFields {
  type: 'select';
  dataSrc: 'url' | 'values' | 'custom';
  valueProperty: string;
  data: {
    url: string;
    values: Array<unknown>;
  };
  searchField: string;
  placeholder?: string;
  lazyLoad?: boolean;
  limit: number;
  disableLimit: boolean;
  minSearch: number;
}

export type FormComponent = ButtonComponent
| SelectBoxComponent
| TextComponent
| TextAreaComponent
| DateTimeComponent
| CheckboxComponent
| EmailComponent
| RadioComponent
| PhoneNumberComponent
| DayComponent
| EditGridComponent
| SelectComponent
| FileComponent
| ColumnsComponent;

interface CommonComponentFields {
  id?: string;
  input: boolean;
  tableView: boolean;
  label: string;
  key: string;
  multiple?: boolean;
  disabled?: boolean;
  defaultValue?: string | boolean;
  description?: string;
  protected?: boolean;
  unique?: boolean;
  persistent?: boolean;
  validate?: {
    required: boolean;
    minLength?: number | '';
    maxLength?: number | '';
    pattern?: string;
    custom?: string;
    customPrivate?: boolean;
  };
  conditional?: { show: string; when: null; eq: string };
  type: ComponentType;
  lockKey?: boolean;
  autofocus: boolean;
  hidden: boolean;
  clearOnHide: boolean;
  labelPosition?: LabelPosition;
  inputFormat?: InputFormat;
  properties?: Record<string, unknown>;
  dataGridLabel?: string | false;
  name?: string;
  filter?: string;
  value?: string;
  hideLabel?: boolean;
  kickbox?: { enabled: boolean };
  tabindex?: string;
  customDefaultValue: string;
  autocomplete?: string;
}

export interface Form {
  _id?: string;
  type?: FormType;
  tags?: [];
  owner?: string;
  components: Array<FormComponent>;
  title?: string;
  display?: FormDisplay;
  name?: string;
  path?: string;
  access?: Array<FromAccessType>;
  submissionAccess?: [];
  created?: string;
  modified?: string;
  machineName?: string;
}

export interface FormSubmission<T = Record<string, unknown>> {
  data: T;
  metadata?: {
    browserName: string;
    offset: number;
    onLine: boolean;
    origin: string;
    pathName: string;
    referrer: string;
    timezone: string;
    userAgent: string;
  }
  state?: 'submitted',
}

export interface FormChangeEvent extends Omit<FormSubmission, 'state'> {
  isValid: boolean;
  changed: unknown;
}

export type ComponentsConfig = {
// eslint-disable-next-line @typescript-eslint/no-explicit-any
  components: Record<string, any>,
};

export interface FormValidationError {
  message?: string;
}

export interface FileShortResponse {
  checksum: string;
  id: string;
}
export interface FileFullResponse {
  size: number;
  url: string;
  name: string;
  data: {
    size: number,
    url: string,
    name: string,
    checksum: string,
    id: string,
  }
}

export interface FormioError {
  message: string;
  messages: Array<{
    id: string,
    message: string;
    context: { key: string };
  }>,
}

export enum FormioComponentName {
  address = 'address',
  base = 'base',
  component = 'component',
  componentmodal = 'componentmodal',
  button = 'button',
  checkbox = 'checkbox',
  columns = 'columns',
  container = 'container',
  content = 'content',
  currency = 'currency',
  datagrid = 'datagrid',
  datamap = 'datamap',
  datetime = 'datetime',
  day = 'day',
  editgrid = 'editgrid',
  email = 'email',
  input = 'input',
  field = 'field',
  multivalue = 'multivalue',
  fieldset = 'fieldset',
  file = 'file',
  form = 'form',
  hidden = 'hidden',
  htmlelement = 'htmlelement',
  nested = 'nested',
  nesteddata = 'nesteddata',
  nestedarray = 'nestedarray',
  number = 'number',
  panel = 'panel',
  password = 'password',
  phoneNumber = 'phoneNumber',
  radio = 'radio',
  recaptcha = 'recaptcha',
  resource = 'resource',
  select = 'select',
  selectboxes = 'selectboxes',
  signature = 'signature',
  survey = 'survey',
  table = 'table',
  tabs = 'tabs',
  tags = 'tags',
  textarea = 'textarea',
  textfield = 'textfield',
  time = 'time',
  tree = 'tree',
  unknown = 'unknown',
  selectExperimental = 'selectExperimental',
  url = 'url',
  well = 'well',

  checkboxLegacy = 'checkboxLegacy',
  radioLegacy = 'radioLegacy',
  textfieldLegacy = 'textfieldLegacy',
  numberLegacy = 'numberLegacy',
  emailLegacy = 'emailLegacy',
  datetimeLegacy = 'datetimeLegacy',
  contentLegacy = 'contentLegacy',
  selectLegacy = 'selectLegacy',
  textareaLegacy = 'textareaLegacy',
  fileLegacy = 'fileLegacy',
  editgridLegacy = 'editgridLegacy',
  fieldsetLegacy = 'fieldsetLegacy',
  columnsLegacy = 'columnsLegacy',
  tableLegacy = 'tableLegacy',

  checkboxLatest = 'checkboxLatest',
  radioLatest = 'radioLatest',
  textfieldLatest = 'textfieldLatest',
  numberLatest = 'numberLatest',
  emailLatest = 'emailLatest',
  datetimeLatest = 'datetimeLatest',
  contentLatest = 'contentLatest',
  selectLatest = 'selectLatest',
  textareaLatest = 'textareaLatest',
  fileLatest = 'fileLatest',
  editgridLatest = 'editgridLatest',
  fieldsetLatest = 'fieldsetLatest',
  columnsLatest = 'columnsLatest',
  tableLatest = 'tableLatest',
}

export type TaskData<T = Record<string, unknown>> = T;

export interface FileMetadata {
  id: string;
  url: string;
  name: string;
  size: number;
  type: string;
  checksum: string;
}

export enum FORMIO_EVENT {
  CANCEL = 'formio.cancel',
  NAVIGATION = 'formio.navigation',
}

export type Column = {
  components: FormComponent[];
  width: GridSize;
  offset: number;
  push: number;
  pull: number;
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};
