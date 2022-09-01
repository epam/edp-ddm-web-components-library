/* eslint-disable no-underscore-dangle */
import baseSelectForm from 'formiojs/components/select/Select.form';
import { ignoreBuilderFields } from 'utils';

export default () => {
  return baseSelectForm([
    {
      key: 'display',
      components: ignoreBuilderFields(
        ['widget', 'customClass', 'autofocus', 'uniqueOptions', 'modalEdit'],
      ),
    },
    {
      key: 'data',
      components: [
        ...ignoreBuilderFields([
          'dataType',
          'sort',
          'searchEnabled',
          'selectThreshold',
          'readOnlyValue',
          'customOptions',
          'useExactSearch',
          'persistent',
          'protected',
          'dbIndex',
          'encrypted',
          'calculateServer',
          'authenticate',
          'ignoreCache',
        ]),
        {
          overrideEditForm: true,
          type: 'select',
          input: true,
          weight: 0,
          tooltip: 'The source toto retrieve the JSON data from.',
          key: 'dataSrc',
          defaultValue: 'values',
          label: 'Data Source Type',
          dataSrc: 'values',
          data: {
            values: [
              { label: 'Values', value: 'values' },
              { label: 'URL', value: 'url' },
              { label: 'Custom', value: 'custom' },
            ],
          },
        },
      ],
    },
    {
      key: 'validation',
      components: ignoreBuilderFields(['unique', 'errorLabel']),
    },
    {
      key: 'api',
      components: ignoreBuilderFields(['tags, properties']),
    },
    {
      key: 'logic',
      components: [],
      ignore: true,
    },
    {
      key: 'conditional',
      components: [],
    },
  ]);
};
