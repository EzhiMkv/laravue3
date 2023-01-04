<template>
    HELLO COMPANIES
</template>

<script>
import useCompanies from "../../composables/companies";
import {onMounted} from "vue";
export default {
    name: "Companiesindex",
    setup(){
        const {companies, getCompanies} = useCompanies()

        onMounted(getCompanies)

        return {
            companies
        }
    }
}
</script>
