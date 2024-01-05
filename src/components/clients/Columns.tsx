'use client';

import { ArrowUpDown } from 'lucide-react';
import { ColumnDef } from '@tanstack/react-table';
import { Button } from '../ui/button';
import Delete from './Delete';

export type Client = {
  id: string;
  username: string;
  email: string;
};

export const columns: ColumnDef<Client>[] = [
  {
    accessorKey: 'id',
    header: 'Id',
  },
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
    cell: ({ row }) => <Delete clientId={row.original.id} />,
  },
];
