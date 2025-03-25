import {
  createFileRoute,
  Link,
  Outlet,
  useMatches,
  useRouterState
} from '@tanstack/react-router';
import { useMatrixCategory } from '../../matrix/useMatrixCategory.ts';
import { useMatrixLevel } from '../../matrix/useMatrixLevel.ts';
import { useEffect } from 'react';

export const Route = createFileRoute('/_app')({
  component: MainLayout,
})

function MainLayout() {
  const category = useMatrixCategory();
  const level = useMatrixLevel();

  const routerState = useRouterState({
  });

  console.log('router state', routerState);

  const accumulatedContext = useMatches({
    structuralSharing: true,
    select: (matches) => matches[matches.length - 1].context
  });

  const info = {
    category,
    level,
    accumulatedContext
  };

  useEffect(() => {
    console.log('effect category', category);
  }, [category]);

  return <div style={{display: 'flex', gap: 8, justifyContent: 'space-between'}}>
    <div style={{flex: '0 0 200px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 4, background: 'rgba(0,0,0,.3)', padding: 4, minHeight: 500}}>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        MainLayout (protected)<br/>
        <Link to='/'>Home</Link>
        <Link to={'/login'}>Login</Link>
        <Link to={'/machine/$machineId'} params={{machineId: '123'}}>machine-123</Link>
        <Link to={'/machine/$machineId/events'} params={{machineId: '123'}}>machine-123-events</Link>
        <Link to={'/machine/$machineId/pricing'} params={{machineId: '123'}}>machine-123-pricing</Link>
        <Link to={'/machine/$machineId/tickets'} params={{machineId: '123'}}>machine-123-tickets</Link>
        <Link to={'/tickets/new'} search={{machineId: 123}}>machine-123-tickets-new</Link>
        <Link to={'/retailer/$retailerId/$tab'} params={{retailerId: '32', tab: 'pricing'}}>retailer-32-pricing</Link>
        <Link to={'/retailer/$retailerId/$tab'} params={{retailerId: '32', tab: 'events'}}>retailer-32-events</Link>
        <Link to={'/retailer/$retailerId/$tab'} params={{retailerId: '32', tab: 'tickets'}}>retailer-32-tickets</Link>
      </div>
      <div style={{display: 'flex', gap: 4, fontSize: 8}}>
        <div style={{background: 'rgba(0,0,0,.3)', borderRadius: 4, padding: 4}}>
          operational [{ category === 'operational' ? 'X' : ''}]
        </div>
        <div style={{background: 'rgba(0,0,0,.3)', borderRadius: 4, padding: 4}}>
          commercial [{ category === 'commercial' ? 'X' : ''}]
        </div>
        <div style={{background: 'rgba(0,0,0,.3)', borderRadius: 4, padding: 4}}>
          logistics [{ category === 'logistics' ? 'X' : ''}]
        </div>
      </div>
    </div>
    <div style={{flex: '0 0 700px'}}>
      <h5>Main Outlet</h5>
      <pre>{JSON.stringify(info, null, 2)}</pre>
      <Outlet />
    </div>
  </div>
}
