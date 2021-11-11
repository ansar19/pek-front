/* eslint-disable */
import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api'

Vue.use(VueCompositionAPI)
import { provide } from '@vue/composition-api'
import { DefaultApolloClient } from '@vue/apollo-composable'
import apolloClient from '@/apollo/client'

import Spinner from "@/components/Base/Spinner.vue";
import Vuex from 'vuex'
import ShardsVue from 'shards-vue';

// Styles
import 'bootstrap/dist/css/bootstrap.css';
import '@/scss/shards-dashboards.scss';
import '@/assets/scss/date-range.scss';
import 'vue-select/dist/vue-select.css';
import '@/assets/scss/meta-table.scss';
import 'remixicon/fonts/remixicon.css'; // tiptap icons
import 'leaflet/dist/leaflet.css';

import { Icon } from 'leaflet';

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// Core
import App from './App.vue';
import router from './router';
import store from './store'

import vSelect from 'vue-select';

// Layouts
import Default from '@/layouts/Default.vue';


Vue.use(Vuex);

ShardsVue.install(Vue);

Vue.component('default-layout', Default);
Vue.component('v-select', vSelect);
Vue.component('Spinner', Spinner)

const ignoreWarnMessage = 'The .native modifier for v-on is only valid on components but it was used on <div>.';
Vue.config.warnHandler = function (msg, vm, trace) {
  // `trace` is the component hierarchy trace
  if (msg === ignoreWarnMessage) {
    msg = null;
    vm = null;
    trace = null;
  }
}

Vue.config.productionTip = false;
Vue.prototype.$eventHub = new Vue();

new Vue({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
  router,
  store,
  render: h => h(App),
}).$mount('#app');
