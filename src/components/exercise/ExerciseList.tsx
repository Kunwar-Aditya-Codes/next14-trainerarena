'use client';

import { trpc } from '@/trpc/client';
import { columns } from './Columns';
import DataTable from './DataTable';
import { Exercise } from '@prisma/client';
import LoadingSkeleton from '../LoadingSkeleton';

const ExerciseList = () => {
  const { data: allExercises, isLoading } =
    trpc.exercise.getAllExercises.useQuery();
  const data = allExercises?.response as Exercise[];

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  return <DataTable columns={columns} data={data} />;
};
export default ExerciseList;
