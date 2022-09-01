import { Components } from 'react-formio';
import { addUniqClasses, modifySelectRowData } from 'utils';
import { ComponentsConfig, FormioComponentName } from '../../types';
import { COMPONENT_CLASSES } from '../../constants';

const Columns = (Components as ComponentsConfig).components.columns;

export default class ColumnsLegacy extends Columns {
  static schema() {
    return Columns.schema({
      type: FormioComponentName.columnsLegacy,
      key: 'columnsLegacy',
    });
  }

  static get builderInfo() {
    return {
      ...Columns.builderInfo,
      schema: ColumnsLegacy.schema(),
    };
  }

  constructor(component: Record<string, unknown>, options: Record<string, unknown>, data: unknown) {
    super(component, options, data);
    this.component.customClass = addUniqClasses(COMPONENT_CLASSES.bootstrapComponent, this.component.customClass);
  }

  checkCondition(row: Record<string, unknown>, data: Record<string, unknown>) {
    return super.checkCondition(modifySelectRowData(this.component, this.root, row), data);
  }
}
