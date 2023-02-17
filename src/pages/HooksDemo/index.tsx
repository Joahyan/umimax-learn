import { Tabs } from 'antd';
import UseContextDemo from './Context';
import { UseReducerDemo } from './Reducer';
import UseReduxDemo from './Redux';

const HooksDemo: React.FC = () => {
  return (
    <Tabs>
      <Tabs.TabPane key={1} tab='useContext'>
        <UseContextDemo />
      </Tabs.TabPane>
      <Tabs.TabPane key={2} tab='useReducer'>
        <UseReducerDemo />
      </Tabs.TabPane>
      <Tabs.TabPane key={3} tab='redux(useContext+useReducer)'>
        <UseReduxDemo />
      </Tabs.TabPane>
    </Tabs>
  );
};

export default HooksDemo;
