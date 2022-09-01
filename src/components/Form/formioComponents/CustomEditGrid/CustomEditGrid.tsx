import { ReactComponent } from 'react-formio';
import get from 'lodash/get';
import React from 'react';
import { addUniqClasses } from 'utils';

import { FormComponent, FormioComponentName } from 'components/Form/types';
import { COMPONENT_CLASSES, I18N_SEPARATOR } from 'components/Form/constants';

import CommonFormioComponent from '../CommonFormioComponent';
import settingsForm from './CustomEditGridSettings';
import EditGridAdapter from './EditGridAdapter';

class CustomEditGrid extends CommonFormioComponent {
  static schema() {
    return ReactComponent.schema({
      type: FormioComponentName.editgrid,
      label: 'Edit Grid',
      key: 'editgrid',
      components: [],
      removeRow: '',
    });
  }

  static get builderInfo() {
    return {
      title: 'EditGrid',
      group: 'advanced',
      icon: 'at',
      documentation: '/userguide/#editgrid',
      weight: 10,
      schema: CustomEditGrid.schema(),
    };
  }

  static editForm = settingsForm;

  constructor(component: Record<string, unknown>, options: Record<string, unknown>, data: unknown) {
    super(component, options, data);
    this.component.customClass = addUniqClasses(COMPONENT_CLASSES.editgrid, this.component.customClass);
  }

  get componentDefinition() {
    return this.component as FormComponent;
  }

  // eslint-disable-next-line class-methods-use-this
  get emptyValue() {
    return [];
  }

  renderReact = () => {
    return (
      <EditGridAdapter
        theme={this.root.options.theme}
        component={this.componentDefinition}
        name={get(this, 'info.attr.name')}
        value={this.dataValue}
        onChange={this.updateValue}
        error={this.error}
        components={this.component.components}
        language={this.i18next.language}
        disabled={this.disabled}
        textLabels={{
          add: this.t(`customFormioComponents${I18N_SEPARATOR}editGrid${I18N_SEPARATOR}add`),
          save: this.t(`customFormioComponents${I18N_SEPARATOR}editGrid${I18N_SEPARATOR}save`),
          cancel: this.t(`customFormioComponents${I18N_SEPARATOR}editGrid${I18N_SEPARATOR}cancel`),
          edit: this.t(`customFormioComponents${I18N_SEPARATOR}editGrid${I18N_SEPARATOR}edit`),
          delete: this.t(`customFormioComponents${I18N_SEPARATOR}editGrid${I18N_SEPARATOR}delete`),
          emptyPlaceholder: this.t(
            `customFormioComponents${I18N_SEPARATOR}editGrid${I18N_SEPARATOR}empty`,
          ),
          deleteConfirmationTitle: this.t(
            `customFormioComponents${I18N_SEPARATOR}editGrid${I18N_SEPARATOR}deleteConfirmationTitle`,
          ),
          deleteConfirmationYes: this.t(
            `customFormioComponents${I18N_SEPARATOR}editGrid${I18N_SEPARATOR}deleteConfirmationYes`,
          ),
          deleteConfirmationNo: this.t(
            `customFormioComponents${I18N_SEPARATOR}editGrid${I18N_SEPARATOR}deleteConfirmationNo`,
          ),
        }}
      />
    );
  };
}

export default CustomEditGrid;
