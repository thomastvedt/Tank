import { useMatches } from '@tanstack/react-router';
export type Category = 'operational' | 'logistics' | 'commercial';

export function useMatrixCategory(): Category | undefined {
  return useMatches({
    select: (matches): Category | undefined => {
      console.log('calculate matches matrix category');
      for (const c of matches) {
        const routeId = c.routeId;
        if (routeId.indexOf('/_operational') !== -1) {
          return 'operational';
        } else if (routeId.indexOf('/_commercial') !== -1) {
          return 'commercial';
        } else if (routeId.indexOf('/_logistics') !== -1) {
          return 'logistics';
        }
      }
      return undefined;
    },
    structuralSharing: true
  });
}
