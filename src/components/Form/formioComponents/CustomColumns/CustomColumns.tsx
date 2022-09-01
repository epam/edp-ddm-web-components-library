import { Components } from 'react-formio';
import { addUniqClasses, modifySelectRowData } from 'utils';
import { COMPONENT_CLASSES } from 'components/Form/constants';
import settingsForm from './CustomColumnsSettings';

const FormioColumnsComponent = Components.components.columns;

export default class CustomColumns extends FormioColumnsComponent {
  static editForm = settingsForm;

  constructor(component: Record<string, unknown>, options: Record<string, unknown>, data: unknown) {
    super(component, options, data);
    this.component.customClass = addUniqClasses(
      COMPONENT_CLASSES.columns,
      COMPONENT_CLASSES.bootstrapComponent,
      this.component.customClass,
    );
  }

  checkCondition(row: Record<string, unknown>, data: Record<string, unknown>) {
    return super.checkCondition(modifySelectRowData(this.component, this.root, row), data);
  }
}
