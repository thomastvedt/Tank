import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_app/machine/$machineId/_commercial/pricing/',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_app/machine/$machineId/_logistics/pricing/"!</div>
}
