import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_app/retailer/$retailerId/_commercial/pricing/',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    content of retailer pricing tab with subrouting

  </div>
}
