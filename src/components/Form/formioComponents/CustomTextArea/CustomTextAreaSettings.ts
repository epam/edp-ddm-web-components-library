import baseTextAreaForm from 'formiojs/components/textarea/TextArea.form';
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
  return baseTextAreaForm([
    {
      key: 'display',
      components: [
        ...ignoreBuilderFields([
          'widget.type',
          'widget',
          'rows',
          'editor',
          'customClass',
          'showWordCount',
          'showCharCount',
          'autofocus',
          'spellcheck',
          'autocomplete',
          'prefix',
          'suffix',
          'modalEdit',
        ]),
        {
          key: 'autoExpand',
          conditional: {},
          overrideEditForm: true,
        },
      ],
    },
    {
      key: 'data',
      components: [
        ...ignoreBuilderFields([
          'multiple',
          'persistent',
          'inputFormat',
          'protected',
          'dbIndex',
          'encrypted',
          'redrawOn',
          'calculateServer',
          'allowCalculateOverride',
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
