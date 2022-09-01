import { Components } from 'react-formio';
import { addUniqClasses, modifySelectRowData } from 'utils';
import { ComponentsConfig, FormioComponentName } from '../../types';
import { COMPONENT_CLASSES } from '../../constants';

const Table = (Components as ComponentsConfig).components.table;

export default class TableLegacy extends Table {
  static schema() {
    return Table.schema({
      type: FormioComponentName.tableLegacy,
      key: 'tableLegacy',
    });
  }

  static get builderInfo() {
    return {
      ...Table.builderInfo,
      schema: TableLegacy.schema(),
    };
  }

  constructor(component: Record<string, unknown>, options: Record<string, unknown>, data: unknown) {
    super(component, options, data);
    this.component.customClass = addUniqClasses(this.component.customClass, COMPONENT_CLASSES.bootstrapComponent);
  }

  checkCondition(row: Record<string, unknown>, data: Record<string, unknown>) {
    return super.checkCondition(modifySelectRowData(this.component, this.root, row), data);
  }
}
