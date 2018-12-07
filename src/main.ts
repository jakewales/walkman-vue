import Vue from 'vue';
import App from './App.vue';
import router from './routers';
import store from './stores';
import { Button, Input, TimeSelect, Form, FormItem, TimePicker, Card } from 'element-ui';

import '@/styles/index.scss';
import '@/styles/global-variable.scss';

Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(Input);
Vue.use(TimeSelect);
Vue.use(TimePicker);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Card);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
