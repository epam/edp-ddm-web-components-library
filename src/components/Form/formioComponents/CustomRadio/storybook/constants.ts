export const components = [
  {
    'label': 'Radio',
    'optionsLabelPosition': 'right',
    'inline': false,
    'tableView': false,
    'values': [
      {
        'label': 'test1',
        'value': 'test1',
        'shortcut': '',
      },
      {
        'label': 'test2',
        'value': 'test2',
        'shortcut': '',
      },
    ],
    'validate': {
      'required': true,
    },
    'key': 'radio',
    'type': 'radioLatest',
    'input': true,
  },
  {
    'type': 'button',
    'label': 'Submit',
    'key': 'submit',
    'disableOnInvalid': false,
    'input': true,
    'tableView': false,
  },
];

export const withCustomDefaultValue = [
  {
    'label': 'Text Field',
    'tableView': true,
    'key': 'textField',
    'type': 'textfieldLatest',
    'input': true,
    'defaultValue': 'test',
  },
  {
    'label': 'Radio',
    'optionsLabelPosition': 'right',
    'inline': false,
    'tableView': false,
    'values': [
      {
        'label': 'test1',
        'value': 'test1',
        'shortcut': '',
      },
      {
        'label': 'test2',
        'value': 'test2',
        'shortcut': '',
      },
    ],
    'customDefaultValue': "value = data.textField === 'test' ? 'test2': ''",
    'key': 'radio',
    'type': 'radioLatest',
    'input': true,
  },
];

export const withCalculatedValue = [
  {
    'label': 'Text Field',
    'tableView': true,
    'key': 'textField',
    'type': 'textfieldLatest',
    'input': true,
  },
  {
    'label': 'Radio',
    'optionsLabelPosition': 'right',
    'inline': false,
    'tableView': false,
    'values': [
      {
        'label': 'test1',
        'value': 'test1',
        'shortcut': '',
      },
      {
        'label': 'test2',
        'value': 'test2',
        'shortcut': '',
      },
    ],
    'calculateValue': "value = data.textField === 'test' ? 'test2': ''",
    'key': 'radio',
    'type': 'radioLatest',
    'input': true,
  },
];

export const withCondition = [
  {
    'label': 'Text Field',
    'tableView': true,
    'key': 'textField',
    'type': 'textfieldLatest',
    'input': true,
  },
  {
    'label': 'Radio',
    'optionsLabelPosition': 'right',
    'inline': false,
    'tableView': false,
    'values': [
      {
        'label': 'test1',
        'value': 'test1',
        'shortcut': '',
      },
      {
        'label': 'test2',
        'value': 'test2',
        'shortcut': '',
      },
    ],
    'conditional': {
      'show': true,
      'when': 'textField',
      'eq': 'test',
    },
    'key': 'radio',
    'type': 'radioLatest',
    'input': true,
  },
];