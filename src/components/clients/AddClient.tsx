'use client';

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  ClientValidator,
  TClientValidator,
} from '@/lib/validation/client-validation';
import { cn } from '@/lib/utils';
import { trpc } from '@/trpc/client';
import { Loader2, Plus } from 'lucide-react';
import { useToast } from '../ui/use-toast';

const AddClient = () => {
  const { toast } = useToast();
  const utils = trpc.useUtils();

  const { mutate, isLoading } = trpc.trainer.createClient.useMutation({
    onError: (e) => {
      if (e?.data?.code === 'CONFLICT') {
        toast({
          variant: 'destructive',
          title: 'Email exists!',
          description: 'Try with another email. This email is already in use.',
        });
      }
    },
    onSuccess: ({ success }) => {
      if (success) {
        toast({
          variant: 'success',
          title: 'Client created!',
        });
        reset();
        utils.trainer.getAllClients.invalidate();
      }
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TClientValidator>({
    resolver: zodResolver(ClientValidator),
  });

  const handleCreate: SubmitHandler<TClientValidator> = ({
    username,
    email,
    height,
    weight,
  }: TClientValidator) => {
    mutate({
      username,
      email,
      height,
      weight,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'secondary'} size={'sm'}>
          <Plus className='w-4 h-4 mr-2' /> Add Client
        </Button>
      </DialogTrigger>
      <DialogContent>
        <form onSubmit={handleSubmit(handleCreate)} className='space-y-4'>
          <div className='space-y-1'>
            <Label className=''>Username</Label>
            <Input
              {...register('username')}
              className={cn({
                'focus-visible:ring-red-500': errors.username,
              })}
            />
            {errors?.username && (
              <p className='text-xs text-red-500'>{errors.username.message}</p>
            )}
          </div>
          <div className='space-y-1'>
            <Label>Email</Label>
            <Input
              {...register('email')}
              className={cn({
                'focus-visible:ring-red-500': errors.email,
              })}
            />
            {errors?.email && (
              <p className='text-xs text-red-500'>{errors.email.message}</p>
            )}
          </div>
          <div className='space-y-1'>
            <Label>Height</Label>
            <Input
              {...register('height', {
                setValueAs: (v) => parseInt(v),
              })}
              className={cn({
                'focus-visible:ring-red-500': errors.height,
              })}
            />
            {errors?.height && (
              <p className='text-xs text-red-500'>{errors.height.message}</p>
            )}
          </div>
          <div className='space-y-1'>
            <Label>Weigth</Label>
            <Input
              {...register('weight', {
                setValueAs: (v) => parseInt(v),
              })}
              className={cn({
                'focus-visible:ring-red-500': errors.weight,
              })}
            />
            {errors?.weight && (
              <p className='text-xs text-red-500'>{errors.weight.message}</p>
            )}
          </div>
          <Button type='submit' className='w-full' disabled={isLoading}>
            {isLoading ? (
              <Loader2 className='w-5 h-5 animate-spin' />
            ) : (
              <>Create</>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
export default AddClient;
