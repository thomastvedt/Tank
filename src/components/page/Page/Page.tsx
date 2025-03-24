import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { BreadcrumbItemType } from 'antd/es/breadcrumb/Breadcrumb';
import { Typography } from 'antd';
import PageTabs, { CustomTabsProps } from './PageTabs.tsx';

// On desktop, the scrollable area is controlled by each page
const DesktopContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;

const BottomBorderRow = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.ant.colorBorder};
  flex: 0 0 16px;

  position: sticky;
  top: calc(-15px);

  z-index: 3;

  @media (min-width: 480px) {
    position: relative;
    top: unset;
  }
  padding-top: 0;
  padding-bottom: 0;
`;

interface Props {
  title: string;

  showBreadcrumbs?: boolean | BreadcrumbItemType[];

  // retailer logo, name etc. can be as large as we want?
  header?: React.ReactNode;

  // Tabs specified here will render using the PageTabs component which adds a scrollable container for the tab content
  tabs?: CustomTabsProps;

  // If you need a simple page without tabs, you can use children.
  // Children are wrapped in a scrollable container (one for desktop, one for mobile)
  // Note: children and tabs cannot be used together
  children?: ReactNode;

  // Add an empty div below the title/header with 1px border
  showBottomBorder?: boolean;
}

const Page: React.FC<Props> = ({
  header,
  showBottomBorder,
  tabs,
  children
}) => {
  const isMobile = false;
  const headerRow = header ? (
    typeof header === 'string' ? (
      <>
        <div>
          <Typography.Title level={2} style={{ marginBottom: 0 }}>
            {header}
          </Typography.Title>
        </div>
        {showBottomBorder && <BottomBorderRow />}
      </>
    ) : (
      <div>{header}</div>
    )
  ) : null;

  // show a warning if BOTH children and tabs are provided!
  if (children && tabs) {
    throw new Error('Page component cannot have both children and tabs');
  }

  if (isMobile) {
    return (
      <>
        <div>breadcrumbs</div>
        {headerRow}
        {tabs && tabs.items && <PageTabs {...tabs} />}
        {children}
      </>
    );
  }

  return (
    <>
      <DesktopContainer>
        <div>breadcrumbs</div>
        {headerRow}
        {tabs && tabs.items && <PageTabs {...tabs} />}
        {/* Any children are wrapped in a scrollable container (for desktop, mobile has its own scroll container) */}
        {children && <ScrollContainerDesktop>{children}</ScrollContainerDesktop>}
      </DesktopContainer>
    </>
  );
};

export default Page;

const ScrollContainerDesktop = styled.div`
  background-color: ${(props) => props.theme.ant.colorBgLayout};

  @media (min-width: 480px) {
    // On desktop, this is the scrollable area when using tabs
    overflow-y: auto;
    height: 100%;
  }
`;
