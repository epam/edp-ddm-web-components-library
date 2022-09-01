import { Components } from 'react-formio';

import { addComponentClass, changeComponentKey } from './utils';
import { ComponentsConfig, FormioComponentName as FCN } from './types';
import { COMPONENT_CLASSES } from './constants';
import CustomDay from './formioComponents/CustomDay';
import CustomCheckbox from './formioComponents/CustomCheckbox';
import CustomFormioSelect from './legacyComponents/CustomFormioSelect';
import CheckboxLegacy from './legacyComponents/Checkbox';
import RadioLegacy from './legacyComponents/Radio';
import CustomRadio from './formioComponents/CustomRadio';
import CustomFormioFile from './formioComponents/CustomFormioFile';
import LegacyDateTime from './legacyComponents/DateTime';
import CustomDateTime from './formioComponents/CustomDateTimePicker';
import CustomSelectBoxes from './formioComponents/CustomSelectBoxes';
import { Builder } from './Builder/Builder';
import CustomTextField from './formioComponents/CustomTextField';
import TextFieldLegacy from './legacyComponents/TextField';
import CustomNumber from './formioComponents/CustomNumber';
import NumberLegacy from './legacyComponents/Number';
import CustomEmail from './formioComponents/CustomEmail';
import EmailLegacy from './legacyComponents/Email';
import CustomAutocomplete from './formioComponents/CustomAutocomplete';
import CustomContent from './formioComponents/CustomContent';
import ContentLegacy from './legacyComponents/Content';
import CustomTextArea from './formioComponents/CustomTextArea';
import CustomEditGrid from './formioComponents/CustomEditGrid';
import EditGridLegacy from './legacyComponents/EditGrid';
import TextAreaLegacy from './legacyComponents/TextArea';
import FileLegacy from './legacyComponents/File';
import FieldSetLegacy from './legacyComponents/FieldSet';
import CustomButton from './formioComponents/CustomButton';
import CustomFieldSet from './formioComponents/CustomFieldSet';
import CustomColumns from './formioComponents/CustomColumns';
import ColumnsLegacy from './legacyComponents/Columns';
import TableLegacy from './legacyComponents/Table';
import CustomTable from './formioComponents/CustomTable';

const formioComponents = (Components as ComponentsConfig).components;

// TODO: To be changed after 'Latest' components are removed:
// TODOs in GlobalStyles.styles.ts file
// TODOs in components/Form/utils.ts file
export default {
  components: {
    [FCN.button]: CustomButton,
    [FCN.day]: CustomDay,
    [FCN.selectboxes]: CustomSelectBoxes,
    [FCN.htmlelement]: addComponentClass(formioComponents.htmlelement, COMPONENT_CLASSES.bootstrapComponent),
    [FCN.phoneNumber]: addComponentClass(formioComponents.phoneNumber, COMPONENT_CLASSES.bootstrapComponent),
    [FCN.address]: addComponentClass(formioComponents.address, COMPONENT_CLASSES.bootstrapComponent),
    [FCN.time]: addComponentClass(formioComponents.time, COMPONENT_CLASSES.bootstrapComponent),
    [FCN.currency]: addComponentClass(formioComponents.currency, COMPONENT_CLASSES.bootstrapComponent),
    [FCN.hidden]: addComponentClass(formioComponents.hidden, COMPONENT_CLASSES.bootstrapComponent),
    [FCN.resource]: addComponentClass(formioComponents.resource, COMPONENT_CLASSES.bootstrapComponent),
    [FCN.form]: addComponentClass(formioComponents.form, COMPONENT_CLASSES.bootstrapComponent),
    [FCN.signature]: addComponentClass(formioComponents.signature, COMPONENT_CLASSES.bootstrapComponent),
    [FCN.container]: addComponentClass(formioComponents.container, COMPONENT_CLASSES.bootstrapComponent),
    [FCN.datagrid]: addComponentClass(formioComponents.datagrid, COMPONENT_CLASSES.bootstrapComponent),
    [FCN.survey]: addComponentClass(formioComponents.survey, COMPONENT_CLASSES.bootstrapComponent),
    [FCN.columns]: addComponentClass(formioComponents.columns, COMPONENT_CLASSES.bootstrapComponent),
    [FCN.fieldset]: addComponentClass(formioComponents.fieldset, COMPONENT_CLASSES.bootstrapComponent),
    [FCN.panel]: addComponentClass(formioComponents.panel, COMPONENT_CLASSES.bootstrapComponent),
    [FCN.table]: addComponentClass(formioComponents.table, COMPONENT_CLASSES.bootstrapComponent),
    [FCN.well]: addComponentClass(formioComponents.well, COMPONENT_CLASSES.bootstrapComponent),
    [FCN.password]: addComponentClass(formioComponents.password, COMPONENT_CLASSES.bootstrapComponent),

    [FCN.editgrid]: changeComponentKey(EditGridLegacy, 'editgrid'),
    [FCN.editgridLatest]: changeComponentKey(CustomEditGrid, 'editgridLatest'),
    [FCN.editgridLegacy]: EditGridLegacy,

    [FCN.columns]: changeComponentKey(ColumnsLegacy, 'columns'),
    [FCN.columnsLatest]: changeComponentKey(CustomColumns, 'columnsLatest'),
    [FCN.columnsLegacy]: ColumnsLegacy,

    [FCN.datetime]: changeComponentKey(LegacyDateTime, 'datetime'),
    [FCN.datetimeLatest]: changeComponentKey(CustomDateTime, 'datetimeLatest'),
    [FCN.datetimeLegacy]: LegacyDateTime,

    [FCN.select]: changeComponentKey(CustomFormioSelect, 'select'),
    [FCN.selectLatest]: changeComponentKey(CustomAutocomplete, 'selectLatest'),
    [FCN.selectLegacy]: CustomFormioSelect,

    [FCN.file]: changeComponentKey(FileLegacy, 'file'),
    [FCN.fileLatest]: changeComponentKey(CustomFormioFile, 'fileLatest'),
    [FCN.fileLegacy]: FileLegacy,

    [FCN.checkbox]: changeComponentKey(CheckboxLegacy, 'checkbox'),
    [FCN.checkboxLatest]: changeComponentKey(CustomCheckbox, 'checkboxLatest'),
    [FCN.checkboxLegacy]: CheckboxLegacy,

    [FCN.radio]: changeComponentKey(RadioLegacy, 'radio'),
    [FCN.radioLatest]: changeComponentKey(CustomRadio, 'radioLatest'),
    [FCN.radioLegacy]: RadioLegacy,

    [FCN.textfield]: changeComponentKey(TextFieldLegacy, 'textfield'),
    [FCN.textfieldLatest]: changeComponentKey(CustomTextField, 'textfieldLatest'),
    [FCN.textfieldLegacy]: TextFieldLegacy,

    [FCN.number]: changeComponentKey(NumberLegacy, 'number'),
    [FCN.numberLatest]: changeComponentKey(CustomNumber, 'numberLatest'),
    [FCN.numberLegacy]: NumberLegacy,

    [FCN.email]: changeComponentKey(EmailLegacy, 'email'),
    [FCN.emailLatest]: changeComponentKey(CustomEmail, 'emailLatest'),
    [FCN.emailLegacy]: EmailLegacy,

    [FCN.content]: changeComponentKey(ContentLegacy, 'content'),
    [FCN.contentLatest]: changeComponentKey(CustomContent, 'contentLatest'),
    [FCN.contentLegacy]: ContentLegacy,

    [FCN.textarea]: changeComponentKey(TextAreaLegacy, 'textarea'),
    [FCN.textareaLatest]: changeComponentKey(CustomTextArea, 'textareaLatest'),
    [FCN.textareaLegacy]: TextAreaLegacy,

    [FCN.fieldset]: changeComponentKey(FieldSetLegacy, 'fieldset'),
    [FCN.fieldsetLatest]: changeComponentKey(CustomFieldSet, 'fieldsetLatest'),
    [FCN.fieldsetLegacy]: FieldSetLegacy,
    
    [FCN.table]: changeComponentKey(TableLegacy, 'table'),
    [FCN.tableLatest]: changeComponentKey(CustomTable, 'tableLatest'),
    [FCN.tableLegacy]: TableLegacy,
  },
  builders: {
    webform: Builder,
  },
};
