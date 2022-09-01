export const components = [
  {
    'label': 'Checkbox',
    'tableView': false,
    'key': 'checkbox',
    'type': 'checkboxLatest',
    'input': true,
    'validate': {
      'required': true,
    },
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
    'label': 'Checkbox',
    'tableView': false,
    'defaultValue': false,
    'customDefaultValue': "value = data.textField === 'test'",
    'key': 'checkbox',
    'type': 'checkboxLatest',
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
    'label': 'Checkbox',
    'tableView': false,
    'defaultValue': false,
    'calculateValue': "value = data.textField === 'test'",
    'key': 'checkbox',
    'type': 'checkboxLatest',
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
    'label': 'Checkbox',
    'tableView': false,
    'defaultValue': false,
    'key': 'checkbox',
    'conditional': {
      'show': true,
      'when': 'textField',
      'eq': 'test',
    },
    'type': 'checkboxLatest',
    'input': true,
  },
];