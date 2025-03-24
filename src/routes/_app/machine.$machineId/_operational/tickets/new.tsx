import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_app/machine/$machineId/_operational/tickets/new',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>NEW TICKET</div>
}
