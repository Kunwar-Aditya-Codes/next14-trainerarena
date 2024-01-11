import ClientProfileCard from '@/components/client/ClientProfileCard';

interface ClientPageProps {
  params: {
    clientId: string;
  };
}

const ClientPage = ({ params }: ClientPageProps) => {
  const clientId = params.clientId;

  return (
    <div className='h-full flex flex-col lg:flex-row lg:p-8 py-4 space-x-4 '>
      {/* Client Details */}
      <ClientProfileCard clientId={clientId} />

      {/* Stats */}
      <div className='bg-violet-500/55 flex-1 h-full'>Stats</div>
    </div>
  );
};
export default ClientPage;
