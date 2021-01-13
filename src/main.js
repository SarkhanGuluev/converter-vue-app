import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index.js'
import VueAxios from 'vue-axios'
import axios from 'axios'

const app = createApp(App)

app.use(store)
app.use(VueAxios, axios)

app.mount('#app')
