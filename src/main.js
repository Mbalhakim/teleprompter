import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// import api from "./lib/api-platform";



createApp(App).use(router).mount('#app')

// app.config.globalProperties.$api = api