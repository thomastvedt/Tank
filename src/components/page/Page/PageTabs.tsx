import React from 'react';
import styled from 'styled-components';
import { ScreenMap } from 'antd/es/_util/responsiveObserver';
import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';
import { Tab } from 'rc-tabs/es/interface';
import { CSSProperties } from 'react';
import { TabsProps as RcTabsProps } from 'rc-tabs';
import { Tabs } from 'antd';


export interface CustomTab extends Tab {
  disabled?: boolean;
}

type RcTabsExposedProps = Pick<
  RcTabsProps,
  | 'className'
  | 'activeKey'
  | 'defaultActiveKey'
  | 'destroyInactiveTabPane'
  | 'onChange'
  | 'onTabClick'
  | 'onTabScroll'
>;

export interface CustomTabsProps {
  items: CustomTab[];
  style?: CSSProperties;
  activeKey?: string;
}

export type ConnectTabsProps = RcTabsExposedProps & CustomTabsProps;


const Container = styled.div<{
  $breakpoint: ScreenMap;
  $isMobile: boolean;
  $isRoot: boolean;
}>`
  flex: 1;
  display: flex;
  flex-direction: column;

  // NOTE: On desktop, we need to prevent scroll here since we move the scrollable area inside Tabs->ScrollableTabsContent
  // Hmm.. unless on TranslationPage which controls its own scroll...
  @media (min-width: 480px) {
    max-height: 100%; // only if desktop, move scroll down
    overflow: hidden; // needed to prevent scroll here
  }

  && {
    .connect-tabs {
      flex: auto;
      @media (min-width: 480px) {
        max-height: 100%; // only if desktop, move scroll down
      }

      display: flex;
      flex-direction: column;
    }

    .connect-tabs-nav {
      margin-bottom: 0; // disable default margin 16 px bottom tabs.. tabs pane content need to handle it

      position: sticky;
      top: 0;

      @media (min-width: 480px) {
        position: relative;
        top: unset;
      }

      z-index: 5;
    }

    .connect-tabs-tabpane {
      background-color: #fefefe;
    }

    .connect-tabs-tabpane-active {
      flex: 1 1 auto; // content background will cover the whole area when little content inside
    }

    .connect-tabs-tabpane-active-scroll {
      @media (min-width: 480px) {
        // On desktop, this is the scrollable area when using tabs
        overflow-y: auto;
        height: 100%;
      }
    }
  }
`;

/***
 * PageTabs is a custom Tabs component with some additional styling (page padding, scroll etc.)
 * ***/
const PageTabs: React.FC<ConnectTabsProps> = (props) => {
  const { items, activeKey, ...rest } = props;
  const breakpoint = useBreakpoint();

  return (
    <Container $breakpoint={breakpoint} $isMobile={false} $isRoot={false}>
      <Tabs activeKey={activeKey} items={items} {...rest} />
    </Container>
  );
};

export default PageTabs;
