export type CurrentUser = {
  avatar?: string;
  name?: string;
  useId?: string;
};

export type UserModelType = {
  namespace: 'user';
  state: CurrentUser;
  effect: {};
  reducer: {};
};

/**
 * 存储用户信息及相关操作
 */
const UserModel: UserModelType = {
  namespace: 'user',
  state: {},
  effect: {},
  reducer: {}
};

export default UserModel;
