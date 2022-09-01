export const table = [
  {
    'label': 'Text Field',
    'tableView': true,
    'key': 'textField2',
    'type': 'textfieldLatest',
    'input': true,
  },
  {
    'label': 'Table',
    'cellAlignment': 'left',
    'key': 'table',
    'type': 'tableLatest',
    'input': false,
    'tableView': false,
    'rows': [
      [
        {
          'components': [
            {
              'label': 'Text Field',
              'tableView': true,
              'key': 'textField',
              'type': 'textfieldLatest',
              'input': true,
            },
          ],
        },
        {
          'components': [
            {
              'label': 'Text Field',
              'tableView': true,
              'key': 'textField1',
              'type': 'textfieldLatest',
              'input': true,
            },
          ],
        },
        {
          'components': [
            {
              'label': 'Text Field',
              'tableView': true,
              'key': 'textField2',
              'type': 'textfieldLatest',
              'input': true,
            },
          ],
        },
      ],
      [
        {
          'components': [
            {
              'label': 'Select Boxes',
              'optionsLabelPosition': 'right',
              'tableView': false,
              'values': [
                {
                  'label': '1',
                  'value': '1',
                  'shortcut': '',
                },
                {
                  'label': '2',
                  'value': '2',
                  'shortcut': '',
                },
                {
                  'label': '3',
                  'value': '3',
                  'shortcut': '',
                },
              ],
              'key': 'selectBoxes1',
              'type': 'selectboxes',
              'input': true,
              'inputType': 'checkbox',
            },
          ],
        },
        {
          'components': [
            {
              'label': 'Select',
              'widget': 'choicesjs',
              'tableView': true,
              'data': {
                'values': [
                  {
                    'label': '1',
                    'value': '1',
                  },
                  {
                    'label': '2',
                    'value': '2',
                  },
                ],
              },
              'key': 'select1',
              'type': 'selectLatest',
              'input': true,
            },
          ],
        },
        {
          'components': [],
        },
      ],
      [
        {
          'components': [
            {
              'label': 'Text Field',
              'tableView': true,
              'key': 'textField3',
              'type': 'textfieldLatest',
              'input': true,
            },
          ],
        },
        {
          'components': [
            {
              'label': 'Text Field',
              'tableView': true,
              'key': 'textField4',
              'type': 'textfieldLatest',
              'input': true,
            },
          ],
        },
        {
          'components': [
            {
              'label': 'Text Field',
              'tableView': true,
              'key': 'textField5',
              'type': 'textfieldLatest',
              'input': true,
            },
          ],
        },
      ],
    ],
  },
  {
    'label': 'Text Field',
    'tableView': true,
    'key': 'textField2',
    'type': 'textfieldLatest',
    'input': true,
  },
  {
    'type': 'button',
    'label': 'Submit',
    'key': 'submit',
    'disableOnInvalid': true,
    'input': true,
    'tableView': false,
  },
];