import MaxWidthWrapper from '@/components/all/MaxWidthWrapper';
import ClientList from '@/components/clients/ClientList';
import { columns } from '@/components/clients/Columns';
import { Button } from '@/components/ui/button';

const data = [
  {
    id: '1',
    username: 'Aditya',
    email: 'aditya',
  },
  {
    id: '2',
    username: 'jayesh',
    email: 'aditya',
  },
  {
    id: '13',
    username: 'Aditya',
    email: 'aditya',
  },
  {
    id: '14',
    username: 'Aditya',
    email: 'aditya',
  },
  {
    id: '15',
    username: 'Aditya',
    email: 'aditya',
  },
  {
    id: '16',
    username: 'Aditya',
    email: 'aditya',
  },
  {
    id: '17',
    username: 'Aditya',
    email: 'aditya',
  },
  {
    id: '18',
    username: 'Aditya',
    email: 'aditya',
  },
  {
    id: '19',
    username: 'Aditya',
    email: 'aditya',
  },
  {
    id: '10',
    username: 'Aditya',
    email: 'aditya',
  },
  {
    id: '21',
    username: 'Aditya',
    email: 'aditya',
  },
  {
    id: '31',
    username: 'Aditya',
    email: 'aditya',
  },
  {
    id: '41',
    username: 'Aditya',
    email: 'aditya',
  },
  {
    id: '51',
    username: 'Aditya',
    email: 'aditya',
  },
  {
    id: '61',
    username: 'Aditya',
    email: 'aditya',
  },
];

const Clients = () => {
  return (
    <MaxWidthWrapper className='h-full '>
      <div className='mb-8 mt-4'>
        <h1 className='text-4xl font-bold'>Clients</h1>
      </div>
      <div className='mt-8 h-full flex-1 '>
        <ClientList columns={columns} data={data} />
      </div>
    </MaxWidthWrapper>
  );
};
export default Clients;
