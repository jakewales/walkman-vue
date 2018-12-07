import { RootStateType, UserLogin } from './types';
import { ActionTree } from 'vuex';
import Auth from '@/requests/index';

export const actions: ActionTree<RootStateType, any> = {
  async userLogin({ commit }, data: UserLogin) {
    const response = await Auth.login(data);
    const userInstance: UserLogin = {
      name: data.name,
      password: data.password,
      token: response.data.token,
    };
    commit('USER_LOGIN', userInstance);
    return response.status;
  },
};
