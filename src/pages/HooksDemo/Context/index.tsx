import { Button } from 'antd';
import React from 'react';
import { useState } from 'react';
import { ChildFirst } from './components/ChildFirst';

const User = {
  first: {
    name: 'yy',
    sex: 'men'
  },
  second: {
    name: 'kk',
    sex: 'women'
  }
};
// useContext 上下文组件传递信息
export const UserContext = React.createContext(User.first);

const UseContextDemo: React.FC = () => {
  const [user, setUser] = useState(User.first);
  return (
    <>
      <Button
        style={{ width: '100px' }}
        onClick={() => {
          setUser(user == User.first ? User.second : User.first);
        }}
      >
        切换用户
      </Button>
      <UserContext.Provider value={user}>
        <ChildFirst></ChildFirst>
      </UserContext.Provider>
    </>
  );
};

export default UseContextDemo;
