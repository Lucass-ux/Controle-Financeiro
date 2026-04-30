import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { IonicVue } from '@ionic/vue'
import { Storage } from '@ionic/storage'
import App from './App.vue'
import router from './router'

import '@ionic/vue/css/core.css'
import '@ionic/vue/css/normalize.css'
import '@ionic/vue/css/structure.css'
import '@ionic/vue/css/typography.css'
import '@ionic/vue/css/padding.css'
import '@ionic/vue/css/float-elements.css'
import '@ionic/vue/css/text-alignment.css'
import '@ionic/vue/css/text-transformation.css'
import '@ionic/vue/css/flex-utils.css'
import '@ionic/vue/css/display.css'
import './theme/variables.css'

const storage = new Storage()

storage.create().then(() => {
  const app = createApp(App)
    .use(IonicVue)
    .use(createPinia())
    .use(router)

  app.provide('storage', storage)

  router.isReady().then(() => {
    app.mount('#app')
  })
})