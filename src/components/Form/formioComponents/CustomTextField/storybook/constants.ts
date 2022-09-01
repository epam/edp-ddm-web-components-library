export const components = [
  {
    'label': 'Text Field',
    'tableView': false,
    'key': 'textfield',
    'type': 'textfieldLatest',
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

export const withCalculatedValue = [
  {
    'label': 'Text Field',
    'tableView': true,
    'key': 'textField',
    'type': 'textfieldLatest',
    'input': true,
  },
  {
    'label': 'Text field2',
    'tableView': false,
    'defaultValue': false,
    'calculateValue': "value = data.textField === 'test' ? 'test' : ''",
    'key': 'textField2',
    'type': 'textfieldLatest',
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
    'label': 'Text field2',
    'tableView': false,
    'defaultValue': false,
    'key': 'textfield',
    'conditional': {
      'show': true,
      'when': 'textField',
      'eq': 'test',
    },
    'type': 'textfieldLatest',
    'input': true,
  },
];