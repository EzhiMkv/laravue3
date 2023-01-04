import './bootstrap';
import 'alpinejs';

import {createApp} from "vue/dist/vue.esm-bundler";
import Companiesindex from "./components/companies/Companiesindex.vue";
import router from "./router";

createApp({
    components:{
        Companiesindex
    }
}).use(router).mount('#app')

