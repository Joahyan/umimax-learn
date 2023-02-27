import { Spin } from 'antd';

const LoadingPage: React.FC = () => {
  return (
    <div className='pageLoading'>
      <Spin></Spin>
    </div>
  );
};

export default LoadingPage;
