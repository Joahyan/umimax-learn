import { createContext, useReducer } from 'react';
import { ReduxChild } from './components/ReduxChild';

export type reduxType = {
  redux?: any;
  dispatch?: any;
};

export const ReduxContext = createContext<reduxType>({});

const UseReduxDemo: React.FC = () => {
  const initialState = {
    name: 'yy',
    age: 10
  };

  const reducer = (state: any, action: any) => {
    let { name, age } = state;
    switch (action.type) {
      case 'UPDATENAME':
        return {
          ...state,
          name: `${name}y`
        };
      case 'UPDATEAGE':
        return {
          ...state,
          age: ++age // ++age,age+1 都可用，age++ 无效果
        };
      default:
        return state;
    }
  };

  const [redux, dispatch] = useReducer(reducer, initialState);

  return (
    <ReduxContext.Provider value={{ redux, dispatch }}>
      <ReduxChild />
    </ReduxContext.Provider>
  );
};

export default UseReduxDemo;
