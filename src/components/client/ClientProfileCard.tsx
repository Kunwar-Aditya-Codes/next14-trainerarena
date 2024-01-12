'use client';

import { trpc } from '@/trpc/client';
import Image from 'next/image';
import { Button } from '../ui/button';
import { Loader2Icon } from 'lucide-react';

const ClientProfileCard = ({ clientId }: { clientId: string }) => {
  const { data: clientProfile, isLoading } =
    trpc.trainer.getClientById.useQuery({
      clientId,
    });

  if (isLoading) {
    return (
      <div className='flex-[0.5] rounded-xl m-4 lg:m-0 p-4 flex items-center justify-center border'>
        <Loader2Icon className='w-10 h-10 animate-spin' />
      </div>
    );
  }

  return (
    <div className='flex-[0.5] pt-0 p-4'>
      <div className='border rounded-xl shadow-lg'>
        <div className='p-4 pt-8 flex items-center justify-center'>
          <Image
            alt='profile_image'
            src={'/download.png'}
            width={500}
            height={500}
            className='w-full max-w-32 rounded-full'
          />
        </div>
        <div className='pb-4'>
          <div className='flex flex-col items-center gap-y-4'>
            <h1 className='text-2xl font-normal tracking-wide text-center'>
              Jake Dorsey
            </h1>
            <Button size={'sm'} className='rounded-[0.6rem] py-5 px-6'>
              New workout
            </Button>
          </div>

          <div className='px-4 grid grid-cols-1 gap-y-4 mt-6'>
            <div className=' py-2 px-4 rounded-xl bg-[#18181b]'>
              <span className='text-xs text-muted-foreground font-medium tracking-wider'>
                Email
              </span>
              <p className='mt-1 pb-1'>aditya@email.com</p>
            </div>
            <div className=' py-2 px-4 rounded-xl bg-[#18181b]'>
              <span className='text-xs text-muted-foreground font-medium tracking-wider'>
                Gender
              </span>
              <p className='mt-1 pb-1'>Male</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ClientProfileCard;
