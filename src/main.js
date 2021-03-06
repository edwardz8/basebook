import VueCompositionApi from '@vue/composition-api'
import * as firebase from 'firebase'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/css/tailwind.css'
import './registerServiceWorker'

import App from './App.vue'
import router from './router'
import store from './store'
import {
  firestorePlugin
} from 'vuefire'

Vue.use(VueCompositionApi);
Vue.use(firestorePlugin)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false;

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user)
  new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('#app')
});