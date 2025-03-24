import { createFileRoute, Outlet, useChildMatches, useNavigate, useParams } from '@tanstack/react-router';
import { Tabs } from 'antd';

export const Route = createFileRoute('/_app/machine/$machineId/_operational')({
  component: OperationalMachinePage,
})

// TODO: can we do something clever here with tab name type??
// maybe extract all routes under _operational?
type OperationalMachinePageTab = 'tickets' | 'events';

const tabItems: { key: OperationalMachinePageTab, label: string }[] = [
  {key: 'tickets', label: 'Tickets'},
  {key: 'events', label: 'Events'}
];

function OperationalMachinePage() {
  const childMatches = useChildMatches()
  let activeKey: string | undefined = undefined;
  if (childMatches && childMatches.length > 0) {
    const routeId = childMatches[0].routeId;
    activeKey = routeId.split('/').filter(Boolean).pop(); // TODO: safer..
  }

  console.log('activeKey', activeKey);

  const navigate = useNavigate();
  const {machineId} = useParams({
    from: Route.id
  });

  return <div>
   <h1>OperationalMachinePageRoute</h1>
   <Tabs
     activeKey={activeKey}
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
     }))}
   >
    <Outlet />
   </Tabs>
 </div>
}
