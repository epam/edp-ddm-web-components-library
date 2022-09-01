import baseFieldsetForm from 'formiojs/components/fieldset/Fieldset.form';
import { ignoreBuilderFields } from 'utils';

/**
 * This function returns the fields that should be present in the builder
 * You can extend the default one of any component
 * The values you pass are merged with the passed ones using the function unifyComponents (seacrh in formio.js source)
 *
 * *overrideEditForm* param is used when component key is equal to the default one to favor yours
 * *ignore* param will force the skipping of this component
 */
export default () => {
  return baseFieldsetForm([
    {
      key: 'display',
      components: [
        ...ignoreBuilderFields(['customClass', 'modalEdit']),
        {
          type: 'checkbox',
          key: 'collapsible',
          label: 'Collapsible',
          input: true,
        },
        {
          type: 'checkbox',
          key: 'collapsed',
          label: 'Initially Collapsed',
          input: true,
          conditional: {
            json: { '===': [{ var: 'data.collapsible' }, true] },
          },
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
};
