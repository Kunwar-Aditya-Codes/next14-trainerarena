'use client';

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  ClientValidator,
  TClientValidator,
} from '@/lib/validation/client-validation';
import { cn } from '@/lib/utils';

const AddClient = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TClientValidator>({
    resolver: zodResolver(ClientValidator),
  });

  const handleCreate: SubmitHandler<TClientValidator> = ({
    username,
    email,
    height,
    weight,
  }: TClientValidator) => {};

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'secondary'}>New Client</Button>
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
          <Button type='submit' className='w-full'>
            Create
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
export default AddClient;
