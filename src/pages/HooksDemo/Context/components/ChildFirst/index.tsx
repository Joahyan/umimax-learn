import { ChildSecond } from './ChildSecond';

export const ChildFirst: React.FC = () => {
  return (
    <div>
      <h1>我是子组件</h1>
      <div>
        <ChildSecond></ChildSecond>
      </div>
    </div>
  );
};
