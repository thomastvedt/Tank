import { createFileRoute, Link, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_app')({
  component: MainLayout,
})

function MainLayout() {
  return <div style={{display: 'flex', gap: 8, justifyContent: 'space-between'}}>
    <div style={{flex: '0 0 200px', display: 'flex', flexDirection: 'column', gap: 4, background: 'rgba(0,0,0,.3)', padding: 4, minHeight: 500}}>
      MainLayout (protected)<br/>

      <Link to='/'>Home</Link>
      <Link to={'/login'}>Login</Link>
      <Link to={'/machine/$machineId/tickets/new'} params={{machineId: '123'}}>New ticket under machine 123</Link>
      <Link to={'/machine/$machineId'} params={{machineId: '123'}}>
        Machine 123
      </Link>
    </div>
    <div style={{flex: '0 0 700px'}}>
      <Outlet />
    </div>
  </div>
}
