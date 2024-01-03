import Navbar from '@/components/all/Navbar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
export default DashboardLayout;
