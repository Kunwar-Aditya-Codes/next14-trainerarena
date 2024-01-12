const ClientStatCard = ({ clientId }: { clientId: string }) => {
  return (
    <div className='flex-1 p-4 mt-8 lg:mt-0 lg:pt-0'>
      <div className='flex flex-col'>
        <div className='flex items-center gap-x-6 justify-between mb-6 w-full '>
          <div className='py-3 px-5 rounded-xl flex-grow border'>
            <span className='text-xs text-muted-foreground font-medium tracking-wider'>
              Total Workouts
            </span>
            <p className='mt-1 pb-1'>23</p>
          </div>
          <div className='py-3 px-5 rounded-xl flex-grow border '>
            <span className='text-xs text-muted-foreground font-medium tracking-wider'>
              Total Volume (kg)
            </span>
            <p className='mt-1 pb-1'>4400</p>
          </div>
        </div>
        <div className='pt-4 border-t'>
          <h1 className='text-xl font-medium lg:text-2xl text-muted tracking-wider text-center lg:text-start'>
            Workout History
          </h1>
        </div>
      </div>
    </div>
  );
};
export default ClientStatCard;
