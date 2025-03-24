import { createFileRoute, Outlet } from '@tanstack/react-router';


// NOTE: This will be empty, only resolve + set context

export const Route = createFileRoute('/_app/machine/$machineId')({
  component: RouteComponent,
  beforeLoad: ({params} ) => {
    return {
      retailerId: '45_' + params.machineId
    }
  }
})

function RouteComponent() {
  return <div><h1>
    MAchinePage route.
  </h1>
  <Outlet />
  </div>
}
