import { InitialStateType } from '@/.umi/plugin-initialState/@@initialState';
import { TwitterOutlined, YoutubeOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Button, Radio, Tag } from 'antd';
import { useEffect, useState } from 'react';
import styles from '../index.less';

const HeaderRender: React.FC = () => {
  const { setInitialState, initialState } = useModel('@@initialState');

  const [btnValue, setBtnValue] = useState(initialState?.collapsed ?? false);

  useEffect(() => {
    setBtnValue(initialState?.collapsed ?? false);
  }, [initialState?.collapsed]);

  return (
    <div className={styles.flexBox}>
      <Radio.Group
        value={btnValue}
        onChange={(e) => {
          if (e.target.value != initialState?.collapsed) {
            setInitialState({
              ...initialState,
              collapsed: e.target.value
            } as InitialStateType);
          }
        }}
      >
        <Radio.Button value={true}>
          <TwitterOutlined />
          主屏模式
        </Radio.Button>
        <Radio.Button value={false}>
          <TwitterOutlined />
          观察模式
        </Radio.Button>
      </Radio.Group>

      <div style={{ marginLeft: '16px', flexGrow: 1 }}>
        <Tag
          icon={<TwitterOutlined />}
          color='#55acee'
        >
          Twitter
        </Tag>
        <Tag
          icon={<YoutubeOutlined />}
          color='#cd201f'
        >
          Youtube
        </Tag>
      </div>

      <div>
        <span style={{ marginRight: '16px' }}>在线12台/共20台</span>
        <Button
          icon={<TwitterOutlined />}
          style={{ marginRight: '16px' }}
        >
          静音
        </Button>
        <Button icon={<TwitterOutlined />}>报警复位</Button>
      </div>
    </div>
  );
};

export default HeaderRender;
