import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'jquery/src/jquery.js';
import "bootstrap/dist/js/bootstrap.min.js";
// import "./assets/css/bootstrap.min.css";
import "./assets/css/bootstrap.min.css"
import "./assets/css/style.css";

createApp(App)
   .use(store)
   .use(router)
   .mount('#app')
