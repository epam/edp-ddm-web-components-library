import React, { useRef, useMemo } from 'react';
import { FormBuilder as FormioFormBuilder } from 'react-formio';
import { makeStyles } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { Form, FormioComponentName } from 'components/Form/types';
import { editForm } from 'utils';
import FileService from 'components/Form/FileService';
import localizationForm from '../../localization/ua.json';
import FormStyles from '../FormStyles';
import styles from './FormBuilder.styles';
import './styles.scss';

const BASIC_COMPONENT_NAMES: Array<FormioComponentName> = [
  FormioComponentName.textfield,
  FormioComponentName.number,
  FormioComponentName.textarea,
  FormioComponentName.checkbox,
  FormioComponentName.select,
  FormioComponentName.radio,
  FormioComponentName.datetime,
  FormioComponentName.editgrid,
  FormioComponentName.button,
  FormioComponentName.file,
  FormioComponentName.email,
  FormioComponentName.content,
];

const EXPERIMENTAL_COMPONENT_NAMES: Array<FormioComponentName> = [
  FormioComponentName.day,
  FormioComponentName.htmlelement,
  FormioComponentName.phoneNumber,
  FormioComponentName.address,
  FormioComponentName.time,
  FormioComponentName.currency,
  FormioComponentName.hidden,
  FormioComponentName.resource,
  FormioComponentName.form,
  FormioComponentName.selectboxes,
  FormioComponentName.signature,
  FormioComponentName.container,
  FormioComponentName.datagrid,
  FormioComponentName.survey,
  FormioComponentName.columns,
  FormioComponentName.fieldset,
  FormioComponentName.panel,
  FormioComponentName.table,
  FormioComponentName.well,
  FormioComponentName.password,
];

// TODO: return this code after all LATEST components are tested
// const LEGACY_COMPONENT_NAMES: Array<FormioComponentName> = [
//   FormioComponentName.checkboxLegacy,
//   FormioComponentName.radioLegacy,
//   FormioComponentName.textfieldLegacy,
//   FormioComponentName.contentLegacy,
//   FormioComponentName.emailLegacy,
//   FormioComponentName.datetimeLegacy,
//   FormioComponentName.textareaLegacy,
// ];

const LATEST_COMPONENT_NAMES: Array<FormioComponentName> = [
  FormioComponentName.datetimeLatest,
  FormioComponentName.selectLatest,
  FormioComponentName.fileLatest,
  FormioComponentName.checkboxLatest,
  FormioComponentName.radioLatest,
  FormioComponentName.textfieldLatest,
  FormioComponentName.numberLatest,
  FormioComponentName.emailLatest,
  FormioComponentName.contentLatest,
  FormioComponentName.textareaLatest,
  FormioComponentName.editgridLatest,
  FormioComponentName.fieldsetLatest,
  FormioComponentName.columnsLatest,
  FormioComponentName.tableLatest,
];

const basicComponentsConfig = Object.fromEntries(
  BASIC_COMPONENT_NAMES.map((key) => [key, true]),
);

const experimentalComponentsConfig = Object.fromEntries(
  EXPERIMENTAL_COMPONENT_NAMES.map((key) => [key, true]),
);

const latestComponentsConfig = Object.fromEntries(
  LATEST_COMPONENT_NAMES.map((key) => [key, true]),
);

const useStyles = makeStyles(styles, { name: 'FormBuilder' });

type FormSubmission = Form & {
  _id: string;
};

export interface FormBuilderProps {
  formSchema: { [key: string]: unknown }
  onChange: (submission: FormSubmission) => void;
  language: string,
  localization: {
    basicTitle: string,
    advancedTitle: string,
    premiumTitle: string,
    autocompleteDescription: string,
  },
  fileServiceNonSupport?: boolean
}

export default function FormBuilder({
  formSchema,
  onChange,
  language,
  localization,
  fileServiceNonSupport,
}: FormBuilderProps) {
  const classes = useStyles();
  const builder = useRef();
  const theme = useTheme();

  const options = useMemo(() => {
    const autocompleteOverride = editForm('display', [{
      key: 'autocomplete',
      placeholder: 'off',
      defaultValue: 'off',
      description: localization.autocompleteDescription,
      overrideEditForm: true,
    }]);

    const optionsLabelPositionIgnore = editForm('display', [{
      key: 'optionsLabelPosition',
      ignore: true,
    }]);

    const errorLabelIgnore = editForm('validation', [{
      key: 'errorLabel',
      ignore: true,
    }]);

    return {
      builder: {
        data: false,
        layout: false,
        premium: false,
        basic: false,
        advanced: false,
        customBasic: {
          title: localization.basicTitle,
          default: true,
          weight: 0,
          components: basicComponentsConfig,
        },
        customAdvanced: {
          title: localization.advancedTitle,
          weight: 0,
          components: experimentalComponentsConfig,
        },
        customPremium: {
          title: localization.premiumTitle,
          weight: 0,
          components: latestComponentsConfig,
        },
      },
      editForm: {
        [FormioComponentName.phoneNumber]: [autocompleteOverride, errorLabelIgnore],
        [FormioComponentName.number]: [autocompleteOverride, errorLabelIgnore],
        [FormioComponentName.password]: [autocompleteOverride, errorLabelIgnore],
        [FormioComponentName.currency]: [autocompleteOverride, errorLabelIgnore],
        [FormioComponentName.editgrid]: [errorLabelIgnore],
        [FormioComponentName.selectboxes]: [errorLabelIgnore, optionsLabelPositionIgnore],
        [FormioComponentName.select]: [errorLabelIgnore],
        [FormioComponentName.selectLegacy]: [errorLabelIgnore],
        [FormioComponentName.file]: [errorLabelIgnore],
        [FormioComponentName.container]: [errorLabelIgnore],
        [FormioComponentName.datagrid]: [errorLabelIgnore],
        [FormioComponentName.address]: [errorLabelIgnore],
        [FormioComponentName.day]: [errorLabelIgnore],
        [FormioComponentName.time]: [errorLabelIgnore],
        [FormioComponentName.resource]: [errorLabelIgnore],
        [FormioComponentName.survey]: [errorLabelIgnore],
        [FormioComponentName.signature]: [errorLabelIgnore],
        [FormioComponentName.checkboxLegacy]: [errorLabelIgnore],
        [FormioComponentName.radioLegacy]: [errorLabelIgnore],
        [FormioComponentName.datetimeLegacy]: [errorLabelIgnore],
        [FormioComponentName.emailLegacy]: [autocompleteOverride, errorLabelIgnore],
        [FormioComponentName.textfieldLegacy]: [autocompleteOverride, errorLabelIgnore],
        [FormioComponentName.textareaLegacy]: [autocompleteOverride, errorLabelIgnore],
      },
      language,
      theme,
    };
  }, [theme, language, localization]);

  return (
    <div className={`bootstrapFormStyles ${classes.container}`}>
      <FormStyles />
      <FormioFormBuilder
        form={formSchema}
        onChange={onChange}
        ref={builder}
        options={{
          ...options,
          i18n: {
            [options.language]: localizationForm,
          },
          fileService: new FileService({ displayFilePreview: fileServiceNonSupport }),
        }}
      />
    </div>
  );
}
