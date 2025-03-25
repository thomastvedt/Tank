import { useMatches } from '@tanstack/react-router';
import { Route as retailerRoute } from '../routes/_app/retailer.$retailerId/route';
import { Route as machineRoute } from '../routes/_app/machine.$machineId/route';
export type Level = 'root' | 'retailer' | 'machine' | 'ticket' | 'prediction';

export function useMatrixLevel(): Level | undefined {
  return useMatches({
    structuralSharing: true,
    select: (matches): Level | undefined => {
      for (const c of matches) {
        const routeId = c.routeId;
        if (routeId.indexOf('/_root') !== -1) {
          return 'root';
        } else if (routeId === retailerRoute.id) {
          return 'retailer';
        } else if (routeId === machineRoute.id) {
          return 'machine';
        }
      }
      return undefined;
    }
  });
  // TODO: TAN add ticket and prediction levels
}
