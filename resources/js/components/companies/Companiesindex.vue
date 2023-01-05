<template>
    <el-row>
        <el-col :span="6" :offset="18">
            <el-button
                type="primary"
                style="float: right;"
            ><router-link :to="{name: 'companies.create'}">Добавить компанию</router-link></el-button>

        </el-col>
    </el-row>
    <el-table :data="companies" style="width: 100%">
        <el-table-column prop="name" label="Имя" />
        <el-table-column prop="email" label="Email" />
        <el-table-column prop="address" label="Адрес" />
        <el-table-column prop="website" label="Website" />
        <el-table-column prop="website" label="Действия" >
            <template #default="scope">
                <el-button size="small"><router-link :to="{name: 'companies.edit', params: {id: scope.row.id}}">Редактировать</router-link></el-button>
                <el-button
                    size="small"
                    type="danger"
                    @click="deleteCompany(scope.row.id)"
                >Удалить</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
import useCompanies from "../../composables/companies";
import {onMounted} from "vue";
export default {
    name: "Companiesindex",
    setup(){
        const {companies, getCompanies, destroyCompany} = useCompanies()

        onMounted(getCompanies)

        const deleteCompany = async (id) => {
            if (!window.confirm('Вы уверены?')){
                return
            }

            await destroyCompany(id);
            await getCompanies();
        }

        return {
            companies,
            deleteCompany
        }
    }
}
</script>
