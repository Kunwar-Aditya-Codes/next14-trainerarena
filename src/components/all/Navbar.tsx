'use client';

import Image from 'next/image';
import MaxWidthWrapper from './MaxWidthWrapper';
import { Button } from '../ui/button';
import Link from 'next/link';
import { UserButton, useAuth } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const { isSignedIn } = useAuth();
  const path = usePathname();

  const isDashboard = path?.includes('/dashboard');

  return (
    <div className='shadow-sm h-20 fixed w-full top-0 py-3 border-b-muted bg-background border-b z-10'>
      <MaxWidthWrapper className={cn(isDashboard && 'max-w-full')}>
        <div className='flex items-center justify-between'>
          <Link href={'/'}>
            <Image
              src={'/main-logo.png'}
              alt='logo'
              width={500}
              height={500}
              className='w-[3.3rem] h-12 rounded-full p-1'
            />
          </Link>

          <div>
            {isSignedIn ? (
              <UserButton afterSignOutUrl='/' />
            ) : (
              <Button className='rounded-full'>
                <Link href={'/sign-in'}>Sign In</Link>
              </Button>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Navbar;
