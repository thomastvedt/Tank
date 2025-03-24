import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/machine/$machineId/_operational/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <h4>machine page</h4>
    <div>index route machine page, no tab selected</div>
  </div>
}
