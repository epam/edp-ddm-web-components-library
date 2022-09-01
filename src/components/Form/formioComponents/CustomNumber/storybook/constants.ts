export const components = [
  {
    'label': 'Number',
    'tableView': false,
    'key': 'number',
    'type': 'numberLatest',
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
    'label': 'Number',
    'tableView': false,
    'defaultValue': false,
    'calculateValue': "value = data.textField === 'test' ? 1 : 0",
    'key': 'number',
    'type': 'numberLatest',
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
    'label': 'Number',
    'tableView': false,
    'defaultValue': false,
    'key': 'number',
    'conditional': {
      'show': true,
      'when': 'textField',
      'eq': 'test',
    },
    'type': 'numberLatest',
    'input': true,
  },
];