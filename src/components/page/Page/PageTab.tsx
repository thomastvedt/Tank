import React, { CSSProperties, Suspense } from 'react';
import styled from 'styled-components';
import { ScreenMap } from 'antd/es/_util/responsiveObserver';
import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';

const PaddedContainer = styled.div<{ $breakpoint: ScreenMap }>`
  padding-top: 16px;
  padding-bottom: 16px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

const FullWidthContainer = styled.div`
  flex: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

interface Props {
  children: React.ReactNode;
  fullscreen?: boolean;
  style?: CSSProperties;
}

/**
 * PageTab is just a simple div with padding and 100% height
 * for use with our PageTabs component
 * @param children
 * @param fullscreen
 * @param style
 * @constructor
 */
const PageTab: React.FC<Props> = ({ children, fullscreen, style }) => {
  const breakpoint = useBreakpoint();
  const container = fullscreen ? (
    <FullWidthContainer style={style}>
      {/*<ScrollToTop />*/}
      {children}
    </FullWidthContainer>
  ) : (
    <PaddedContainer style={style} $breakpoint={breakpoint}>
      {/*{isDesktop && <ScrollToTop />}*/}
      {children}
    </PaddedContainer>
  );
  return <Suspense fallback={<div>loading</div>}>{container}</Suspense>;
};

export default PageTab;
