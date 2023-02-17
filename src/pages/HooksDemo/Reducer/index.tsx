import { Button } from 'antd';
import { useReducer } from 'react';

export const UseReducerDemo: React.FC = () => {
  const initialState = { count: 1 };
  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case 'increment':
        return { count: state.count + action.number };
      case 'decrement':
        return { count: state.count - action.number };
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Count： {state.count}
      <div>
        <Button
          style={{ width: '50px', marginRight: '20px', marginTop: '20px' }}
          onClick={() => {
            dispatch({ type: 'decrement', number: 10 });
          }}
        >
          -
        </Button>
        <Button
          style={{ width: '50px' }}
          onClick={() => {
            dispatch({ type: 'increment', number: 5 });
          }}
        >
          +
        </Button>
      </div>
    </>
  );
};
