import baseTableForm from 'formiojs/components/table/Table.form';
import { ignoreBuilderFields } from 'utils';

export default () => {
  return baseTableForm([
    {
      key: 'display',
      components: [
        ...ignoreBuilderFields([
          'customClass',
          'striped',
          'hover',
          'condensed',
          'bordered',
          'cloneRows',
          'hideLabel',
          'modalEdit',
        ]),
        {
          key: 'numRows',
          validate: {
            min: 1,
            required: true,
          },
        },
        {
          key: 'numCols',
          validate: {
            min: 1,
            max: 12,
            required: true,
          },
        },
        {
          key: 'cellAlignment',
          data: {
            values: [
              { label: 'Left', value: 'left' },
              { label: 'Center', value: 'center' },
            ],
          },
          dropdown: 'top',
          overrideEditForm: true,
        },
      ],
    },
    {
      key: 'api',
      components: [
        {
          key: 'tags',
          ignore: true,
        },
        {
          key: 'properties',
          ignore: true,
        },
      ],
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
