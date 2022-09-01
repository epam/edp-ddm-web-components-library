import { Components } from 'react-formio';
import { addUniqClasses } from 'utils';

import { ButtonComponent, ComponentsConfig, FORMIO_EVENT } from '../../types';
import { COMPONENT_CLASSES, NAVIGATION_CODE } from '../../constants';
import settingsForm from './CustomButtonSettings';

const Button = (Components as ComponentsConfig).components.button;
export default class CustomButton extends Button {
  constructor(component: ButtonComponent, options: Record<string, unknown>, data: unknown) {
    super(component, options, data);

    const themeClass = `mdtuddm-button-${component.theme}`;
    const customClass = this.component.customClass.replace(/mdtuddm-button-[a-z]+/i, themeClass);

    this.component.customClass = addUniqClasses(
      COMPONENT_CLASSES.bootstrapComponent,
      themeClass,
      customClass,
    );
  }

  static editForm = settingsForm;

  onClick = (event: Event) => {
    if (this.component.action === 'navigation') {
      event.preventDefault();
      event.stopPropagation();
      this.loading = true;
      this.data[NAVIGATION_CODE] = this.component.actionCode;

      return this.emit('customEvent', {
        type: FORMIO_EVENT.NAVIGATION,
        data: this.data,
      });
    }
    return super.onClick(event);
  };
}
