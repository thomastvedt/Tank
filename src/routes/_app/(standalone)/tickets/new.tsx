import { createFileRoute, useSearch } from '@tanstack/react-router';

interface CreateTicketSearch {
  machineId?: number;
}

export const Route = createFileRoute('/_app/(standalone)/tickets/new')({
  component: RouteComponent,
  validateSearch: (search: Record<string, unknown>): CreateTicketSearch => {
    console.log('validateSearch', search);
  return {
    machineId: Number.isFinite(search?.machineId) ? Number(search.machineId) : undefined};
  }
})

function RouteComponent() {
  const {machineId} = useSearch({
    from: '/_app/(standalone)/tickets/new'
  })
  return <div>
    <h1>New ticket</h1>
    <div>moved to root to not inherit stuff! we can just use params!</div>
    <div>machineId: {machineId}</div>
  </div>
}
