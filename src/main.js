import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// plugin
app.use(router)

app.mount('#app')
