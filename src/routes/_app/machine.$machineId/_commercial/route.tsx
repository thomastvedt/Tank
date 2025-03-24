import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_app/machine/$machineId/_commercial')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <h1>CommercialMachinePage</h1>
    <Outlet />
  </div>
}
