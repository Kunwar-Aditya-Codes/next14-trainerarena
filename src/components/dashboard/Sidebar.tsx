'use client';

import { useSidebar } from '@/hooks/useSidebar';
import { Button } from '../ui/button';
import { ArrowLeftFromLine, ArrowRightFromLine } from 'lucide-react';
import { useIsClient } from 'usehooks-ts';
import { cn } from '@/lib/utils';
import { Skeleton } from '../ui/skeleton';
import SidebarItems from './SidebarItems';

export const SidebarSkeleton = () => {
  return (
    <li className='flex items-center gap-x-4 px-3 py-2'>
      <Skeleton className='min-h-[32px] min-w-[32px] rounded-full' />
      <div className='flex-1'>
        <Skeleton className='h-6' />
      </div>
    </li>
  );
};

const Sidebar = () => {
  const { collapsed, onCollapse, onExpand } = useSidebar((state) => state);
  const isClient = useIsClient();

  if (!isClient) {
    return (
      <aside
        className={
          'fixed left-0 flex flex-col w-[70px] h-full lg:w-60  border-r border-zinc-800 z-50'
        }
      >
        <div className='p-3 pl-6 mb-2 hidden lg:flex items-center justify-end w-full'>
          <Skeleton className='h-6 w-6 rounded-full' />
        </div>
        <ul className='px-2 grid grid-cols-1 gap-y-8 mt-4 pt-2 lg:pt-0'>
          {[...Array(3)].map((_, i) => (
            <SidebarSkeleton key={i} />
          ))}
        </ul>
      </aside>
    );
  }

  return (
    <aside
      className={cn(
        'fixed left-0 flex flex-col w-60 h-full border-r border-zinc-800 z-50',
        collapsed && 'w-[70px]'
      )}
    >
      {collapsed && (
        <div className='hidden lg:flex w-full items-center justify-center pt-4 mb-4'>
          <Button onClick={onExpand} className='h-auto p-2' variant={'ghost'}>
            <ArrowRightFromLine className='w-4 h-4' />
          </Button>
        </div>
      )}
      {!collapsed && (
        <div className='p-3 pl-6 mb- 2 flex items-center w-full'>
          <Button
            onClick={onCollapse}
            className='h-auto ml-auto p-2'
            variant={'ghost'}
          >
            <ArrowLeftFromLine className='h-4 w-4' />
          </Button>
        </div>
      )}

      <SidebarItems />
    </aside>
  );
};
export default Sidebar;
