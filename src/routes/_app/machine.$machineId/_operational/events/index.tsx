import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_app/machine/$machineId/_operational/events/',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_app/machine/$machineId/_operational/events/"!</div>
}
