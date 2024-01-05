import { Button } from '../ui/button';

const Delete = ({ clientId }: { clientId: string }) => {
  return (
    <Button
      variant={'destructive'}
      className=' bg-red-600 hover:bg-red-700'
      size={"sm"}
    >
      Delete
    </Button>
  );
};
export default Delete;
