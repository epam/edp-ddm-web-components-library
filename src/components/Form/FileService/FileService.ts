import { Formio } from 'react-formio';
import Cookies from 'js-cookie';
import { v4 as uuidv4 } from 'uuid';
import localization from '../localization/ua.json';

const CSRF_TOKEN = 'XSRF-TOKEN';

// FileService was developed for creating cookie with XSRF-TOKEN and then pass it to header X-XSRF-TOKEN
// code was copied from formio, source: formio.js\src\providers\storage\url.js

interface FileServiceProps {
  displayFilePreview?: boolean
}

export default class FileService {
  private static instance: FileService
  private displayFilePreview: boolean | undefined;

  constructor({ displayFilePreview }: FileServiceProps) {
    if (FileService.instance) {
      return FileService.instance;
    }

    FileService.instance = this;
    this.displayFilePreview = displayFilePreview;
  }

  uploadFile(
    storage: any,
    file: any,
    fileName: any,
    dir: any,
    progressCallback: ((this: XMLHttpRequest, ev: ProgressEvent<EventTarget>) => any) | null | undefined,
    url: string | string[],
    options: string | undefined,
    fileKey: any,
    groupPermissions: any,
    groupId: any,
    uploadStartCallback: any,
    abortCallback: ((arg: any) => void) | undefined,
  ) {

    const displayAsImage = () => {
      // code was copied from formio, source: formio.js\src\providers\storage\base64.js    
      const reader = new FileReader();

      return new Promise((resolve, reject) => {
        reader.onload = (event) => {
          const url = event.target?.result;
          resolve({
            storage: 'base64',
            name: fileName,
            url: url,
            size: file.size,
            type: file.type,
          });
        };
  
        reader.onerror = () => {
          return reject(this);
        };
  
        reader.readAsDataURL(file);
      });
    }

    const uploadRequest = (form?: any) => {
      return this.xhrRequest(
        url,
        fileName,
        {
          baseUrl: encodeURIComponent(Formio.projectUrl),
          project: form ? form.project : '',
          form: form ? form._id : '',
        },
        {
          [fileKey]: file,
          fileName,
          dir,
        },
        options,
        progressCallback,
        abortCallback,
      )
        .then((response: { data: { baseUrl?: any; project?: any; form?: any; }; url: any; }) => {
        // Store the project and form url along with the metadata.
          response.data = response.data || {};
          response.data.baseUrl = Formio.projectUrl;
          response.data.project = form ? form.project : '';
          response.data.form = form ? form._id : '';
          return {
            storage: 'url',
            fileName,
            url: response.url,
            size: file.size,
            type: file.type,
            data: response.data,
          };
        });
    };

    if (this.displayFilePreview) {
      return displayAsImage();
    }

    if (file.private && Formio.formId) {
      return Formio.loadForm().then((form: any) => uploadRequest(form));
    }

    return uploadRequest();
  }

  deleteFile(fileInfo: { url: any }) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('DELETE', fileInfo.url, true);
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve('File deleted');
        } else {
          reject(xhr.response || 'Unable to delete file');
        }
      };
       // NEXT LINE IS DIFFERENT FROM FORM.IO SOURCE
      this.setCookieAndXhrHeader(xhr);
      xhr.send(null);
    });
  }

  downloadFile(file: { private: any; data: { submission: any; }; url: any; name: any; }) {
    if (file.private) {
      if (Formio.submissionId && file.data) {
        file.data.submission = Formio.submissionId;
      }
      return this.xhrRequest(file.url, file.name, {}, JSON.stringify(file))
        .then((response: { data: any; }) => response.data);
    }

    // Return the original as there is nothing to do.
    return Promise.resolve(file);
  }

  private xhrRequest(
    url: string | string[],
    name: any,
    query: { [x: string]: any; },
    data: any,
    options?: string,
    progressCallback?: ((this: XMLHttpRequest, ev: ProgressEvent<EventTarget>) => any) | null,
    abortCallback?: (arg: any) => void,
  ): any {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest() as any;
      const json = (typeof data === 'string');
      const fd = new FormData();

      if (typeof progressCallback === 'function') {
        xhr.upload.onprogress = progressCallback;
      }

      if (typeof abortCallback === 'function') {
        abortCallback(() => xhr.abort());
      }

      if (!json) {
        for (const key in data) {
          fd.append(key, data[key]);
        }
      }

      xhr.onload = () => {
        switch (true) {
          case xhr.status === 401:
            reject(localization.unauthorizedRequest);
            break;
          case xhr.status === 403:
            reject(localization.taskNotAvailable);
            break;
          case xhr.status === 404:
            reject(localization.taskCompleted);
            break;
          case xhr.status >= 200 && xhr.status < 300:
            // Need to test if xhr.response is decoded or not.
            let respData = {} as any;
            try {
              respData = (typeof xhr.response === 'string') ? JSON.parse(xhr.response) : {};
              respData = (respData && respData.data) ? respData.data : respData;
            } catch (err) {
              respData = {};
            }

            // Get the url of the file.
            let respUrl = respData.hasOwnProperty('url') ? respData.url : `${xhr.responseURL}/${name}`;

            // If they provide relative url, then prepend the url.
            if (respUrl && respUrl[0] === '/') {
              respUrl = `${url}${respUrl}`;
            }
            resolve({ url: respUrl, data: respData });
            break;
          default:
            reject(localization.defaultErrorMessage);
        }
      };

      xhr.onerror = () => reject(localization.defaultErrorMessage);
      xhr.onabort = () => reject(localization.defaultErrorMessage);

      let requestUrl = url + (url.indexOf('?') > -1 ? '&' : '?');
      for (const key in query) {
        requestUrl += `${key}=${query[key]}&`;
      }
      if (requestUrl[requestUrl.length - 1] === '&') {
        requestUrl = requestUrl.substring(0, requestUrl.length - 1);
      }

      xhr.open('POST', requestUrl);
      if (json) {
        xhr.setRequestHeader('Content-Type', 'application/json');
      }

      // Overrides previous request props
      if (options) {
        const parsedOptions = typeof options === 'string' ? JSON.parse(options) : options;
        for (const prop in parsedOptions) {
          xhr[prop] = parsedOptions[prop];
        }
      }
       // NEXT LINE IS DIFFERENT FROM FORM.IO SOURCE
      this.setCookieAndXhrHeader(xhr);
      xhr.send(json ? data : fd);
    });
  }

  private setCookieAndXhrHeader(xhr: any) {
    Cookies.set(CSRF_TOKEN, uuidv4());
    xhr.setRequestHeader(`X-${CSRF_TOKEN}`, Cookies.get(CSRF_TOKEN));
  }
}
