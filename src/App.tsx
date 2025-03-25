import './App.css'

import { routeTree } from './routeTree.gen';
import { createRouter, RouterProvider } from '@tanstack/react-router';

const router = createRouter({
  routeTree: routeTree,
  context: {
  },
  defaultStructuralSharing: true
});

console.log('routeTree in app.tsx', routeTree);

// HERE we can build a 2d matrix from the routeTree!

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
