import * as React from 'react'
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { MyContext } from '../matrix/MyContext.ts';

export const Route = createRootRouteWithContext<MyContext>()({
  component: RootComponent
})

function RootComponent() {
  return (
    <React.Fragment>
      <Outlet />
      <TanStackRouterDevtools />
    </React.Fragment>
  )
}
