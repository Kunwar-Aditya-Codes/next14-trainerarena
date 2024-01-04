import Navbar from '@/components/all/Navbar';
import Container from '@/components/dashboard/Container';
import Sidebar from '@/components/dashboard/Sidebar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=' flex flex-col min-h-screen'>
      <Navbar />
      <div className='flex flex-grow '>
        <Sidebar />
        <Container>{children}</Container>
      </div>
    </div>
  );
};
export default DashboardLayout;
