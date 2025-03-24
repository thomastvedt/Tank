import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_app/machine/$machineId/_operational')({
  component: RouteComponent,
})

function RouteComponent() {
 return <div>
   <h1>OperationalMachinePageRoute</h1>
   <Outlet />
 </div>
}
