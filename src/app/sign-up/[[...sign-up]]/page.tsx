import { SignUp } from '@clerk/nextjs';
import Image from 'next/image';

export default function Page() {
  return (
    <div className='h-screen flex flex-col items-center justify-center gap-y-8'>
      <Image
        src='/main-logo.png'
        alt='logo'
        className='w-[6.3rem] h-24 shadow-md shadow-white/5 rounded-full p-3 '
        height={500}
        width={500}
      /> 
      <SignUp />
    </div>
  );
}
