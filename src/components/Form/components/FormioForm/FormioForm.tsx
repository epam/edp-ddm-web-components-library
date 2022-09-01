import React from 'react';
import { Form } from 'react-formio';
import isEqual from 'lodash/isEqual';
import { useTheme } from '@material-ui/core/styles';
import FileService from 'components/Form/FileService';
import { FormComponent, FormSubmission } from '../../types';
import localizationForm from '../../localization/ua.json';

import './styles.scss';
import FormStyles from '../FormStyles';

const sanitizeConfig = {
  allowedTags: ['svg', 'path'],
  addTags: ['svg', 'path'],
  allowedAttr: ['d', 'transform', 'fill', 'viewBox', 'xmlns'],
  addAttr: ['d', 'transform', 'fill', 'viewBox', 'xmlns'],
};

interface Props {
  language: string,
  onSubmit: (submission: FormSubmission) => void;
  onCustomEvent?: (options: { type: string, data?: FormSubmission }) => void;
  components?: Array<FormComponent>;
  submission?: FormSubmission;
  readOnly?: boolean;
  evalContext?: Record<string, unknown>;
  parentPath?: string;
  fileServiceNonSupport?: boolean;
}

export function propsComparator(prevProps: Props, nextProps: Props) {
  return isEqual(prevProps, nextProps);
}

export default function FormioForm({
  language,
  components,
  onSubmit,
  submission,
  readOnly,
  evalContext,
  onCustomEvent,
  parentPath,
  fileServiceNonSupport,
}: Props) {
  const theme = useTheme();

  return (
    <div>
      <FormStyles />
      <Form
        form={{ components }}
        options={{
          language,
          i18n: {
            [language]: localizationForm,
          },
          readOnly,
          sanitizeConfig,
          evalContext,
          theme,
          parentPath,
          fileService: new FileService({ displayFilePreview: fileServiceNonSupport }),
        }}
        onSubmit={onSubmit}
        submission={submission}
        onCustomEvent={onCustomEvent}
      />
    </div>
  );
}
