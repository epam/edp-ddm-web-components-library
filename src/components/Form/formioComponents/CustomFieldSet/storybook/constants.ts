const getFieldSetComponent = (values?: Record<string, unknown>) => ([
  {
    ...values,
    'key': 'fieldSet',
    'type': 'fieldsetLatest',
    'legend': 'Field set',
    'input': false,
    'tableView': false,
    'components': [
      {
        'label': 'Text Field',
        'tableView': true,
        'validate': {
          'required': true,
        },
        'key': 'textField',
        'type': 'textfieldLatest',
        'input': true,
      },
      {
        'label': 'Text Field',
        'tableView': true,
        'validate': {
          'required': true,
        },
        'key': 'textField2',
        'type': 'textfieldLatest',
        'input': true,
      },
    ],
  },
  {
    'type': 'button',
    'label': 'Submit',
    'key': 'submit',
    'disableOnInvalid': true,
    'input': true,
    'tableView': false,
  },
]);

export const fieldSet = getFieldSetComponent();

export const fieldSetCollapsible = getFieldSetComponent({
  'collapsible': true,
});

export const fieldSetCollapsed = getFieldSetComponent({
  'collapsible': true,
  'collapsed': true,
});