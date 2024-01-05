'use client';

import { useSidebar } from '@/hooks/useSidebar';
import { cn } from '@/lib/utils';
import { useEffect } from 'react';
import { useMediaQuery } from 'usehooks-ts';

const Container = ({ children }: { children: React.ReactNode }) => {
  const { collapsed, onCollapse, onExpand } = useSidebar((state) => state);

  const matches = useMediaQuery('(max-width : 1024px)');

  useEffect(() => {
    if (matches) {
      onCollapse();
    } else {
      onExpand();
    }
  }, [matches, onCollapse, onExpand]);
  return (
    <div
      className={cn(
        'flex-1 p-4',
        collapsed ? 'ml-[70px]' : 'ml-[70px] lg:ml-60'
      )}
    >
      {children}
    </div>
  );
};
export default Container;
