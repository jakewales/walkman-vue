<template>
  <div class="login">
    <el-card>
      <el-form>
        <el-form-item :label="'用户名：'">
          <el-input v-model="user.name"></el-input>
        </el-form-item>
        <el-form-item :label="'密码：'">
          <el-input type="password" v-model="user.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="button" @click="login()">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Action, Mutation } from 'vuex-class';

@Component
export default class Login extends Vue {
  @Action('userLogin')
  public AuthLogin!: (data: any) => number | void;

  private user = {
    name: '',
    password: '',
  };
  private async login() {
    if (await this.AuthLogin(this.user)) {
      this.$router.push('/manager');
    }
  }
}
</script>

<style lang="scss" scoped>
  .login {
    width: 360px;
    margin: 0 auto;
  }
</style>

