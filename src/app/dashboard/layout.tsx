import Navbar from '@/components/all/Navbar';
import Container from '@/components/dashboard/Container';
import Sidebar from '@/components/dashboard/Sidebar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=''>
      <Navbar />
      <div className='flex flex-grow mt-20'>
        <Sidebar />
        <Container>{children}</Container>
      </div>
    </div>
  );
};
export default DashboardLayout;
