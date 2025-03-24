import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/_login/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>

    <h1>login</h1>
    <input />
    <Link to={'/'}>Login</Link>
  </div>
}
