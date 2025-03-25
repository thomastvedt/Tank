import { createFileRoute, useRouteContext } from '@tanstack/react-router';

export const Route = createFileRoute(
  '/_app/retailer/$retailerId/_operational/$tab',
)({
  component: OperationalRetailerPage,
})

function OperationalRetailerPage() {
  const params = Route.useParams();
  const routeContext = useRouteContext({
    from: Route.id
  });

  return <div>
    <h1>OperationalRetailerPage</h1>
    <pre>
      {JSON.stringify(routeContext, null, 2)}
    </pre>
    <pre>
      {JSON.stringify(params, null, 2)}
    </pre>
  </div>
}
