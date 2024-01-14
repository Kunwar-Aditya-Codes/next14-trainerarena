'use client';

import { trpc } from '@/trpc/client';
import { columns } from './Columns';
import DataTable from './DataTable';
import { Client } from '@prisma/client';
import LoadingSkeleton from '../LoadingSkeleton';

const ClientList = () => {
  const { data: allClients, isLoading } = trpc.trainer.getAllClients.useQuery();
  const data = allClients?.allClients as Client[];

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  return <DataTable columns={columns} data={data} />;
};
export default ClientList;
