'use client';

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  ExerciseValidator,
  TExerciseValidator,
} from '@/lib/validation/exercise-validation';
import { cn } from '@/lib/utils';
import { trpc } from '@/trpc/client';
import { Loader2, Plus } from 'lucide-react';
import { useToast } from '../ui/use-toast';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Form, FormControl, FormField } from '../ui/form';

const AddExercise = () => {
  const { toast } = useToast();
  const utils = trpc.useUtils();

  const { mutate, isLoading } = trpc.exercise.addExercise.useMutation({
    onSuccess: ({ success }) => {
      if (success) {
        toast({
          variant: 'success',
          title: 'Exercise created!',
        });
        form.reset();
        utils.exercise.getAllExercises.invalidate();
      }
    },
  });

  const form = useForm<TExerciseValidator>({
    resolver: zodResolver(ExerciseValidator),
  });

  const handleCreate: SubmitHandler<TExerciseValidator> = ({
    name,
    category,
  }: TExerciseValidator) => {
    mutate({
      name,
      category,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'secondary'} size={'sm'}>
          <Plus className='w-4 h-4 mr-2' /> Add Exercise
        </Button>
      </DialogTrigger>
      <DialogContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleCreate)}
            className='space-y-6'
          >
            <div className='space-y-1'>
              <Label className=''>Exercise Name</Label>
              <Input {...form.register('name')} />
            </div>
            <FormField
              control={form.control}
              name='category'
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className='w-full'>
                      <SelectValue placeholder='Category' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='quads'>Quads</SelectItem>
                    <SelectItem value='hamstring'>Hamstring</SelectItem>
                    <SelectItem value='calves'>Calves</SelectItem>
                    <SelectItem value='back'>Back</SelectItem>
                    <SelectItem value='biceps'>Biceps</SelectItem>
                    <SelectItem value='triceps'>Triceps</SelectItem>
                    <SelectItem value='shoulders'>Shoulders</SelectItem>
                    <SelectItem value='abs'>Abs</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />

            <Button type='submit' className='w-full' disabled={isLoading}>
              {isLoading ? (
                <Loader2 className='w-5 h-5 animate-spin' />
              ) : (
                <>Create</>
              )}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
export default AddExercise;
