import ClientProfileCard from '@/components/client/ClientProfileCard';
import ClientStatCard from '@/components/client/ClientStatCard';

interface ClientPageProps {
  params: {
    clientId: string;
  };
}

const ClientPage = ({ params }: ClientPageProps) => {
  const clientId = params.clientId;

  return (
    <div className='h-full flex flex-col lg:flex-row lg:p-8 py-4 lg:space-x-4 '>
      {/* Client Details */}
      <ClientProfileCard clientId={clientId} />

      {/* Stats */}
      <ClientStatCard clientId={clientId} />
    </div>
  );
};
export default ClientPage;
