import MaxWidthWrapper from '@/components/all/MaxWidthWrapper';
import ClientList from '@/components/clients/ClientList';

const Clients = () => {
  return (
    <MaxWidthWrapper className='h-full'>
      <div className='mb-8 mt-4'>
        <h1 className='text-4xl font-bold text-muted-foreground'>Clients</h1>
      </div>
      <div className='mt-8 h-full flex-1'>
        <ClientList />
      </div>
    </MaxWidthWrapper>
  );
};
export default Clients;
