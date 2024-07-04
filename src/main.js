import { createApp } from 'vue'
import router from './routes'
import App from './App.vue'
import './assets/css/tailwind.css'
import '@/assets/css/style.css'
import api from './services/api'


const app = createApp(App)


app.config.globalProperties.$http = api

app.use(router)
app.mount('#app')