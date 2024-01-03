'use client';

import Image from 'next/image';
import MaxWidthWrapper from './MaxWidthWrapper';
import { Button } from '../ui/button';
import Link from 'next/link';
import { UserButton, useAuth } from '@clerk/nextjs';

const Navbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className='shadow-sm sticky top-0 py-3 border-b-muted bg-background border-b'>
      <MaxWidthWrapper>
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
