import { Components } from 'react-formio';
import { addUniqClasses } from 'utils';
import settingsForm from './CustomTableSettings';
import { COMPONENT_CLASSES } from '../../constants';
import { modifySelectRowData } from '../../utils';

const TableComponent = Components.components.table;

export default class CustomTable extends TableComponent {
  constructor(component: Record<string, unknown>, options: Record<string, unknown>, data: unknown) {
    super(component, options, data);
    this.component.customClass = addUniqClasses(
      COMPONENT_CLASSES.table,
      COMPONENT_CLASSES.bootstrapComponent,
    );
  }

  checkCondition(row: Record<string, unknown>, data: Record<string, unknown>) {
    return super.checkCondition(modifySelectRowData(this.component, this.root, row), data);
  }

  static editForm = settingsForm;
}
