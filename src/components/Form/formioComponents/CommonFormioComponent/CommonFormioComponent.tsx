import { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import { ReactComponent } from 'react-formio';
import { delay } from 'formiojs/utils/utils';
import { NAVIGATION_CODE } from 'components/Form/constants';
import { modifySelectRowData, checkRefresh } from 'utils';

abstract class CommonFormioComponent extends ReactComponent {
  /**
   * This function tells the form builder about your component. It's name, icon and what group it should be in.
   *
   * @returns {{title: string, icon: string, group: string, documentation: string, weight: number, schema: *}}
   */
  static get builderInfo() {
    /* OVERWRITE THIS */
    return {
      title: '',
      icon: '',
      group: '',
      documentation: '',
      weight: 0,
      schema: {},
    };
  }

  /**
   * This function is the default settings (in builder) for the component.
   * At a minimum you want to set the type to the registered
   *
   * @param sources
   * @returns {*}
   */
  static schema() {
    /* OVERWRITE THIS */
    return ReactComponent.schema({
      type: '',
      label: 'Default Label',
      key: '',
    });
  }

  /*
  * Defines the settingsForm when editing a component in the builder.
  * OVERWRITE THIS
  */
  static editForm = {};

  abstract renderReact: () => ReactElement;

  protected constructor(component: unknown, options: Record<string, unknown>, data: unknown) {
    super(component, options, data);
  }

  abstract get emptyValue(): unknown;

  checkValidity(data: Record<string, unknown>, dirty: boolean, rowData: Record<string, unknown>, silentCheck: boolean) {
    const valid = Object.getPrototypeOf(ReactComponent.prototype).checkValidity
      .call(this, data, dirty, rowData, silentCheck);
    if (!valid) {
      return false;
    }
    return this.validate(data, dirty, rowData);
  }

  setCustomValidity(messages: Array<unknown>, dirty: boolean, external: unknown) {
    const previousMessage = this.error?.message;
    const result = super.setCustomValidity(messages, dirty, external);

    if (previousMessage !== this.error?.message) {
      this.rerender();
    }
    return result;
  }

  updateValue = (value: unknown, flags = {}) => {
    return super.updateValue(value, { ...flags, modified: true });
  };

  setValue = (value: unknown, flags: { fromSubmission?: boolean } = {}) => {
    super.setValue(value, flags);
    if (!flags.fromSubmission) {
      super.updateValue(value, flags);
    }
  };

  rerender() {
    if (this.refs[`react-${this.id}`]) {
      this.reactInstance = this.attachReact(this.refs[`react-${this.id}`]);
    }
  }

  refresh() {
    this.rerender();
  }

  init() {
    return super.init();
  }

  /**
   * This function is called when the DIV has been rendered and added to the DOM.
   * You can now instantiate the react component.
   *
   * @param element
   * #returns ReactInstance
   */
  attachReact(element: Element | DocumentFragment) {
    // TODO: read and understand:
    //  https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
    // eslint-disable-next-line react/no-render-return-value
    return ReactDOM.render(
      this.renderReact(),
      element,
    );
  }

  /**
   * Automatically detach any react components.
   *
   * @param element
   */
  // eslint-disable-next-line class-methods-use-this
  detachReact(element: Element | DocumentFragment) {
    if (element) {
      ReactDOM.unmountComponentAtNode(element);
    }
  }

  protected initReactInstance(ref: HTMLElement) {
    this.reactInstance = ref;
  }

  protected handleOnBlure = () => {
    this.root.pendingBlur = delay(() => {
      this.emit('blur', this);
      if (this.component.validateOn === 'blur') {
        this.root.triggerChange({ fromBlur: true }, {
          instance: this,
          component: this.component,
          value: this.dataValue,
          flags: { fromBlur: true },
        });
      }
      this.root.focusedComponent = null;
      this.root.pendingBlur = null;
    });
  };

  checkCondition(row: Record<string, unknown>, data: Record<string, unknown>) {
    return super.checkCondition(modifySelectRowData(this.component, this.root, row), data);
  }

  shouldSkipValidation(data: Record<string, unknown>, dirty: boolean, row: Record<string, unknown>) {
    if (data[NAVIGATION_CODE]) {
      return true;
    }
    return super.shouldSkipValidation(data, dirty, row);
  }

  checkRefresh(refreshData: string, changed: Record<string, unknown>, flags: Record<string, unknown>) {
    return checkRefresh.call(this, refreshData, changed, flags);
  }
}

export default CommonFormioComponent;
