import { Components } from 'react-formio';

import { withLegacyComponent } from 'components/Form/components/WithLegacyComponent/WithLegacyComponent';
import { addUniqClasses } from 'utils';
import { ComponentsConfig, FormioComponentName } from '../../types';
import { COMPONENT_CLASSES } from '../../constants';

const Content = (Components as ComponentsConfig).components.content;

export default class ContentLegacy extends withLegacyComponent(Content) {
  static schema() {
    return Content.schema({
      type: FormioComponentName.contentLegacy,
      key: 'contentLegacy',
    });
  }

  static get builderInfo() {
    return {
      ...Content.builderInfo,
      schema: ContentLegacy.schema(),
    };
  }

  constructor(component: Record<string, unknown>, options: Record<string, unknown>, data: unknown) {
    super(component, options, data);
    this.component.customClass = addUniqClasses(this.component.customClass, COMPONENT_CLASSES.bootstrapComponent);
  }
}
