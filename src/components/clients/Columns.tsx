'use client';

import { ArrowUpDown } from 'lucide-react';
import { ColumnDef } from '@tanstack/react-table';
import { Button } from '../ui/button';
import Delete from './Delete';
import Link from 'next/link';

export type Client = {
  id: string;
  username: string;
  email: string;
};

export const columns: ColumnDef<Client>[] = [
  {
    accessorKey: 'username',
    header: 'Username',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    id: 'actions',
    accessorKey: 'actions',
    header: 'Actions',
    cell: ({ row }) => (
      <div className='flex items-center justify-center space-x-4'>
        <Button size={'sm'} asChild>
          <Link href={`/dashboard/clients/${row.original.id}`}>View</Link>
        </Button>
        <Delete clientId={row.original.id} />
      </div>
    ),
  },
];
