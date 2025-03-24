import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_app/machine/$machineId/_operational')({
  component: RouteComponent,
})

function RouteComponent() {
 return <div>
   <h1>OperationalMachinePage</h1>
   <Outlet />
 </div>
}
