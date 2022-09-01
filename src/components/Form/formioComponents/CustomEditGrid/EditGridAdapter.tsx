import React from 'react';
import { Theme, withStyles, WithStyles } from '@material-ui/core';
import mapValues from 'lodash/mapValues';
import isNumber from 'lodash/isNumber';
import isEqual from 'lodash/isEqual';
import { Formio } from 'formiojs';

import {
  EditGridComponent, FORMIO_EVENT, FormComponent, FormSubmission,
} from 'components/Form/types';
import withFormioControl from 'components/Form/components/WithFormioControl';
import { FormControlError } from 'types/formControls';
import Form from 'components/Form/Form';
import FieldError from 'components/FieldError';
import { ColumnDefinition, ListItem } from 'types/table';
import Table from 'components/Table';
import Modal from 'components/Modal';
import Button, { ButtonVariants } from 'components/Button';
import Typography from 'components/Typography';
import PlusIcon from 'components/Icons/PlusIcon';
import TrashCanIcon from 'components/Icons/TrashCanIcon';
import InlineButton from 'components/InlineButton';
import DescriptionBox from 'components/DescriptionBox';

import EditGridActions from './components/EditGridActions';
import styles from './CustomEditGrid.styles';

interface Props extends WithStyles<typeof styles> {
  value: Array<Record<string, unknown>>;
  name: string;
  onChange: (value: unknown) => void;
  component: EditGridComponent;
  error?: FormControlError;
  components: Array<FormComponent>;
  language: string;
  theme: Theme;
  disabled?: boolean;
  textLabels: {
    add: string,
    save: string,
    edit: string,
    delete: string,
    cancel: string,
    emptyPlaceholder: string,
    deleteConfirmationTitle: string,
    deleteConfirmationYes: string,
    deleteConfirmationNo: string,
  };
}

interface State {
  isEditing: boolean;
  itemUnderEdit?: Record<string, unknown>;
  indexUnderEdit?: number;
  indexUnderDeletion: number | null;
}

interface ComponentClass {
  path: string,
  getValueAsString: (value: unknown) => string,
}

class EditGridAdapter extends React.Component<Props, State> {
  state = {
    isEditing: false,
    indexUnderDeletion: null,
  } as State;

  forms: Array<{ components: Array<ComponentClass>, submission?: Record<string, unknown> }> = [];

  saveButtonComponent = {
    type: 'button',
    label: this.props.component.saveRow || this.props.textLabels.save,
    key: 'submit',
    size: 'md',
    block: false,
    action: 'submit',
    disableOnInvalid: true,
    theme: 'primary',
    input: true,
    unique: false,
    hidden: false,
    clearOnHide: true,
    refreshOn: '',
    redrawOn: '',
    tableView: false,
    modalEdit: false,
    labelPosition: 'top',
    description: '',
    errorLabel: '',
    tooltip: '',
    hideLabel: false,
    tabindex: '',
    disabled: false,
    autofocus: false,
    customDefaultValue: '',
    calculateValue: '',
    widget: {
      type: 'input',
    },
    attributes: {},
    validateOn: 'change',
    validate: {
      required: false,
      custom: '',
      customPrivate: false,
      strictDateValidation: false,
      multiple: false,
      unique: false,
    },
    components: null,
    properties: {},
    id: 'ey7dq4',
  } as FormComponent;

  cancelButtonComponent = {
    type: 'button',
    label: this.props.component.removeRow || this.props.textLabels.cancel,
    key: 'cancel',
    size: 'md',
    block: false,
    action: 'event',
    event: FORMIO_EVENT.CANCEL,
    disableOnInvalid: false,
    theme: 'secondary',
    input: true,
    hidden: false,
    clearOnHide: true,
    refreshOn: '',
    redrawOn: '',
    tableView: false,
    modalEdit: false,
    labelPosition: 'top',
    description: '',
    errorLabel: '',
    tooltip: '',
    hideLabel: false,
    tabindex: '',
    disabled: false,
    autofocus: false,
    customDefaultValue: '',
    calculateValue: '',
    widget: {
      type: 'input',
    },
    attributes: {},
    validateOn: 'change',
    validate: {
      required: false,
      custom: '',
      customPrivate: false,
      strictDateValidation: false,
      multiple: false,
      unique: false,
    },
    components: null,
    properties: {},
    id: 'ey7dq4',
  } as FormComponent;

  componentDidMount() {
    const { value } = this.props;
    if (value?.length) {
      this.init();
    }
  }

  componentDidUpdate = (prevProps: Props) => {
    if (!isEqual(this.props.value, prevProps.value)) {
      this.init();
    }
  };

  /*
  This function creates instances of formio forms for each table row,
  so we can later use them to get component instance of each cell.
   */
  init = () => {
    const {
      components,
      value,
      theme,
      onChange,
      language,
    } = this.props;
    const editGridValue = value || [];

    this.forms = [];

    Promise.all(
      editGridValue.map((data, index) => (
        Formio.createForm(
          document.getElementById(this.getFormId(index)),
          { components, submission: { data } },
          { theme, language },
        )
          .then((form: { components: ComponentClass[]; }) => {
            this.forms[index] = form;
            this.forms[index].submission = { data };
          }))),
    ).then(() => {
      const formioValue = this.forms.map((form) => form.submission?.data);
      if (!isEqual(formioValue, editGridValue)) {
        // Formio could have set default values for it's components. We need to reflect that in editGrid value
        onChange(formioValue);
      } else {
        this.forceUpdate();
      }
    });
  };

  onRowSubmit = (data: FormSubmission, index?: number) => {
    const { onChange, value } = this.props;

    if (isNumber(index)) {
      onChange([...value.slice(0, index), data.data, ...value.slice(index + 1)]);
    } else {
      onChange([...value, data.data]);
    }

    this.setState({
      isEditing: false,
    });
  };

  onAdd = () => {
    this.setState({
      isEditing: true,
      itemUnderEdit: {},
      indexUnderEdit: undefined,
    });
  };

  onEdit = (index: number) => () => {
    const { value } = this.props;
    const item = value[index];
    this.setState({
      isEditing: true,
      itemUnderEdit: item,
      indexUnderEdit: index,
    });
  };

  onDelete = (index: number) => () => {
    this.setState({
      indexUnderDeletion: index,
    });
  };

  onDeleteConfirmation = () => {
    const { onChange, value } = this.props;
    const { indexUnderDeletion } = this.state;

    if (isNumber(indexUnderDeletion)) {
      onChange([...value.slice(0, indexUnderDeletion), ...value.slice(indexUnderDeletion + 1)]);
    }
    this.onDeleteConfirmationChange(false);
  };

  onEditingChange = (isEditing: boolean) => {
    this.setState({
      isEditing,
    });
  };

  onDeleteConfirmationChange = (isModalOpen?: boolean) => {
    if (!isModalOpen) {
      this.setState({
        indexUnderDeletion: null,
      });
    }
  };

  getStringValue = (index: number, key: string, data: unknown) => {
    return this.forms[index]?.components
      .find((component) => component.path === key)
      ?.getValueAsString(data);
  };

  onFormEvent = ({ type }: { type: string }) => {
    if (type === FORMIO_EVENT.CANCEL) {
      this.setState({
        isEditing: false,
      });
    }
  };

  getFormId = (index: number) => `formio-form-${index}`;

  allowAddingItems = () => {
    const {
      value = [],
      component,
    } = this.props;
    const maxLength = component.validate?.maxLength;

    if (isNumber(maxLength)) {
      return value.length < maxLength;
    }

    return true;
  };

  allowRemovingItems = () => {
    const {
      value = [],
      component,
    } = this.props;
    const minLength = component.validate?.minLength;

    if (isNumber(minLength)) {
      return value.length > minLength;
    }

    return true;
  };

  render() {
    const {
      value,
      name,
      component,
      error,
      components,
      textLabels,
      classes,
      language,
      disabled,
    } = this.props;
    const {
      isEditing,
      itemUnderEdit,
      indexUnderEdit,
      indexUnderDeletion,
    } = this.state;
    const editGridValue = value || [];

    const displayList = editGridValue
      .map((item, index) => ({
        ...mapValues(item, (data, key) => this.getStringValue(index, key, data)),
        id: index.toString(),
      } as ListItem));
    const columnDefinitions: ColumnDefinition[] = components
      .filter((c) => c.tableView && !c.hidden)
      .map((c) => ({
        property: c.key,
        title: c.label,
        // TODO: replace with customisable value (MDTUDDM-11160)
        width: '400px',
      } as ColumnDefinition))
      .concat([
        {
          property: '',
          title: '',
          sortable: false,
          cellClass: classes.actionsCell,
          Component: ({ item }) => {
            const index = displayList.indexOf(item);
            return (
              <EditGridActions
                onDeleteClick={this.onDelete(index)}
                onEditClick={this.onEdit(index)}
                deleteButtonText={textLabels.delete}
                editButtonText={textLabels.edit}
                deleteButtonDisabled={
                  disabled || component.disableAddingRemovingRows || !this.allowRemovingItems()
                }
                editButtonDisabled={disabled}
              />
            );
          },
        },
      ] as ColumnDefinition[]);

    return (
      <div data-xpath={name} className={classes.root}>
        <Table
          columnDefinitions={columnDefinitions}
          list={displayList}
          header={{
            'data-xpath': 'editGrid-table-header',
          }}
          emptyPlaceholder={textLabels.emptyPlaceholder}
          emptyPlaceholderIcon=""
          emptyPlaceholderInline
          pagination={{
            totalItems: editGridValue.length,
            page: 0,
            rowsPerPage: editGridValue.length,
            hidePaginationControls: true,
          }}
          classes={{
            root: classes.table,
            table: classes.tableInner,
            cell: classes.cell,
            row: classes.row,
          }}
        />
        <InlineButton
          onLinkClick={this.onAdd}
          disabled={disabled || component.disableAddingRemovingRows || !this.allowAddingItems()}
          component="button"
          classes={{ link: classes.addButton }}
          leftIcon={<PlusIcon />}
          size="medium"
        >
          {component.addAnother || textLabels.add}
        </InlineButton>
        {component.description && <DescriptionBox description={component.description} /> }
        {error && (
          <FieldError error={error} />
        )}
        <div style={{ display: 'none' }}>
          {
            displayList.map((data, index) => (
              <div id={this.getFormId(index)} key={data.id} />
            ))
          }
        </div>
        <Modal isOpen={isEditing} onOpenChange={this.onEditingChange} classes={{ paper: classes.modal }}>
          {
            itemUnderEdit && (
              <div className={classes.form}>
                <Form
                  onSubmit={(data) => this.onRowSubmit(data, indexUnderEdit)}
                  language={language}
                  components={[...components, this.saveButtonComponent, this.cancelButtonComponent]}
                  submissionData={{ data: itemUnderEdit }}
                  onCustomEvent={this.onFormEvent}
                  parentPath={component.key}
                />
              </div>
            )
          }
        </Modal>
        <Modal
          isOpen={isNumber(indexUnderDeletion)}
          onOpenChange={this.onDeleteConfirmationChange}
          classes={{ paper: classes.modal }}
        >
          <div className={classes.deleteConfirmationRoot}>
            <Typography variant="h1">
              <TrashCanIcon />
            </Typography>
            <Typography variant="h2" className={classes.deleteModalTitle}>
              {textLabels.deleteConfirmationTitle}
            </Typography>
            <div>
              <Button
                onClick={() => this.onDeleteConfirmationChange(false)}
                className={classes.deleteModalButton}
              >
                {textLabels.deleteConfirmationNo}
              </Button>
              <Button
                onClick={this.onDeleteConfirmation}
                className={classes.deleteModalButton}
                variant={ButtonVariants.secondary}
              >
                {textLabels.deleteConfirmationYes}
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default (withFormioControl(withStyles(styles)(EditGridAdapter)));
