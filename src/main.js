// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueTap from 'v-tap'
import Iscorll from './components/scroller/index'

// import { Field, DatetimePicker} from 'minu-ui'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import './assets/css/_global.scss'
import './assets/css/_common.scss'
Vue.config.productionTip = false
Vue.use(vueTap)
Vue.use(Iscorll)
Vue.use(MintUI)
// Vue.component(Field.name, Field)
// Vue.component(DatetimePicker.name, DatetimePicker)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
