import { RootStateType, UserLogin } from './types';
import { MutationTree } from 'vuex';

export const mutations: MutationTree<RootStateType> = {
  USER_LOGIN(state: RootStateType, data: UserLogin) {
    state.name = data.name;
    state.password = data.password;
    state.token = data.token;
  },
};
