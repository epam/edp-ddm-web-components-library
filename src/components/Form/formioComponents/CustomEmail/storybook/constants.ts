export const components = [
  {
    'label': 'Email',
    'tableView': false,
    'key': 'email',
    'type': 'emailLatest',
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
    'label': 'Email',
    'tableView': false,
    'defaultValue': false,
    'calculateValue': "value = data.textField === 'test' ? 'test' : ''",
    'key': 'email',
    'type': 'emailLatest',
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
    'label': 'Email',
    'tableView': false,
    'defaultValue': false,
    'key': 'email',
    'conditional': {
      'show': true,
      'when': 'textField',
      'eq': 'test',
    },
    'type': 'emailLatest',
    'input': true,
  },
];