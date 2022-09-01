export const components = [
  {
    'label': 'TextArea',
    'tableView': false,
    'key': 'textarea',
    'type': 'textareaLatest',
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
    'label': 'TextArea',
    'tableView': false,
    'defaultValue': false,
    'calculateValue': "value = data.textField === 'test' ? 'test' : ''",
    'key': 'textarea',
    'type': 'textareaLatest',
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
    'label': 'TextArea',
    'tableView': false,
    'defaultValue': false,
    'key': 'textarea',
    'conditional': {
      'show': true,
      'when': 'textField',
      'eq': 'test',
    },
    'type': 'textareaLatest',
    'input': true,
  },
];