import { createFileRoute } from '@tanstack/react-router'
import { EventsList } from '../../../../../components/EventsList.tsx';

export const Route = createFileRoute(
  '/_app/machine/$machineId/_operational/events/',
)({
  component: EventsList,
})

