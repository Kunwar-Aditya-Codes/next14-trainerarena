import MaxWidthWrapper from '@/components/all/MaxWidthWrapper';
import Navbar from '@/components/all/Navbar';
import { Button } from '@/components/ui/button';
import { auth, useUser } from '@clerk/nextjs';
import { Dumbbell, LineChart, PenLine } from 'lucide-react';
import Link from 'next/link';

const perks = [
  {
    name: 'Easy progress tracking',
    Icon: LineChart,
    description:
      "Track client's progress matters so track it with out dynamic graphs!",
  },
  {
    name: 'Customize accordingly',
    Icon: PenLine,
    description: 'We provide easy customisation and handy tools to navigate.',
  },
  {
    name: 'Create you own workout',
    Icon: Dumbbell,
    description: 'Create workout for client and update it accordingly!',
  },
];

export default function Home() {
  const { userId } = auth();

  return (
    <>
      <Navbar />
      <MaxWidthWrapper>
        <section className='my-16 pt-6 pb-28 flex flex-col  items-center justify-center'>
          <div className='my-16'>
            <h1 className='text-6xl lg:text-8xl text-center font-bold text-white/85 tracking-wider'>
              Trainer Arena
            </h1>
            <p className='mt-4 text-muted-foreground  tracking-wide text-center lg:text-lg'>
              Tracking client workout made easy!
            </p>
          </div>

          <Link href={userId ? '/dashboard' : '/sign-up'}>
            <Button variant={'outline'} size={'lg'} className='rounded-full '>
              {userId ? 'Dashboard' : 'Sign Up \u2192'}
            </Button>
          </Link>
        </section>

        <section className='border-t py-20'>
          <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
            {perks.map((perk) => (
              <div
                key={perk.name}
                className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'
              >
                <div className='md:flex-shrink-0 flex justify-center'>
                  <div className='h-16 w-16 flex items-center justify-center rounded-full  border-2'>
                    {<perk.Icon className='w-1/3 h-1/3' />}
                  </div>
                </div>

                <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                  <h3 className='text-base font-medium '>{perk.name}</h3>
                  <p className='mt-3 text-sm text-muted-foreground'>
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className='mb-16 mt-8 pt-6 pb-8 '></section>
      </MaxWidthWrapper>
    </>
  );
}
