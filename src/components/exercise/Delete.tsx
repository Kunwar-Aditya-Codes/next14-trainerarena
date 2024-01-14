'use client';

import { Button } from '../ui/button';
import { trpc } from '@/trpc/client';
import { useToast } from '../ui/use-toast';

const Delete = ({ id }: { id: string }) => {
  const { toast } = useToast();

  const utils = trpc.useUtils();

  const { mutate, isLoading } = trpc.exercise.deleteExcercise.useMutation({
    onSuccess: ({ success }) => {
      if (success) {
        toast({
          variant: 'success',
          title: 'Exercise deleted!',
        });
        utils.exercise.getAllExercises.invalidate();
      }
    },
  });

  const handleClick = () => {
    mutate({ id });
  };

  return (
    <Button
      variant={'destructive'}
      disabled={isLoading}
      onClick={() => handleClick()}
      className=' bg-red-600 hover:bg-red-700'
      size={'sm'}
    >
      Delete
    </Button>
  );
};
export default Delete;
