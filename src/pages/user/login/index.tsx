import { HOME_URL } from '@/utils/utils';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { history } from 'umi';
import styles from './index.less';
import { login } from './service';

/**
 * 登录页
 * @returns
 */
const LoginPage: React.FC = () => {
  const [form] = Form.useForm();

  const handleLogin = () => {
    let params = form.getFieldsValue();
    params.deptId = 41614461400003;
    login(params).then((res) => {
      if (res.code === 200) {
        localStorage.setItem('token', res.data);
        history.push(HOME_URL);
        message.success('登录成功！');
      }
    });
  };

  return (
    <div
      className={styles.userLayout}
      style={{ background: 'blue' }}
    >
      <div className={styles.loginContainer}>
        <div className={styles.loginTitle}>EDAN 理邦全院胎监系信息系统</div>
        <div className={styles.loginBox}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            登录账号
          </div>
          <Form
            form={form}
            initialValues={{ remember: true }}
            onFinish={() => {}}
          >
            <Form.Item
              name='username'
              rules={[{ required: true, message: '请输入用户名!' }]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder='请输入用户名'
              />
            </Form.Item>
            <Form.Item
              name='password'
              rules={[{ required: true, message: '请输入密码!' }]}
            >
              <Input
                prefix={<LockOutlined />}
                type='password'
                placeholder='请输入密码'
              />
            </Form.Item>
            <Form.Item
              name='remember'
              valuePropName='checked'
              noStyle
            >
              <Checkbox>自动登录</Checkbox>
            </Form.Item>

            <Form.Item style={{ marginTop: '32px' }}>
              <Button
                style={{ width: '100%' }}
                type='primary'
                htmlType='submit'
                onClick={() => {
                  handleLogin();
                }}
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
