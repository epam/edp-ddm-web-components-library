import React from 'react';

interface TabManagerProps {
  index?: number;
  activeIndex?: number;
}

export interface TabPanelProps extends TabManagerProps {
  title: string;
  code: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

export default function TabPanel(props: TabPanelProps) {
  const {
    children,
    activeIndex,
    index,
    ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={activeIndex !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {activeIndex === index && children}
    </div>
  );
}
