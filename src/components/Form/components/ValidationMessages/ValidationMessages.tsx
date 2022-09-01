import React from 'react';
import isEqual from 'lodash/isEqual';
import uniqueId from 'lodash/uniqueId';

import FlashMessage, { FlashMessageProps } from 'components/FlashMessage';

export interface ValidationMessagesProps {
  messages?: Array<string>;
  flashMessagesProps?: Partial<FlashMessageProps>;
}

export function propsComparator(
  { messages: prevMessages }: ValidationMessagesProps,
  { messages: nextMessages }: ValidationMessagesProps,
) {
  return isEqual(prevMessages, nextMessages);
}

export default function ValidationMessages({ messages, flashMessagesProps } : ValidationMessagesProps) {
  return (
    <>
      { messages && messages.map((message) => (
        <FlashMessage
          status="error"
          title={message}
          key={uniqueId()}
          {...flashMessagesProps}
        />
      )) }
    </>
  );
}
