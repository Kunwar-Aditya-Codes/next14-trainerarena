'use client';

import { Button } from '../ui/button';
import { trpc } from '@/trpc/client';
import { useToast } from '../ui/use-toast';

const Delete = ({ clientId }: { clientId: string }) => {
  const { toast } = useToast();

  const utils = trpc.useUtils();

  const { mutate, isLoading } = trpc.trainer.deleteClient.useMutation({
    onSuccess: ({ success }) => {
      if (success) {
        toast({
          title: 'Client deleted!',
        });
        utils.trainer.getAllClients.invalidate();
      }
    },
  });

  const handleClick = () => {
    mutate({ clientId });
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
