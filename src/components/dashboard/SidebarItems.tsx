'use client';

import { LayoutDashboard } from 'lucide-react';
import Link from 'next/link';

const ITEMS = [
  {
    label: 'Dashboard',
    icon: <LayoutDashboard className='w-5 h-5' />,
  },
  {
    label: 'Users',
    icon: <LayoutDashboard className='w-5 h-5' />,
  },
  {
    label: 'Excercises',
    icon: <LayoutDashboard className='w-5 h-5' />,
  },
];

const SidebarItems = () => {
  return (
    <div className='h-full'>
      <div className='grid grid-cols-1 gap-y-8 justify-items-center mt-4 px-4 '>
        {ITEMS.map((item) => (
          <Link key={item.label} href='/dashboard' className='w-full'>
            <ul className='flex items-center space-x-6 hover:bg-white/5 w-full py-3  pl-4'>
              <li className=''>{item.icon}</li>
              <li className='text-lg'>{item.label}</li>
            </ul>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default SidebarItems;
