import { createFileRoute, Outlet, useLoaderData } from '@tanstack/react-router';

export const Route = createFileRoute('/_app/retailer/$retailerId')({
  component: RetailerPage,
  beforeLoad: ( ) => {
    return {
      machineId: '123'
    };
  },
  loader: ({context}) => {
    console.log('context in loader RetailerPage', context);
    return {...context};
  }
})

function RetailerPage() {

  const data = useLoaderData({
    from: Route.id
  })

  return <div>
    <h1>RetailerPage</h1>
    <pre>
      {JSON.stringify(data, null, 2)}
    </pre>
    <Outlet />
  </div>
}
