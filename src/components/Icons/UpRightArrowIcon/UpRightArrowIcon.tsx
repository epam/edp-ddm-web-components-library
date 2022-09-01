import React from 'react';
import { ReactComponent as Icon } from 'assets/icons/upRightArrow.svg';

interface Props {
  className?: string;
}

export default function UpRightArrowIcon({ className }: Props) {
  return (
    <Icon className={className} />
  );
}
