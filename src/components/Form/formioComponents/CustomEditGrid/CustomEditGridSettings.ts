import baseEditGridForm from 'formiojs/components/editgrid/EditGrid.form';
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
  return baseEditGridForm([
    {
      key: 'display',
      components: ignoreBuilderFields([
        'customClass', 
        'openWhenEmpty',
        'conditionalAddButton',
        'autofocus',
        'tableView',
        'modalEdit',
      ]),
    },
    {
      key: 'templates',
      components: ignoreBuilderFields([
        'templates.footer',
        'templates.header',
        'templates.row',
        'rowClass',
        'modal',
      ]),
    },
    {
      key: 'data',
      components: ignoreBuilderFields([
        'persistent',
        'inlineEdit',
        'protected',
        'dbIndex',
        'encrypted',
        'calculateServer',
      ]),
    },
    {
      key: 'validation',
      components: ignoreBuilderFields([
        'rowDrafts',
        'json-validation-json',
        'unique',
        'errorLabel',
      ]),
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
