import { createFileRoute, useChildMatches, useNavigate, useParams } from '@tanstack/react-router';
import PageTabs from '../../../../components/page/Page/PageTabs.tsx';
import { ReactNode } from 'react';
import { EventsList } from '../../../../components/EventsList.tsx';

export const Route = createFileRoute('/_app/machine/$machineId/_operational')({
  component: OperationalMachinePage,
})

// TODO: can we do something clever here with tab name type??
// maybe extract all routes under _operational?
type OperationalMachinePageTab = 'tickets' | 'events';

const tabItems: { key: OperationalMachinePageTab, label: string, content: ReactNode }[] = [
  {key: 'tickets', label: 'Tickets', content: <div>tickets content in tab</div>},
  {key: 'events', label: 'Events', content: <div>events content in tab <br/><EventsList />/</div>}
];

function useNextChildPathParamString(): string | undefined {
  return useChildMatches({
    structuralSharing: true,
    select: matches => {
      console.log('EVAL child matches', matches);
      for(let i = 0; i < matches.length; i++) {
        const {routeId} = matches[i];
        // routeId sample data: '/_app/machine/$machineId/_operational/events/'
        const parts = routeId.split('/').filter(Boolean); // Remove empty segments
        if (parts.length === 0) return undefined;
        const lastSegment = parts[parts.length - 1]; // Get the last part
        return lastSegment ?? undefined; // Safely return the last segment or undefined
      }
      return undefined;
    }
  })
}

function OperationalMachinePage() {
  const activeKey2 = useNextChildPathParamString();
  console.log('activeKey2', activeKey2);

  const navigate = useNavigate();
  const {machineId} = useParams({
    from: Route.id
  });

  return <div>
   <h1>OperationalMachinePageRoute</h1>
   <PageTabs
     activeKey={activeKey2}
     onChange={(key) => {
       // const newPath = `/machine/123/_operational/${key}` // Update to match your route structure
       // window.history.pushState(null, '', newPath)
       console.log(key)
       if (key === 'events') {
         navigate({
           to: '/machine/$machineId/events',
           params: {
             machineId: machineId
           }
         });
       } else if (key === 'tickets') {
         navigate({
           to: '/machine/$machineId/tickets',
           params: {
             machineId
           }
         });
       }
       else {
         console.log('invalid tab');
       }
     }}
     items={tabItems.map(tab => ({
       key: tab.key,
       label: tab.label,
       children: tab.content // TODO: Wd COULD just use this!!
     }))}
   />
    <div>outlet AFTER tabs:</div>
    {/*<Outlet />*/}
 </div>
}
