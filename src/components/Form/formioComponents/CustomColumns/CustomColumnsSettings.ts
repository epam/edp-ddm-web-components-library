import baseColumnsForm from 'formiojs/components/columns/Columns.form';
import { ignoreBuilderFields } from 'utils';


export default () => {
  return baseColumnsForm([
    ...ignoreBuilderFields(['layout', 'logic']),
    {
      key: 'display',
      components: [
        ...ignoreBuilderFields(
          ['customClass', 'modalEdit', 'autoAdjust', 'hideLabel'],
        ),
        {
          weight: 150,
          type: 'datagrid',
          input: true,
          key: 'columns',
          label: 'Column Properties',
          addAnother: 'Add Column',
          tooltip: 'The width, offset, push, and pull settings for each column.',
          reorder: true,
          components: [
            {
              type: 'hidden',
              key: 'components',
              defaultValue: [],
            },
            {
              type: 'select',
              key: 'size',
              defaultValue: 'md',
              ignore: true,
            },
            {
              type: 'number',
              key: 'width',
              defaultValue: 6,
              label: 'Width',
            },
            {
              type: 'number',
              key: 'offset',
              defaultValue: 0,
              label: 'Offset',
            },
            {
              type: 'number',
              key: 'push',
              defaultValue: 0,
              label: 'Push',
              ignore: true,
            },
            {
              type: 'number',
              key: 'pull',
              defaultValue: 0,
              label: 'Pull',
              ignore: true,
            },
          ],
        },
      ],
    },
    {
      key: 'api',
      components: ignoreBuilderFields(
        ['tags', 'properties'],
      ),
    },
  ]);
};
