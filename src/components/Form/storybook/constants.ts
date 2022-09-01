export const components = [
  {
    label: 'Email',
    labelPosition: 'top',
    placeholder: '',
    description: 'description',
    tooltip: '',
    prefix: '',
    suffix: '',
    tabindex: '',
    hidden: false,
    hideLabel: false,
    mask: false,
    disabled: false,
    tableView: false,
    modalEdit: false,
    clearOnHide: true,
    customDefaultValue: '',
    validateOn: 'change',
    validate: {
      required: true,
      pattern: '',
      customMessage: '',
      custom: '',
      customPrivate: false,
      strictDateValidation: false,
      multiple: false,
      unique: false,
    },
    unique: false,
    key: 'emailLatest',
    conditional: {
      show: null,
      when: null,
      eq: '',
      json: '',
    },
    customConditional: '',
    type: 'emailLatest',
    input: true,
    customClass: '',
    multiple: false,
    protected: false,
    persistent: true,
    refreshOn: '',
    redrawOn: '',
    dataGridLabel: false,
    errorLabel: '',
    autofocus: false,
    dbIndex: false,
    calculateValue: '',
    calculateServer: false,
    widget: null,
    attributes: {},
    overlay: {
      style: '',
      left: '',
      top: '',
      width: '',
      height: '',
    },
    allowCalculateOverride: false,
    encrypted: false,
    showCharCount: false,
    showWordCount: false,
    properties: {},
    allowMultipleMasks: false,
    inputType: 'email',
    kickbox: {
      enabled: false,
    },
    id: 'e758uhl',
    defaultValue: null,
  },
  {
    label: 'Text Area',
    labelPosition: 'top',
    placeholder: '',
    description: 'description',
    tooltip: '',
    autoExpand: false,
    tabindex: '',
    hidden: false,
    hideLabel: false,
    disabled: false,
    tableView: false,
    modalEdit: false,
    case: '',
    clearOnHide: true,
    customDefaultValue: '',
    validateOn: 'change',
    validate: {
      required: true,
      pattern: '',
      customMessage: '',
      custom: '',
      customPrivate: false,
      minWords: '',
      maxWords: '',
      strictDateValidation: false,
      multiple: false,
      unique: false,
    },
    unique: false,
    key: 'textareaLatest',
    conditional: {
      show: null,
      when: null,
      eq: '',
      json: '',
    },
    customConditional: '',
    type: 'textareaLatest',
    wysiwyg: false,
    input: true,
    prefix: '',
    customClass: '',
    suffix: '',
    multiple: false,
    protected: false,
    persistent: true,
    refreshOn: '',
    redrawOn: '',
    dataGridLabel: false,
    errorLabel: '',
    autofocus: false,
    dbIndex: false,
    calculateValue: '',
    calculateServer: false,
    widget: null,
    attributes: {},
    overlay: {
      style: '',
      left: '',
      top: '',
      width: '',
      height: '',
    },
    allowCalculateOverride: false,
    encrypted: false,
    showCharCount: false,
    showWordCount: false,
    properties: {},
    allowMultipleMasks: false,
    rows: 3,
    editor: '',
    fixedSize: true,
    inputFormat: 'html',
    id: 'eqz3huj',
    defaultValue: null,
  },
  {
    label: 'Date / Time',
    labelPosition: 'top',
    allowInput: true,
    format: 'yyyy-MM-dd hh:mm a',
    placeholder: '',
    description: 'description',
    tooltip: '',
    tabindex: '',
    hidden: false,
    hideLabel: false,
    disabled: false,
    tableView: false,
    modalEdit: false,
    enableDate: true,
    datePicker: {
      minDate: null,
      maxDate: null,
      disableWeekends: false,
      disableWeekdays: false,
      disableFunction: '',
      showWeeks: true,
      startingDay: 0,
      initDate: '',
      minMode: 'day',
      maxMode: 'year',
      yearRows: 4,
      yearColumns: 5,
    },
    enableTime: true,
    defaultValue: '',
    redrawOn: '',
    clearOnHide: true,
    customDefaultValue: '',
    calculateValue: '',
    allowCalculateOverride: false,
    validateOn: 'change',
    validate: {
      required: true,
      customMessage: '',
      custom: '',
      customPrivate: false,
      strictDateValidation: false,
      multiple: false,
      unique: false,
    },
    key: 'datetimeLatest',
    conditional: {
      show: null,
      when: null,
      eq: '',
      json: '',
    },
    customConditional: '',
    type: 'datetimeLatest',
    timezone: '',
    input: true,
    prefix: '',
    customClass: '',
    suffix: '',
    multiple: false,
    protected: false,
    unique: false,
    persistent: true,
    refreshOn: '',
    dataGridLabel: false,
    errorLabel: '',
    autofocus: false,
    dbIndex: false,
    calculateServer: false,
    widget: null,
    attributes: {},
    overlay: {
      style: '',
      left: '',
      top: '',
      width: '',
      height: '',
    },
    encrypted: false,
    showCharCount: false,
    showWordCount: false,
    properties: {},
    allowMultipleMasks: false,
    useLocaleSettings: false,
    defaultDate: '',
    displayInTimezone: 'viewer',
    datepickerMode: 'day',
    timePicker: {
      hourStep: 1,
      minuteStep: 1,
      showMeridian: true,
      readonlyInput: false,
      mousewheel: true,
      arrowkeys: true,
    },
    customOptions: {},
    id: 'e7xlfyk',
  },
  {
    label: 'Default Label',
    labelPosition: 'top',
    placeholder: '',
    description: 'description',
    tooltip: '',
    tabindex: '',
    hidden: false,
    hideLabel: false,
    disabled: false,
    multiple: true,
    dataSrc: 'values',
    data: {
      values: [
        {
          label: '2',
          value: '2',
        },
        {
          label: '12',
          value: '1',
        },
      ],
      resource: '',
      json: '',
      url: '',
      custom: '',
    },
    idPath: 'id',
    valueProperty: '',
    template: '{{ item.label }}',
    refreshOn: '',
    refreshOnBlur: '',
    clearOnRefresh: false,
    clearOnHide: true,
    customDefaultValue: '',
    calculateValue: '',
    allowCalculateOverride: false,
    validateOn: 'change',
    validate: {
      required: true,
      onlyAvailableItems: false,
      customMessage: '',
      custom: '',
      customPrivate: false,
      json: '',
      strictDateValidation: false,
      multiple: false,
      unique: false,
    },
    key: 'selectLatest',
    tags: [],
    properties: {},
    customConditional: '',
    conditional: {
      json: '',
      show: null,
      when: null,
      eq: '',
    },
    attributes: {},
    overlay: {
      style: '',
      page: '',
      left: '',
      top: '',
      width: '',
      height: '',
    },
    type: 'selectLatest',
    indexeddb: {
      filter: {},
    },
    redrawOn: '',
    input: true,
    prefix: '',
    customClass: '',
    suffix: '',
    protected: false,
    unique: false,
    persistent: true,
    tableView: false,
    modalEdit: false,
    dataGridLabel: false,
    errorLabel: '',
    autofocus: false,
    dbIndex: false,
    calculateServer: false,
    widget: null,
    encrypted: false,
    showCharCount: false,
    showWordCount: false,
    allowMultipleMasks: false,
    id: 'ese2fi6',
    defaultValue: null,
  },
  {
    label: 'Checkbox',
    description: 'description',
    tooltip: '',
    shortcut: '',
    tabindex: '',
    hidden: false,
    hideLabel: false,
    disabled: false,
    redrawOn: '',
    clearOnHide: true,
    customDefaultValue: '',
    calculateValue: '',
    allowCalculateOverride: false,
    validate: {
      required: true,
      customMessage: '',
      custom: '',
      customPrivate: false,
      json: '',
      strictDateValidation: false,
      multiple: false,
      unique: false,
    },
    key: 'checkboxLatest',
    conditional: {
      show: null,
      when: null,
      eq: '',
      json: '',
    },
    customConditional: '',
    type: 'checkboxLatest',
    name: '',
    value: '',
    input: true,
    placeholder: '',
    prefix: '',
    customClass: '',
    suffix: '',
    multiple: false,
    protected: false,
    unique: false,
    persistent: true,
    refreshOn: '',
    tableView: false,
    modalEdit: false,
    dataGridLabel: true,
    labelPosition: 'right',
    errorLabel: '',
    autofocus: false,
    dbIndex: false,
    calculateServer: false,
    widget: null,
    attributes: {},
    validateOn: 'change',
    overlay: {
      style: '',
      left: '',
      top: '',
      width: '',
      height: '',
    },
    encrypted: false,
    showCharCount: false,
    showWordCount: false,
    properties: {},
    allowMultipleMasks: false,
    inputType: 'checkbox',
    id: 'e56ncsj',
    defaultValue: null,
  },
  {
    label: 'Radio',
    labelPosition: 'top',
    optionsLabelPosition: 'right',
    description: 'description',
    tooltip: '',
    tabindex: '',
    inline: false,
    hidden: false,
    hideLabel: false,
    disabled: false,
    values: [
      {
        label: '1',
        value: '1',
        shortcut: '',
      },
      {
        label: '2',
        value: '2',
        shortcut: '',
      },
    ],
    dataType: '',
    redrawOn: '',
    clearOnHide: true,
    customDefaultValue: '',
    calculateValue: '',
    allowCalculateOverride: false,
    validate: {
      required: true,
      onlyAvailableItems: false,
      customMessage: '',
      custom: '',
      customPrivate: false,
      json: '',
      strictDateValidation: false,
      multiple: false,
      unique: false,
    },
    key: 'radio',
    conditional: {
      show: null,
      when: null,
      eq: '',
      json: '',
    },
    customConditional: '',
    type: 'radioLatest',
    input: true,
    placeholder: '',
    prefix: '',
    customClass: '',
    suffix: '',
    multiple: false,
    protected: false,
    unique: false,
    persistent: true,
    refreshOn: '',
    tableView: false,
    modalEdit: false,
    dataGridLabel: false,
    errorLabel: '',
    autofocus: false,
    dbIndex: false,
    calculateServer: false,
    widget: null,
    attributes: {},
    validateOn: 'change',
    overlay: {
      style: '',
      left: '',
      top: '',
      width: '',
      height: '',
    },
    encrypted: false,
    showCharCount: false,
    showWordCount: false,
    properties: {},
    allowMultipleMasks: false,
    inputType: 'radio',
    fieldSet: false,
    id: 'e28dcy9',
    defaultValue: null,
  },
  {
    input: true,
    tableView: true,
    inputType: 'text',
    inputMask: '',
    label: '2',
    key: 'key2',
    placeholder: 'Введіть ідентифікатор лабораторії',
    defaultValue: '',
    hidden: false,
    clearOnHide: true,
    spellcheck: true,
    validate: {
      required: true,
      minLength: 4,
      maxLength: 5,
      pattern: '',
      custom: '',
      customPrivate: false,
    },
    validateOn: 'change',
    conditional: {
      show: '',
      when: null,
      eq: '',
    },
    type: 'textfieldLatest',
    labelPosition: 'top',
    inputFormat: 'plain',
  },
  {
    label: 'Attached documents',
    labelPosition: 'top',
    description: 'description',
    tooltip: '',
    customClass: '',
    tabindex: '',
    hidden: false,
    hideLabel: false,
    autofocus: false,
    disabled: false,
    tableView: false,
    modalEdit: false,
    storage: 'base64',
    dir: '',
    fileNameTemplate: '',
    image: false,
    uploadOnly: false,
    webcam: false,
    fileTypes: [
      {
        label: '',
        value: '',
      },
    ],
    filePattern: 'application/pdf,image/jpeg,image/png',
    fileMinSize: '0KB',
    fileMaxSize: '50MB',
    multiple: false,
    persistent: true,
    protected: false,
    dbIndex: false,
    encrypted: false,
    redrawOn: '',
    clearOnHide: true,
    customDefaultValue: '',
    calculateValue: '',
    calculateServer: false,
    allowCalculateOverride: false,
    validate: {
      required: true,
      customMessage: 'Please upload a file',
      custom: '',
      customPrivate: false,
      json: '',
      strictDateValidation: false,
      multiple: false,
      unique: false,
    },
    errorLabel: '',
    key: 'premisesFile',
    tags: [],
    properties: {},
    customConditional: '',
    logic: [],
    attributes: {},
    overlay: {
      style: '',
      page: '',
      left: '',
      top: '',
      width: '',
      height: '',
    },
    type: 'fileLatest',
    url: '/documents',
    imageSize: '200',
    input: true,
    placeholder: '',
    prefix: '',
    suffix: '',
    defaultValue: null,
    unique: false,
    refreshOn: '',
    widget: null,
    validateOn: 'change',
    showCharCount: false,
    showWordCount: false,
    allowMultipleMasks: false,
    privateDownload: false,
    id: 'euri0zr',
    options: '',
    fileKey: '',
  },
  {
    label: 'Number',
    labelPosition: 'top',
    placeholder: 'Placeholder',
    description: 'Description',
    tooltip: 'Tooltip text',
    prefix: 'prefix',
    suffix: 'Suffix',
    tabindex: '3',
    hidden: false,
    hideLabel: false,
    mask: false,
    disabled: false,
    tableView: true,
    modalEdit: false,
    delimiter: true,
    requireDecimal: true,
    redrawOn: '',
    clearOnHide: true,
    customDefaultValue: '',
    calculateServer: false,
    allowCalculateOverride: false,
    validateOn: 'change',
    validate: {
      required: true,
      customMessage: '',
      custom: '',
      customPrivate: false,
      strictDateValidation: false,
      multiple: false,
      unique: false,
      minLength: '',
      maxLength: '',
      pattern: '',
      min: 1900,
      max: 2021,
    },
    key: 'numberLatest',
    conditional: {
      show: false,
      when: 'submit',
      eq: '',
      json: '',
    },
    customConditional: '',
    type: 'numberLatest',
    input: true,
    customClass: 'mdtuddm-number',
    multiple: false,
    protected: false,
    unique: false,
    persistent: true,
    refreshOn: '',
    dataGridLabel: false,
    errorLabel: '',
    autofocus: false,
    dbIndex: false,
    calculateValue: '',
    widget: null,
    attributes: {},
    overlay: {
      style: '',
      left: '',
      top: '',
      width: '',
      height: '',
    },
    encrypted: false,
    showCharCount: false,
    showWordCount: false,
    properties: {},
    allowMultipleMasks: false,
    inputType: 'number',
    inputFormat: 'plain',
    inputMask: '',
    displayMask: '',
    spellcheck: true,
    truncateMultipleSpaces: false,
    id: 'e51c5t8',
    defaultValue: '',
    decimalLimit: 2,
  },
  {
    autofocus: false,
    input: true,
    label: 'Submit',
    tableView: false,
    key: 'submit',
    size: 'md',
    leftIcon: '',
    rightIcon: '',
    block: false,
    action: 'submit',
    disableOnInvalid: false,
    theme: 'primary',
    type: 'button',
  },
];
