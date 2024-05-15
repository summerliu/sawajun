import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

// @ref: https://nextjs.org/docs/app/api-reference/functions/use-router#router-events
export default function useNavigationChange(callback: () => void): void {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(callback, [callback, pathname, searchParams]);
}
