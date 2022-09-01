import React from 'react';
import { ReactComponent } from 'react-formio';
import {
  debounce,
  get, isArray, isEmpty, isObject, uniqBy,
} from 'lodash';
import qs from 'query-string';

import { addUniqClasses } from 'utils';
import { FormioComponentName, SelectComponent } from 'components/Form/types';
import { ItemProps } from 'components/FormControls/Autocomplete/Autocomplete';
import { COMPONENT_CLASSES, FORMIO_SELECT_VALUE_PROPERTY } from 'components/Form/constants';
import CommonFormioComponent from '../CommonFormioComponent';
import customAutocompleteSettings from './CustomAutocompleteSettings';
import AutocompleteAdapter from './AutocompleteAdapter';
import OptionsService from './OptionsService';

const DEFAULT_LIMIT = 100;
export default class CustomSelect extends CommonFormioComponent {
  static get builderInfo() {
    return {
      title: 'Select',
      icon: 'th-list',
      group: 'basic',
      documentation: '',
      weight: 70,
      schema: CustomSelect.schema(),
    };
  }

  static schema() {
    return ReactComponent.schema({
      type: FormioComponentName.select,
      label: 'Default Label',
      key: 'select',
      idPath: 'id',
      data: {
        values: [],
        json: '',
        url: '',
        resource: '',
        custom: '',
      },
      dataSrc: 'values',
      template: '{{ item.label }}',
      limit: DEFAULT_LIMIT,
      minSearch: 0,
    });
  }

  static editForm = customAutocompleteSettings;

  private SEARCH_DEBOUNCE_MS = 500;

  get componentDefinition() {
    return this.component as SelectComponent;
  }

  optionsService: OptionsService;

  constructor(component: SelectComponent, options: Record<string, unknown>, data: unknown) {
    super(component, options, data);

    const setValue = this.setValue;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.setValue = (value: any, flags = {}) => {
      setValue.call(this, isEmpty(value) ? this.emptyValue : value, flags);
    };

    this.component.customClass = addUniqClasses(COMPONENT_CLASSES.select, this.component.customClass);
    this.optionsService = new OptionsService();
    this.optionsService.data$.subscribe(this.updateDataValue);
  }

  init = () => {
    if (!this.isLazyLoad) {
      this.loadOptions();
    }

    this.attachRefreshOnBlur();

    this.validators = this.validators.concat(['select', 'onlyAvailableItems']);
    return super.init();
  };

  attachRefreshOnBlur() {
    if (this.component.refreshOnBlur) {
      this.on('blur', (instance: { dataValue: unknown; }) => {
        this.checkRefreshOn([{ instance, value: instance.dataValue }], { fromBlur: true });
      });
    }
  }

  getFormattedOptions = () => {
    if (this.isDataSrcUrl) {
      const serverData = this.optionsService.data$.getValue().list;
      // return serverData;
      return serverData.map((item) => this.getFormattedValue(item, false));
    }
    if (this.componentDefinition.dataSrc === 'custom') {
      const data = this.optionsService.data$.getValue().list;
      return data.map((item) => this.getFormattedValue(item, false));
    }
    const { values } = this.componentDefinition.data;
    if (isArray(values) && values.length && values[0].value) {
      return values.map((item) => this.getFormattedValue(item, false));
    }

    return [];
  };

  getOptions = () => {
    const options = this.getFormattedOptions();
    const defaultValue = this.convertNumberOrBoolToString(this.defaultValue);

    if (isEmpty(defaultValue)) {
      return options;
    }

    const value = typeof defaultValue === 'object' ? defaultValue
      : {
        [this.componentDefinition.valueProperty || 'value']: defaultValue,
        label: defaultValue,
      };

    return uniqBy([...options, this.getFormattedValue(value, false)], 'value');
  };

  getCustomItems() {
    return this.evaluate(this.component.data.custom, {
      values: [],
    }, 'values') || [];
  }

  // Remove this nesting in FORMIO_SELECT_VALUE_PROPERTY after refactoring form definitions
  get selectOptions() {
    return this.getFormattedOptions().map((option) => ({ [FORMIO_SELECT_VALUE_PROPERTY]: option }));
  }

  itemTemplate(item: unknown) {
    const data = item as Record<string, unknown> | string;
    if (isEmpty(data)) {
      return '';
    }
    // If they wish to show the value in read only mode, then just return the itemValue here.
    if (this.options.readOnly && this.component.readOnlyValue) {
      return this.itemValue(data);
    }
    if (typeof data === 'string') {
      return this.t(data);
    }
    // Perform a fast interpretation if we should not use the template.
    if (data && !this.component.template) {
      const itemLabel = data.label || data;
      return (typeof itemLabel === 'string') ? this.t(itemLabel) : itemLabel;
    }

    if (data.data) {
      // checking additional fields in the template for the selected Entire Object option
      const hasNestedFields = /item\.data\.\w*/g.test(this.component.template);
      data.data = this.isEntireObjectDisplay() && isObject(data.data) && !hasNestedFields
        ? JSON.stringify(data.data)
        : data.data;
    }
    const template = this.sanitize(
      this.component.template
        ? this.interpolate(this.component.template, { item: data }) : data.label,
    );
    if (template) {
      // get text from HTML template
      const div = document.createElement('div');
      div.innerHTML = template;
      const label = div.textContent;

      if (!label || !this.t(label)) {
        return '';
      }
      const tLabel = this.t(label);
      // This 2 lines disable support html in templates, with material select it is hard to implement this.
      // const translatedLabel = template.replace(label, tLabel);
      // return translatedLabel;
      return tLabel;
    }

    return JSON.stringify(data);
  }

  handleInputChange = (value: string | number) => {
    this.loadOptions(value.toString());
  };

  handleInputFocus = () => {
    const { isLoaded } = this.optionsService.data$.getValue();
    if (this.isLazyLoad && !isLoaded) {
      this.loadOptions();
    }
  };

  // FUNCTION IS DIFFERENT FROM FORM.IO SOURCE
  getValueAsString(data: Record<string, unknown> | Array<Record<string, unknown>>) {
    return (this.component.multiple && Array.isArray(data))
      ? data.map((item) => this.itemTemplate(item)).join(', ')
      : this.itemTemplate(data);
  }

  loadOptions = debounce((search?: string) => {
    if (this.isDataSrcUrl) {
      const {
        filter, disableLimit, limit, searchField, data, minSearch,
      } = this.componentDefinition;
      let query = {} as Record<string, string | number>;

      if (minSearch && (!search || (search.length < minSearch))) {
        this.optionsService.setData([]);
        return;
      }

      if (filter) {
        let filterObj = {};
        const interpolatedFilter = this.interpolate(filter);
        filterObj = qs.parse(interpolatedFilter);
        query = filterObj;
      }

      if (!disableLimit) {
        query.limit = limit || DEFAULT_LIMIT;
      }

      if (search && searchField) {
        query[searchField] = search;
      }

      this.optionsService.loadData({
        url: data.url,
        query,
      }).subscribe();
    } else if (this.componentDefinition.dataSrc === 'custom') {
      const items = this.getCustomItems();
      this.optionsService.setData(items);
    }
  }, this.SEARCH_DEBOUNCE_MS, { leading: true });

  refresh = () => {
    if (this.component.clearOnRefresh) {
      this.setValue(this.emptyValue);
      this.updateValue(this.emptyValue);
    }

    this.updateItems(null, true);
    this.loadOptions();
    super.refresh();
  };

  handleChange = (data: Array<ItemProps> | ItemProps) => {
    if (!data) {
      return this.updateValue(null);
    }
    if (isArray(data) && this.componentDefinition.multiple) {
      return this.updateValue(data.map((item) => item.originalValue || item));
    }
    if (isArray(data) && !this.componentDefinition.multiple) {
      return this.updateValue(data);
    }
    if (!isArray(data)) {
      return this.updateValue(data.originalValue);
    }
    return data;
  };

  getFormattedValue = (item: ItemProps | ItemProps[] | Record<string, unknown>, useEmptyValue = true) => {
    if (this.componentDefinition.multiple && !isArray(item) && useEmptyValue) {
      return this.emptyValue;
    }
    if (!item || (isArray(item) && item.length === 0)) {
      return item;
    }
    if (isArray(item)) {
      return item.map((element) => {
        if (element.originalValue) {
          return element;
        }
        const value = get(element, this.componentDefinition.valueProperty || 'value') || '';
        const label = this.itemTemplate(this.convertNumberOrBoolToString(element));
        return {
          value,
          label,
          originalValue: element,
        };
      });
    }
    if (item.originalValue) {
      return item;
    }
    const value = get(item, this.componentDefinition.valueProperty || 'value') || '';
    const label = this.itemTemplate(this.convertNumberOrBoolToString(item));
    return {
      value,
      label,
      originalValue: item,
    };
  };

  get shouldAddDefaultValue() {
    return (!isEmpty(this.componentDefinition.defaultValue)
     || this.componentDefinition.customDefaultValue) && isEmpty(this.dataValue);
  }

  updateDataValue = () => {
    super.refresh();
    if (this.shouldAddDefaultValue) {
      // If a default value is provided then select it.
      const { defaultValue } = this;
      // if (!this.isEmpty(defaultValue)) {
      const value = defaultValue?.originalValue || defaultValue;
      this.updateValue(value);
      // }
    }
  };

  get emptyValue() {
    if (this.component.multiple) {
      return [];
    }
    return {};
  }

  get isDataSrcUrl() {
    return this.componentDefinition.dataSrc === 'url';
  }

  get isLazyLoad() {
    return this.componentDefinition.lazyLoad && this.isDataSrcUrl;
  }

  get isSearchingOnServer() {
    return this.componentDefinition.searchField && this.isDataSrcUrl;
  }

  renderReact = () => {
    return (
      <AutocompleteAdapter
        theme={this.root.options.theme}
        component={this.componentDefinition}
        value={this.dataValue}
        onChange={this.handleChange}
        options={this.getOptions()}
        onInputChange={this.isSearchingOnServer ? this.handleInputChange : undefined}
        onInputFocus={this.handleInputFocus}
        onInputBlur={this.handleOnBlure}
        valueFormatter={this.getFormattedValue}
        error={this.error}
        disabled={this.disabled}
        name={get(this, 'info.attr.name')}
      />
    );
  };
}
