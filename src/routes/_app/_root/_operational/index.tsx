import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/_root/_operational/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    This is the index root main root page ish. placed under operational.
  </div>
}
