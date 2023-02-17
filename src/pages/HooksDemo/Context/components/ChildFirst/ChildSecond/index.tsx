import { UserContext } from '@/pages/HooksDemo/Context';
import { useContext } from 'react';

export const ChildSecond: React.FC = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>我是孙子组件</h2>
      <div>姓名：{user.name}</div>
      <div>行吧：{user.sex}</div>
    </div>
  );
};
