import { InitialStateType } from '@/.umi/plugin-initialState/@@initialState';
import Guide from '@/components/Guide';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Button } from 'antd';
import styles from './index.less';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  const { initialState, setInitialState } = useModel('@@initialState');
  return (
      <div className={styles.container}>
        <Guide name={name} />
        <Button
          onClick={() => {
            if (!initialState?.collapsed) {
              setInitialState({ ...initialState, collapsed: true } as InitialStateType);
            }
          }}
        >
          收缩
        </Button>
      </div>
  );
};

export default HomePage;
