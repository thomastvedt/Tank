import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_app/retailer/$retailerId/_commercial')({
  component: CommercialRetailerPage,
})

function CommercialRetailerPage() {
  return <div>
    <h1>CommercialRetailerPage</h1>
    <Outlet />
  </div>
}
