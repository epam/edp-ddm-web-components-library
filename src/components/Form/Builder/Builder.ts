import WebformBuilder from 'formiojs/WebformBuilder';

export class Builder extends WebformBuilder {
  destroy(deleteFromGlobal: boolean) {
    if (this.dialog) {
      this.dialog.close();
    }
    super.destroy(deleteFromGlobal);
  }

  highlightInvalidComponents() {
    const repeatablePaths = this.findRepeatablePaths();
    let hasInvalidComponents = false;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.webform.everyComponent((comp: { setCustomValidity?: any; key?: any; error?: any; path?: any; }) => {
      const { path } = comp;
      if (repeatablePaths.includes(path)) {
        comp.setCustomValidity(`${this.t('APIKeyNotUniqueError')}: ${comp.key}`);
        hasInvalidComponents = true;
      } else if (comp.error?.message?.startsWith(`${this.t('APIKeyNotUniqueError')}`)) {
        comp.setCustomValidity('');
      }
    });

    this.emit('builderFormValidityChange', hasInvalidComponents);
  }
}
