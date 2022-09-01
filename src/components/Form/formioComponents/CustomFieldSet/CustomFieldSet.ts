import { Components } from 'react-formio';
import { addUniqClasses, modifySelectRowData } from 'utils';
import settingsForm from './CustomFieldSetSettings';
import { COMPONENT_CLASSES } from '../../constants';
import imgUrl from 'assets/icons/popupIcon.svg';

const Fieldset = Components.components.fieldset;

export default class CustomFieldSet extends Fieldset {
  constructor(component: Record<string, unknown>, options: Record<string, unknown>, data: unknown) {
    super(component, options, data);
    this.component.customClass = addUniqClasses(
      COMPONENT_CLASSES.bootstrapComponent,
      COMPONENT_CLASSES.fieldset,
      this.component.customClass,
    );
  }

  attach(element: Element) {
    super.attach(element);
    const header = this.refs.header;

    if (header) {

      if (this.component.collapsible) {
        const img = document.createElement('img');
        img.src = imgUrl;
        header.appendChild(img);
      }

      if (!this.collapsed) {
        header.classList.toggle('non-collapsed');
      }
    }
  }

  checkCondition(row: Record<string, unknown>, data: Record<string, unknown>) {
    return super.checkCondition(modifySelectRowData(this.component, this.root, row), data);
  }

  static editForm = settingsForm;
}
