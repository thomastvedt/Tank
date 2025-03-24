import './App.css'

// Import the generated route tree
import { routeTree } from './routeTree.gen';
import { createRouter, RouterProvider } from '@tanstack/react-router';

// Create a new router instance
// NOTE: Initial context is added here, can also be overridden in App render if we need hooks
const router = createRouter({ routeTree: routeTree, context: { } });

console.log('routeTree in app.tsx', routeTree);

// HERE we can build a matrix from the routeTree!

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
