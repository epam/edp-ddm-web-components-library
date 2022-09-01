import baseContentForm from 'formiojs/components/content/Content.form';
import { ignoreBuilderFields } from 'utils';
import { COMPONENT_CLASSES } from '../../constants';

export default () => {
  const editForm = baseContentForm([
    {
      key: 'display',
      components: [
        ...ignoreBuilderFields(['customClass', 'refreshOnChange', 'modalEdit']),
        {
          key: 'hideContentLabel',
          label: 'Hide Label',
          type: 'checkbox',
          input: true,
          weight: 1700,
          defaultValue: true,
          // eslint-disable-next-line max-len
          tooltip: 'Hide the label (title, if no label) of this component. This allows you to show the label in the form builder, but not when it is rendered.',
        },
      ],
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

  return {
    components: editForm.components.map((item: { key: string; }) => {
      if (item.key === 'html') {
        return {
          ...item,
          customClass: COMPONENT_CLASSES.content,
        };
      }
      return item;
    }),
  };
};
