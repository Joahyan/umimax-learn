import { Outlet } from 'react-router';

const UserLayout: React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default UserLayout;
