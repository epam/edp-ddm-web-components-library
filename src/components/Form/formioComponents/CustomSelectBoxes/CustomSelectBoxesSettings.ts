import baseCheckboxForm from 'formiojs/components/selectboxes/SelectBoxes.form';
import builderUtils from 'formiojs/utils/builder';
import get from 'lodash/get';

export default () => {
  return baseCheckboxForm([
    {
      key: 'data',
      components: [
        {
          overrideEditForm: true,
          input: true,
          type: 'datagrid',
          label: 'Values',
          key: 'values',
          tooltip: 'The radio button values that can be picked for this field. '
            + 'Values are text submitted with the form data. '
            + 'Labels are text that appears next to the radio buttons on the form.',
          weight: 10,
          defaultValue: [{ label: '', value: '' }],
          components: [
            {
              label: 'Label',
              key: 'label',
              input: true,
              type: 'textfield',
              validate: {
                required: true,
              },
            },
            {
              label: 'Value',
              key: 'value',
              input: true,
              type: 'textfield',
              allowCalculateOverride: true,
              calculateValue: { _camelCase: [{ var: 'row.label' }] },
              validate: {
                required: true,
              },
            },
            {
              type: 'select',
              input: true,
              label: 'Shortcut',
              key: 'shortcut',
              tooltip: 'The shortcut key for this option.',
              dataSrc: 'custom',
              valueProperty: 'value',
              customDefaultValue: () => '',
              template: '{{ item.label }}',
              data: {
                custom(context: any) {
                  return builderUtils.getAvailableShortcuts(
                    get(context, 'instance.options.editForm', {}),
                    get(context, 'instance.options.editComponent', {}),
                  );
                },
              },
            },
          ],
        },
      ],
    },
  ]);
};
