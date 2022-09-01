import { makeStyles } from '@material-ui/core';
import React, { useMemo, useCallback } from 'react';
import isEmpty from 'lodash/isEmpty';
import cloneDeep from 'lodash/cloneDeep';
import fp from 'lodash/fp';
import get from 'lodash/get';

import FormioForm from './components/FormioForm';
import ValidationMessages from './components/ValidationMessages';
import {
  allowLocalDevFileUpload,
  disableComponentDataCache,
  prepareSubmissions,
  sanitizeComponent,
} from './utils';
import { FormComponent, FormSubmission, FormValidationError } from './types';

import styles from './Form.styles';
import { ValidationMessagesProps } from './components/ValidationMessages/ValidationMessages';

export interface Props {
  onSubmit: (submission: FormSubmission) => void;
  language: string,
  components?: Array<FormComponent>;
  submissionData?: FormSubmission;
  validationErrors?: Array<FormValidationError>;
  readOnly?: boolean;
  parentPath?: string;
  validationMessagesProps?: ValidationMessagesProps;
  evalContext?: Record<string, unknown>;
  fileServiceNonSupport?: boolean;
  onCustomEvent?: (options: { type: string, data?: FormSubmission }) => void;
  componentsTransformer?: (component: FormComponent) => FormComponent;
}

const useStyles = makeStyles(styles, { name: 'Form' });

export default function Form({
  language,
  components: componentsProps = [],
  onSubmit,
  submissionData,
  validationErrors = [],
  readOnly = false,
  validationMessagesProps = {},
  evalContext,
  onCustomEvent,
  parentPath,
  fileServiceNonSupport,
  componentsTransformer = (c) => c,
}: Props) {
  const classes = useStyles();
  const messages = validationErrors
    .filter(({ message }) => !!message)
    .map(({ message }) => message) as Array<string>;
  const submission = useMemo(() => {
    return !isEmpty(submissionData?.data) ? cloneDeep(submissionData) : undefined;
  }, [submissionData]);
  const components = useMemo(() => {
    return cloneDeep(componentsProps
      .map((component) => {
        const transformer = fp.compose(
          disableComponentDataCache,
          allowLocalDevFileUpload,
          sanitizeComponent,
          componentsTransformer,
        );
        const nestedComponents = get(component, 'components', []) as Array<FormComponent>;

        if (nestedComponents?.length) {
          return {
            ...component,
            components: nestedComponents
              .map((c: FormComponent) => transformer(c)),
          };
        }

        return transformer(component);
      })) as Array<FormComponent>;
  }, [componentsTransformer, componentsProps]);

  const handleSubmit = useCallback((formSubmission: FormSubmission) => {
    const formData = prepareSubmissions(components, formSubmission, true);
    onSubmit(formData || formSubmission);
  }, [components, onSubmit]);

  const preparedSubmissionData = useMemo(() => prepareSubmissions(components, submission), [components, submission]);

  return (
    <div className={classes.root}>
      <ValidationMessages messages={messages} {...validationMessagesProps} />
      {
        components.length ? (
          <FormioForm
           // key is needed for preventing to submit form multiple times while complete task
            key={messages.length}
            components={components}
            readOnly={readOnly}
            onSubmit={handleSubmit}
            onCustomEvent={onCustomEvent}
            submission={preparedSubmissionData}
            language={language}
            evalContext={evalContext}
            parentPath={parentPath}
            fileServiceNonSupport={fileServiceNonSupport}
          />
        ) : ''
      }
    </div>
  );
}
