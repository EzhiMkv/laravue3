<template>
    <h2 style="margin-bottom: 20px;">Добавить компанию</h2>
    <el-form
        label-position="left"
        label-width="100px"
        :model="form"
    >
        <el-form-item label="Имя">
            <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="Email">
            <el-input v-model="form.email" />
        </el-form-item>
        <el-form-item label="Адрес">
            <el-input v-model="form.address" />
        </el-form-item>
        <el-form-item label="Website">
            <el-input v-model="form.website" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="saveCompany">Добавить</el-button>
            <el-button><router-link :to="{name: 'companies.index'}">Отмена</router-link></el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import {reactive} from "vue";
import useCompanies from "../../composables/companies";

export default {
    name: "CompaniesCreate",
    setup(){
        const form = reactive({
            'name': '',
            'email': '',
            'address': '',
            'website': '',
        })

        const {errors, storeCompany} = useCompanies()

        const saveCompany = async () => {
            await storeCompany({...form});
        }

        return {
            form,
            errors,
            saveCompany
        }
    }
}
</script>
