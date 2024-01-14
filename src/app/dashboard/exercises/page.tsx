import MaxWidthWrapper from '@/components/all/MaxWidthWrapper';
import ExerciseList from '@/components/exercise/ExerciseList';

const Exercises = () => {
  return (
    <MaxWidthWrapper className='h-full'>
      <div className='mb-8 mt-4'>
        <h1 className='text-4xl font-bold text-muted-foreground'>Exercises</h1>
      </div>
      <div className='mt-8 h-full flex-1'>
        <ExerciseList />
      </div>
    </MaxWidthWrapper>
  );
};
export default Exercises;
