import './bootstrap';
import 'alpinejs';

import {createApp} from "vue/dist/vue.esm-bundler";
import Companiesindex from "./components/companies/Companiesindex.vue";
import router from "./router";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp({
    components:{
        Companiesindex
    }
}).use(router).use(ElementPlus).mount('#app')

