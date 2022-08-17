import { createApp } from 'vue'
import App from './App.vue'
import store from './assets/stroe'
// import mitt from 'mitt'
// let emitter = mitt();

// app.config.globalProperties.emitter = emitter;
const app = createApp(App);
app.use(store).mount('#app')
// app.mount('#app') 
