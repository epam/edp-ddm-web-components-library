import React from 'react';

import { CellComponentProps } from 'types/table';
import { textFormatter } from 'components/Table/utils/formatters';

export default function TextCell(props: CellComponentProps) {
  const {
    columnDefinition: { property, formatter = textFormatter },
    item,
  } = props;

  return (
    <>
      {formatter(item, property)}
    </>
  );
}
