import { Button } from 'antd';
import { useContext } from 'react';
import { ReduxContext } from '../..';
export const ReduxChild: React.FC = () => {
  const { redux, dispatch } = useContext(ReduxContext);
  return (
    <>
      <div>姓名：{redux.name}</div>
      <Button
        onClick={() => {
          dispatch({ type: 'UPDATENAME' });
        }}
      >
        修改姓名
      </Button>

      <div>年龄：{redux.age}</div>
      <Button
        onClick={() => {
          dispatch({ type: 'UPDATEAGE' });
        }}
      >
        修改年龄
      </Button>
    </>
  );
};
