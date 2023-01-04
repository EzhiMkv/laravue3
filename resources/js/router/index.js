import {createRouter, createWebHistory} from "vue-router";

import Companiesindex from "../components/companies/Companiesindex.vue";
import CompaniesCreate from "../components/companies/CompaniesCreate.vue";

const routes = [
    {
        path:'/dashboard',
        name: 'companies.index',
        component: Companiesindex,
    },
    {
        path:'/companies/create',
        name: 'companies.create',
        component: CompaniesCreate,
    },
]


export default createRouter({
    history: createWebHistory(),
    routes,
})
