/* eslint-disable */
import { Components } from 'react-formio';
import settingsForm from './CustomFormioFileSettings';
import { COMPONENT_CLASSES } from '../../constants';
import { addUniqClasses } from 'utils';
import { modifySelectRowData } from '../../utils';

const FileComponent = Components.components.file;

function download(uri: string, name: string, type: string) {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  link.type = type;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

class CustomFile extends FileComponent {
  static editForm = settingsForm;

  constructor(component: Record<string, unknown>, options: Record<string, unknown>, data: unknown) {
    super(component, options, data);
    this.component.customClass = addUniqClasses(COMPONENT_CLASSES.file, COMPONENT_CLASSES.bootstrapComponent, this.component.customClass);
    this.component.storage = 'url';
  }

  get emptyValue() {
    return [];
  }

  checkCondition(row: Record<string, unknown>, data: Record<string, unknown>) {
    return super.checkCondition(modifySelectRowData(this.component, this.root, row), data);
  }

  getFile(fileInfo: any) {
    const { options = {} } = this.component;
    const { fileService } = this;
    if (!fileService) {
      return alert('File Service not provided');
    }
    if (this.component.privateDownload) {
      fileInfo.private = true;
    }
    fileService.downloadFile(fileInfo, options).then((file:any) => {
      if (file) {
        // NEXT LINES ARE DIFFERENT FROM FORM.IO SOURCE
        // if (['base64', 'indexeddb'].includes(file.storage)) {
          download(fileInfo.url, fileInfo.originalName || fileInfo.name || fileInfo?.data?.name, fileInfo.type || fileInfo?.data?.type);
        // }
        // else {
        //   window.open(file.url, '_blank');
        // }
        // END CHANGES THAT ARE DIFFERENT FROM FORM.IO SOURCE
      }
    })
      .catch((response: any) => {
        // Is alert the best way to do this?
        // User is expecting an immediate notification due to attempting to download a file.
        alert(response);
      });
  }

  upload(files: unknown[]): void {
    // Fix changes between 4.12.x and 4.13.x
    // @see: https://github.com/formio/formio.js/blob/4.12.x/src/components/file/File.js#L582
    // @see: https://github.com/formio/formio.js/blob/4.13.x/src/components/file/File.js#L605
    // @see: https://github.com/formio/formio.js/blob/4.12.x/src/components/file/File.js#L697
    // @see: https://github.com/formio/formio.js/blob/4.13.x/src/components/file/File.js#L744
    super.upload(files);

    if (this.fileDropHidden && this.statuses?.some((upload: { status?: unknown }) => upload?.status === 'error')) {
      this.fileDropHidden = false;
      this.redraw();
    }
  }

  deleteFile(fileInfo: Record<string, unknown>) {
    this.setPristine(false);
    super.deleteFile(fileInfo);
  }
}

export default CustomFile;
