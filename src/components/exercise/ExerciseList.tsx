'use client';

import { trpc } from '@/trpc/client';
import { columns } from './Columns';
import DataTable from './DataTable';
import { Skeleton } from '../ui/skeleton';
import { Exercise } from '@prisma/client';

const ExerciseList = () => {
  const { data: allExercises, isLoading } =
    trpc.exercise.getAllExercises.useQuery();

  const data = allExercises?.response as Exercise[];

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
export default ExerciseList;
