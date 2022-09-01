import { Components } from 'react-formio';

import { withLegacyComponent } from 'components/Form/components/WithLegacyComponent/WithLegacyComponent';
import { addUniqClasses } from 'utils';

import { ComponentsConfig, FormioComponentName } from '../../types';
import { COMPONENT_CLASSES } from '../../constants';

const Email = (Components as ComponentsConfig).components.email;

export default class EmailLegacy extends withLegacyComponent(Email) {
  static schema() {
    return Email.schema({
      type: FormioComponentName.emailLegacy,
      key: 'emailLegacy',
    });
  }

  static get builderInfo() {
    return {
      ...Email.builderInfo,
      schema: EmailLegacy.schema(),
    };
  }

  constructor(component: Record<string, unknown>, options: Record<string, unknown>, data: unknown) {
    super(component, options, data);
    this.component.customClass = addUniqClasses(COMPONENT_CLASSES.bootstrapComponent, this.component.customClass);
  }
}
