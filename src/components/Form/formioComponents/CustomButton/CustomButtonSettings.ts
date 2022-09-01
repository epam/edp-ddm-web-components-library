import baseContentForm from 'formiojs/components/button/Button.form';

export default () => {
  return baseContentForm([
    {
      key: 'display',
      components: [
        {
          key: 'action',
          data: {
            values: [
              { label: 'Submit', value: 'submit' },
              { label: 'Save in state', value: 'saveState' },
              { label: 'Event', value: 'event' },
              { label: 'Custom', value: 'custom' },
              { label: 'Reset', value: 'reset' },
              { label: 'OAuth', value: 'oauth' },
              { label: 'POST to URL', value: 'url' },
              { label: 'Navigation', value: 'navigation' },
            ],
          },
          overrideEditForm: true,
        },
        {
          type: 'textfield',
          key: 'actionCode',
          label: 'Action code',
          input: true,
          weight: 112,
          validate: {
            required: true,
          },
          conditional: {
            json: { '===': [{ var: 'data.action' }, 'navigation'] },
          },
        },
        {
          key: 'theme',
          data: {
            values: [
              { label: 'Primary', value: 'primary' },
              { label: 'Secondary', value: 'secondary' },
              { label: 'Cancel', value: 'cancel' },
            ],
          },
          overrideEditForm: true,
        },
      ],
    },
  ]);
};
