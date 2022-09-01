import type { WithStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import MuiTabs from '@material-ui/core/Tabs';
import isNumber from 'lodash/isNumber';
import React, { Component } from 'react';

import { createXPathParam } from 'utils/xPath';
import Typography from 'components/Typography';

import clsx from 'clsx';
import { TabPanelProps } from './components/TabPanel/TabPanel';
import styles from './Tabs.styles';

interface State {
  activeIndex: number;
}

type Props = {
  activeIndex?: number;
  handleIndexChange?: (newIndex: number) => void;
  children: Array<React.ReactElement<TabPanelProps>>;
  onTabChange?: (search: string) => void;
  tabQueryParam?: string;
  tabProps?: {
    'data-xpath'?: string,
  };
  disableBackground?: boolean,
  size?: 'large' | 'medium' | 'small',
};
// workaround for open issue https://github.com/mui-org/material-ui/issues/17491
export type TabsProps = Props & { classes: Partial<Record<keyof ReturnType<typeof styles>, string>> };

export default class Tabs extends Component<Props & WithStyles<typeof styles>, State> {
  state = {
    activeIndex: 0,
  };

  constructor(props: Props & WithStyles<typeof styles>) {
    super(props);
    const { tabQueryParam } = this.props;
    const { location } = window;
    const activeCode = new URLSearchParams(location.search).get(tabQueryParam || '') || '';
    const activeIndex = this.getActiveIndex(activeCode);
    this.state = { activeIndex };
  }

  handleTabChange = (event: unknown, activeIndex: number) => {
    const { handleIndexChange, onTabChange, tabQueryParam } = this.props;
    const activeCode = this.getActiveCode(activeIndex);
    if (onTabChange) {
      onTabChange(`?${tabQueryParam}=${activeCode}`);
    }

    if (handleIndexChange) {
      handleIndexChange(activeIndex);
    } else {
      this.setState({ activeIndex });
    }
  };

  getActiveCode = (activeIndex: number) => {
    const { children } = this.props;
    let activeCode = '';

    React.Children.forEach<React.ReactElement<TabPanelProps>>(children, ({ props: { code } }, index) => {
      activeCode = index === activeIndex ? code : activeCode;
    });

    return activeCode;
  };

  getActiveIndex = (activeCode: string) => {
    const { children } = this.props;
    let activeIndex = 0;

    React.Children.forEach<React.ReactElement<TabPanelProps>>(children, ({ props: { code } }, index) => {
      activeIndex = code === activeCode ? index : activeIndex;
    });

    return activeIndex;
  };

  getVariant = () => {
    const { size } = this.props;
    switch (size) {
      case 'large': return 'h3';
      case 'small': return 'h8';
      default: return 'h6';
    }
  };

  render() {
    const {
      classes,
      children,
      activeIndex: activeIndexProps,
      tabProps,
      size = 'medium',
    } = this.props;
    const { 'data-xpath': tabXpath, ...restTabProps } = tabProps || {};
    const { activeIndex: activeIndexState } = this.state;
    const activeIndex = isNumber(activeIndexProps) ? activeIndexProps : activeIndexState;

    return (
      <div className={classes.root}>
        <MuiTabs
          className={classes.tabs}
          classes={{
            indicator: classes.indicator,
          }}
          value={activeIndex}
          onChange={this.handleTabChange}
          aria-label="tabs"
          indicatorColor="primary"
        >
          {
            React.Children.map<JSX.Element, React.ReactElement<TabPanelProps>>(
              children,
              ({ props: { title, disabled, code } }) => (
                <Tab
                  label={(
                    <Typography
                      variant={this.getVariant()}
                      component="span"
                      className={clsx({
                        [classes.largeSize]: size === 'large',
                        [classes.mediumSize]: size === 'medium',
                        [classes.smallSize]: size === 'small',
                      })}
                    >
                      {title}
                    </Typography>
                  )}
                  disabled={disabled}
                  disableRipple
                  classes={{ root: classes.tabRoot }}
                  data-xpath={createXPathParam(tabXpath, code)}
                  {...restTabProps}
                />
              ),
            )
          }
        </MuiTabs>
        {
          React.Children.map<JSX.Element, React.ReactElement<TabPanelProps>>(
            children,
            (child, index) => React.cloneElement(
              child,
              {
                index,
                activeIndex,
              },
            ),
          )
        }
      </div>
    );
  }
}
