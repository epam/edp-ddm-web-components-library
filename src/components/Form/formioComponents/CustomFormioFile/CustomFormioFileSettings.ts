import baseFileForm from 'formiojs/components/file/File.form';
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
  return baseFileForm([
    {
      key: 'display',
      components: ignoreBuilderFields(['customClass', 'modalEdit']),
    },
    {
      key: 'file',
      components: [
        ...ignoreBuilderFields([
          'storage',
          'fileTypes',
          'dir',
          'fileNameTemplate',
          'webcam',
          'webcamSize',
        ]),
        {
          overrideEditForm: true,
          key: 'url',
          conditional: {},
        },
        {
          overrideEditForm: true,
          key: 'options',
          conditional: {},
        },
        {
          overrideEditForm: true,
          key: 'fileKey',
          conditional: {},
        },
        {
          overrideEditForm: true,
          key: 'privateDownload',
          conditional: {},
        },
      ],
    },
    {
      key: 'data',
      components:  [
        ...ignoreBuilderFields([
          'multiple',
          'persistent',
          'protected',
          'dbIndex',
          'encrypted',
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
      components: ignoreBuilderFields(['errorLabel', 'json-validation-json']),
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
