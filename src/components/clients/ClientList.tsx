'use client';

import { trpc } from '@/trpc/client';
import { columns } from './Columns';
import DataTable from './DataTable';
import { Skeleton } from '../ui/skeleton';
import { User } from '@prisma/client';

const data = [
  {
    id: '1',
    username: 'JohnDoe',
    email: 'john.doe@example.com',
  },
  {
    id: '2',
    username: 'JaneSmith',
    email: 'jane.smith@example.com',
  },
  {
    id: '13',
    username: 'BobJohnson',
    email: 'bob.johnson@example.com',
  },
  {
    id: '14',
    username: 'AliceWilliams',
    email: 'alice.williams@example.com',
  },
  {
    id: '15',
    username: 'CharlieBrown',
    email: 'charlie.brown@example.com',
  },
  {
    id: '16',
    username: 'EvaMiller',
    email: 'eva.miller@example.com',
  },
  {
    id: '17',
    username: 'SamJones',
    email: 'sam.jones@example.com',
  },
];

const ClientList = () => {
  const { data: allClients, isLoading } = trpc.trainer.getAllClients.useQuery();

  const data = allClients?.allClients as User[];

  if (isLoading) {
    return (
      <div>
        <div className='flex flex-col-reverse gap-y-4 lg:flex-row w-full lg:items-center lg:justify-between'>
          <Skeleton className='h-9 lg:w-[20rem]' />
          <Skeleton className='h-9 lg:w-[8rem]' />
        </div>
        <div className='rounded-md  mt-4'>
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className='h-9 mb-4' />
          ))}
        </div>
        <div className='flex items-center justify-end space-x-2 py-4'>
          <Skeleton className='h-8 w-16' />
          <Skeleton className='h-8 w-16' />
        </div>
      </div>
    );
  }

  return <DataTable columns={columns} data={data} />;
};
export default ClientList;
