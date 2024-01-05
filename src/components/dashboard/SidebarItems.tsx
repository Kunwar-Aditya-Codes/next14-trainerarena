'use client';

import { useSidebar } from '@/hooks/useSidebar';
import { cn } from '@/lib/utils';
import { LayoutDashboard, Users, Dumbbell } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

const ITEMS = [
  {
    label: 'Dashboard',
    icon: <LayoutDashboard className='w-16 h-16 lg:w-5 lg:h-5' />,
    href: '/dashboard',
  },
  {
    label: 'Users',
    icon: <Users className='w-5 h-5' />,
    href: '/dashboard/users',
  },
  {
    label: 'Exercises',
    icon: <Dumbbell className='w-5 h-5' />,
    href: '/dashboard/exercises',
  },
];

const SidebarItems = () => {
  const { collapsed } = useSidebar((state) => state);

  return (
    <div className='h-full'>
      <div className='space-y-8 p-2'>
        {ITEMS.map((item) => (
          <Button
            key={item.label}
            asChild
            variant={'ghost'}
            className={cn(
              'w-full h-12 ',
              collapsed ? 'justify-center' : 'justify-start'
            )}
          >
            <Link href={item.href}>
              <div
                className={cn(
                  'flex items-center w-full gap-x-4',
                  collapsed && 'justify-center'
                )}
              >
                {item.icon}
                {!collapsed && (
                  <p className='truncate text-lg tracking-wide'>{item.label}</p>
                )}
              </div>
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
};
export default SidebarItems;
