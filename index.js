import { createApp } from 'vue'
import App from './src/App.vue'
import router from './src/router/index'
import store from './src/store/index'
let app=createApp(App);

app.use(router)
app.use(store)
router.isReady().then(() => app.mount('#app'))
