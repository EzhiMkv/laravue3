import {createRouter, createWebHistory} from "vue-router";

import Companiesindex from "../components/companies/Companiesindex.vue";

const routes = [{
    path:'/dashboard',
    name: 'companies.index',
    component: Companiesindex,
},]


export default createRouter({
    history: createWebHistory(),
    routes,
})
