import baseDateTimeForm from 'formiojs/components/datetime/DateTime.form';
import { ignoreBuilderFields } from 'utils';

export default () => {
  return baseDateTimeForm([
    {
      key: 'display',
      components: ignoreBuilderFields([
        'displayInTimezone',
        'useLocaleSettings',
        'shortcutButtons',
        'widget.type',
        'widget',
        'customClass',
        'autofocus',
        'modalEdit',
      ]),
    },
    {
      key: 'data',
      components: [
        ...ignoreBuilderFields([
          'defaultDate',
          'multiple',
          'customOptions',
          'persistent',
          'dbIndex',
          'encrypted',
          'protected',
          'calculateServer',
        ]),
        {
          key: 'customDefaultValuePanel',
          components: [{
            key: 'customDefaultValue-json',
            ignore: true,
          }],
        },
      ],
    },
    {
      key: 'validation',
      components: ignoreBuilderFields(['errorLabel', 'json-validation-json', 'unique']),
    },
    {
      key: 'api',
      components: ignoreBuilderFields(['tags', 'properties']),
    },
    {
      key: 'logic',
      ignore: true,
    },
    {
      key: 'layout',
      ignore: true,
    },
  ]);
};
