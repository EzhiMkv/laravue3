<template>
    <h2 style="margin-bottom: 20px;">Редактировать компанию</h2>
    <div style="color:red;" v-if="errors !== ''">{{errors}}</div>
    <el-form
        label-position="left"
        label-width="100px"
        :model="company"
    >
        <el-form-item label="Имя">
            <el-input v-model="company.name" />
        </el-form-item>
        <el-form-item label="Email">
            <el-input v-model="company.email" />
        </el-form-item>
        <el-form-item label="Адрес">
            <el-input v-model="company.address" />
        </el-form-item>
        <el-form-item label="Website">
            <el-input v-model="company.website" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="saveCompany">Сохранить</el-button>
            <el-button><router-link :to="{name: 'companies.index'}">Отмена</router-link></el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import {onMounted} from "vue";
import useCompanies from "../../composables/companies";

export default {
    name: "CompaniesEdit",
    props:{
        id:{
            required: true,
            type: String,
        }
    },
    setup(props){


        const {errors, company, getCompany, updateCompany} = useCompanies()

        onMounted(getCompany(props.id))

        const saveCompany = async () => {
            await updateCompany(props.id);
        }

        return {
            company,
            errors,
            getCompany,
            saveCompany
        }
    }
}
</script>
