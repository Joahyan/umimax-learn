import { formateDate } from '@/utils/utils';
import { Select, Tag } from 'antd';
import { useEffect, useState } from 'react';
import styles from '../index.less';

type TagModel = {
  name: string;
  color: string;
  textColor: string;
  disabled?: boolean;
};

const FootRender: React.FC = () => {
  const [tags, setTags] = useState<TagModel[]>([]);
  const [curTime, setCurTime] = useState('');

  useEffect(() => {
    setTags([
      { name: '01', color: 'red', textColor: '#FFFFFF' },
      { name: '02', color: 'red', textColor: '#FFFFFF' },
      { name: '03', color: 'red', textColor: '#FFFFFF' },
      { name: '03', color: 'red', textColor: '#FFFFFF' },
      { name: '03', color: 'red', textColor: '#FFFFFF' },
      { name: '03', color: 'red', textColor: '#FFFFFF' },
      { name: '03', color: 'red', textColor: '#FFFFFF' },
      { name: '03', color: 'red', textColor: '#FFFFFF' }
    ]);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() =>
      setCurTime(formateDate(new Date(), 'YYYY-MM-DD HH:mm:ss'))
    );
    return () => clearInterval(timer);
  });

  return (
    <div className={styles.flexBox}>
      <div>
        <Select style={{ width: '180px' }}>
          <Select.Option value={1}>1</Select.Option>
          <Select.Option value={2}>2</Select.Option>
        </Select>
      </div>
      <div style={{ margin: '0 16px', flexGrow: 1 }}>
        {tags.map((item, index) => (
          <Tag
            key={index}
            color={item.color}
          >
            {item.name}
          </Tag>
        ))}
      </div>
      <div>
        <span> 运行时长：21分钟</span>
        <span style={{ marginLeft: '16px' }}>{curTime}</span>
      </div>
    </div>
  );
};

export default FootRender;
