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
    username: 'Aditya',
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
      <div className='h-full flex-1'>
        <div className='flex items-center justify-end border-b pb-4'>
          <Button variant={'outline'} className='shadow-lg'>
            Add Client
          </Button>
        </div>
        <div className='mt-8 '>
          <ClientList columns={columns} data={data} />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};
export default Clients;
