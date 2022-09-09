import Vue from 'vue'
import App from './CK.vue'
import CKEditor from 'ckeditor4-vue';
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(CKEditor);

new Vue({
  render: h => h(App),
}).$mount('#app')
