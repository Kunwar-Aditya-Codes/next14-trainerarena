import MaxWidthWrapper from '@/components/all/MaxWidthWrapper';
import ClientList from '@/components/clients/ClientList';
import { columns } from '@/components/clients/Columns';

const data = [
  {
    id: '1',
    username: 'JohnDoe',
    email: 'john.doe@example.com',
  },
  {
    id: '2',
    username: 'JaneSmith',
    email: 'jane.smith@example.com',
  },
  {
    id: '13',
    username: 'BobJohnson',
    email: 'bob.johnson@example.com',
  },
  {
    id: '14',
    username: 'AliceWilliams',
    email: 'alice.williams@example.com',
  },
  {
    id: '15',
    username: 'CharlieBrown',
    email: 'charlie.brown@example.com',
  },
  {
    id: '16',
    username: 'EvaMiller',
    email: 'eva.miller@example.com',
  },
  {
    id: '17',
    username: 'SamJones',
    email: 'sam.jones@example.com',
  },
];

const Clients = () => {
  return (
    <MaxWidthWrapper className='h-full'>
      <div className='mb-8 mt-4'>
        <h1 className='text-4xl font-bold text-muted-foreground'>Clients</h1>
      </div>
      <div className='mt-8 h-full flex-1'>
        <ClientList columns={columns} data={data} />
      </div>
    </MaxWidthWrapper>
  );
};
export default Clients;
