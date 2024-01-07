'use client';

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Label } from '../ui/label';

const AddClient = () => {
  // TODO: Add client function

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'secondary'}>New Client</Button>
      </DialogTrigger>
      <DialogContent>
        <div className='mb-4 space-y-4'>
          <div className='space-y-1'>
            <Label className=''>Username</Label>
            <Input />
          </div>
          <div className='space-y-1'>
            <Label>Phone Number</Label>
            <Input />
          </div>
          <div className='space-y-1'>
            <Label>Height</Label>
            <Input />
          </div>
          <div className='space-y-1'>
            <Label>Weigth</Label>
            <Input />
          </div>
        </div>
        <Button>Create</Button>
      </DialogContent>
    </Dialog>
  );
};
export default AddClient;
