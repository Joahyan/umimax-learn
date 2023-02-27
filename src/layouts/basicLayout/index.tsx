import { Layout } from 'antd';
import { Outlet } from 'umi';
import FootRender from './foot';
import HeaderRender from './header';
import styles from './index.less';

const BasicLayout: React.FC = () => (
  <div className={styles.layoutBox}>
    <Layout>
      <Layout.Header>
        <HeaderRender />
      </Layout.Header>
      <Layout.Content className={styles.headerBox}>
        <div style={{ background: '#FFFFFF', height: '100%' }}>
          <Outlet />
        </div>
      </Layout.Content>
      <Layout.Footer>
        <FootRender />
      </Layout.Footer>
    </Layout>
  </div>
);

export default BasicLayout;
