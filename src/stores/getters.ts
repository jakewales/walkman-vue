import { RootStateType } from './types';
import { GetterTree } from 'vuex';

export const getters: GetterTree<RootStateType, any> = {
  username: (state: RootStateType) => state.name,
};
