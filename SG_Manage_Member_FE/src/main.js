import { createApp } from 'vue'
import App from './App.vue'
import Notifications from '@kyvg/vue3-notification'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { createPinia } from 'pinia';

const pinia = createPinia()

library.add(fas);

import './assets/main.css'
import router from './router/router'

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(Notifications)
  .use(router)
  .use(pinia)
  .mount('#app')
