import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_app/machine/$machineId/_logistics')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <h1>LogisticsMachinePage</h1>
    <Outlet />
  </div>
}
