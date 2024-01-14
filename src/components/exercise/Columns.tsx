'use client';

import { ColumnDef } from '@tanstack/react-table';
import Delete from './Delete';

export type Exercise = {
  id: string;
  name: string;
  category: string;
};

export const columns: ColumnDef<Exercise>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'category',
    header: 'Category',
  },
  {
    id: 'actions',
    accessorKey: 'actions',
    header: 'Actions',
    cell: ({ row }) => (
      <div className='flex items-center justify-center space-x-4'>
        <Delete clientId={row.original.id} />
      </div>
    ),
  },
];
