import {createRouter, createWebHistory} from "vue-router";

import Companiesindex from "../components/companies/Companiesindex.vue";
import CompaniesCreate from "../components/companies/CompaniesCreate.vue";
import CompaniesEdit from "../components/companies/CompaniesEdit.vue";

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
    {
        path:'/companies/:id/edit',
        name: 'companies.edit',
        component: CompaniesEdit,
        props: true
    },
]


export default createRouter({
    history: createWebHistory(),
    routes,
})
