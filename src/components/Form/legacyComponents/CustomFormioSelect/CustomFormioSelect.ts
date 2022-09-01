/* eslint-disable */
import { Components } from 'react-formio';
import isEmpty from 'lodash/isEmpty';
import isEqual from 'lodash/isEqual';
import isObject from 'lodash/isObject';
import each from 'lodash/each';

import { withLegacyComponent } from 'components/Form/components/WithLegacyComponent/WithLegacyComponent';
import { COMPONENT_CLASSES, FORMIO_SELECT_VALUE_PROPERTY } from '../../constants';
import { addUniqClasses } from 'utils';
import { FormioComponentName } from 'components/Form/types';

const SelectComponent = (Components as any).components.select;

export default class CustomSelect extends withLegacyComponent(SelectComponent) {
  static schema() {
    return SelectComponent.schema({
      type: FormioComponentName.selectLegacy,
      key: 'selectLegacy',
    });
  }

  static get builderInfo() {
    return {
      ...SelectComponent.builderInfo,
      schema: CustomSelect.schema(),
    };
  }
  get valueProperty() {
    // NEXT LINE IS DIFFERENT FROM FORM.IO SOURCE
    return FORMIO_SELECT_VALUE_PROPERTY;
  }

  constructor(component: Record<string, unknown>, options: Record<string, unknown>, data: unknown) {
    super(component, options, data);
    this.component.customClass = addUniqClasses(COMPONENT_CLASSES.bootstrapComponent, this.component.customClass);
  }

  addCurrentChoices(values: any, items: any, keyValue: any) {
    if (!values) {
      return false;
    }
    const notFoundValuesToAdd: Array<any> = [];
    const added = values.reduce((defaultAdded: any, value: any) => {
      if (!value || isEmpty(value)) {
        return defaultAdded;
      }
      let found = false;

      // Make sure that `items` and `this.selectOptions` points
      // to the same reference. Because `this.selectOptions` is
      // internal property and all items are populated by
      // `this.addOption` method, we assume that items has
      // 'label' and 'value' properties. This assumption allows
      // us to read correct value from the item.
      const isSelectOptions = items === this.selectOptions;
      if (items && items.length) {
        each(items, (choice) => {
          if (choice._id && value._id && (choice._id === value._id)) {
            found = true;
            return false;
          }
          const itemValue = keyValue ? choice.value : this.itemValue(choice, isSelectOptions);
          found = found || isEqual(itemValue, value);
          return !found;
        });
      }

      // Add the default option if no item is found.
      if (!found) {
        // NEXT 4 LINES ARE DIFFERENT FROM FORM.IO SOURCE
        const valueProperty = this.valueProperty;
        notFoundValuesToAdd.push({
          value: this.itemValue({ [valueProperty]: value }),
          label: this.itemTemplate({ [valueProperty]: value })
        });
        return true;
      }
      return found || defaultAdded;
    }, false);

    if (notFoundValuesToAdd.length) {
      if (this.choices) {
        this.choices.setChoices(notFoundValuesToAdd, 'value', 'label');
      }
      else {
        notFoundValuesToAdd.map(notFoundValue => {
          this.addOption(notFoundValue.value, notFoundValue.label);
        });
      }
    }
    return added;
  }

  setItems(items: any, fromSearch: any) {
    // NEXT 2 LINES ARE DIFFERENT FROM FORM.IO SOURCE
    const itemsValue = items.map((option: any) => ({ [FORMIO_SELECT_VALUE_PROPERTY]: option }));
    super.setItems(itemsValue, fromSearch);
  }

  getValueAsString(data: any) {
    // NEXT 5 LINES ARE DIFFERENT FROM FORM.IO SOURCE
    const valueProperty = this.valueProperty;

    return (this.component.multiple && Array.isArray(data))
      ? data.map((item) => this.asString({ [valueProperty]: item })).join(', ')
      : this.asString({ [valueProperty]: data });
  }

  itemTemplate(data: any) {
    if (isEmpty(data)) {
      return '';
    }

    // If they wish to show the value in read only mode, then just return the itemValue here.
    if (this.options.readOnly && this.component.readOnlyValue) {
      return this.itemValue(data);
    }

    // Perform a fast interpretation if we should not use the template.
    if (data && !this.component.template) {
      const itemLabel = data.label || data;
      return (typeof itemLabel === 'string') ? this.t(itemLabel) : itemLabel;
    }
    if (typeof data === 'string') {
      return this.t(data);
    }

    if (data.data) {
      // checking additional fields in the template for the selected Entire Object option
      const hasNestedFields = /item\.data\.\w*/g.test(this.component.template);
      data.data = this.isEntireObjectDisplay() && isObject(data.data) && !hasNestedFields
        ? JSON.stringify(data.data)
        : data.data;
    }
    // NEXT 2 LINES ARE DIFFERENT FROM FORM.IO SOURCE
    const itemValue = data[FORMIO_SELECT_VALUE_PROPERTY] || data;
    const template = this.sanitize(this.component.template ? this.interpolate(this.component.template, { item: itemValue }) : data.label);
    if (template) {
      const label = template.replace(/<\/?[^>]+(>|$)/g, '');
      if (!label || !this.t(label)) return;
      return template.replace(label, this.t(label));
    }
    else {
      return JSON.stringify(data);
    }
  }

  setErrorClasses(elements: any, dirty: boolean, hasError: boolean, hasMessages: boolean, element = this.element) {
    // NEXT 5 LINES ARE DIFFERENT FROM FORM.IO SOURCE
    super.setErrorClasses(elements, dirty, hasError, hasMessages, element);
    if (this.choices) {
      super.setErrorClasses([this.choices.containerInner.element], dirty, hasError, hasMessages, element);
    }
    else {
      super.setErrorClasses([this.refs.selectContainer], dirty, hasError, hasMessages, element);
    }
  }
}
