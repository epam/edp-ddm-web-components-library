import { Components } from 'react-formio';

import { addUniqClasses } from 'utils';
import { withLegacyComponent } from 'components/Form/components/WithLegacyComponent/WithLegacyComponent';

import { ComponentsConfig, FormioComponentName } from '../../types';
import { COMPONENT_CLASSES } from '../../constants';

const File = (Components as ComponentsConfig).components.file;

export default class FileLegacy extends withLegacyComponent(File) {
  static schema() {
    return File.schema({
      type: FormioComponentName.fileLegacy,
      key: 'fileLegacy',
    });
  }

  static get builderInfo() {
    return {
      ...File.builderInfo,
      schema: FileLegacy.schema(),
    };
  }

  constructor(component: Record<string, unknown>, options: Record<string, unknown>, data: unknown) {
    super(component, options, data);
    this.component.customClass = addUniqClasses(COMPONENT_CLASSES.bootstrapComponent, this.component.customClass);
  }
}
