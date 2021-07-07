<template>
  <div class="meta-table">
    <h5 > 3.5. Радиационный мониторинг</h5>
    <vue-good-table
      :columns="columns"
      :rows="rows"
      styleClass="vgt-table condensed striped"
      :search-options="{
        enabled: true,
        placeholder: 'Введите текст для поиска',
      }"
      :pagination-options="paginationOptions"
    >
      <div slot="table-actions">
        <router-link to="/new-radiation-monitoring">
          <button type="button" class="btn btn-outline-primary btn-sm mr-2">
            + Новый лимит
          </button>
        </router-link>
        <!-- download doc -->

        <button
          class="btn btn-outline-primary btn-sm mr-2"
          @click.prevent="exportWord"
        >
          <i class="material-icons">cloud_download</i>
        </button>

        <!-- END download doc -->
      </div>
      <template slot="table-row" slot-scope="props">
        <span v-if="props.column.field == 'action'">
          <router-link to="/edit-radiation-monitoring">
            <button class="btn-success btn-sm btn mr-2">
              <i class="material-icons">open_in_new</i>
            </button>
          </router-link>
          <router-link to="/show-radiation-monitoring">
            <button class="btn-info btn-sm btn mr-2">
              <i class="material-icons">visibility</i>
            </button>
          </router-link>
          <button class="btn-danger btn-sm btn mr-2">
            <i class="material-icons">delete</i>
          </button>
        </span>
      </template>
    </vue-good-table>
  </div>
</template>


<script>
import 'vue-good-table/dist/vue-good-table.css';
import { VueGoodTable } from 'vue-good-table';
import '@/assets/scss/meta-table.scss';

export default {
  name: "radiation-monitoring-table",
  data(){
    return{
      columns: [
        {
          label: 'Наименование источников воздействия',
          field: 'radiationControlPointName',
          width: '40%',
        },
        {
          label: 'Установленный норматив (единица измерения в микрозивертах в час*)',
          field: 'radiationLimit',
          tdClass: 'text-right',
          width: '40%',
        },
        {
          label: 'Действия',
          field: 'action',
          width: '20%',
          tdClass: 'text-center',
          sortable: false,
        },
      ],
      rows: [
        {
          id:1,
          radiationControlPointName: 'Граница СЗЗ предприятия №1',
          radiationLimit: '0.6',
        },
        {
          id:2,
          radiationControlPointName: 'Граница СЗЗ предприятия №2',
          radiationLimit: '0.6',
        },
        {
          id:3,
          radiationControlPointName: 'Граница СЗЗ предприятия №3',
          radiationLimit: '0.6',
        },
        {
          id:4,
          radiationControlPointName: 'Граница СЗЗ предприятия №4',
          radiationLimit: '0.6',
        }
      ],
      paginationOptions: {
        enabled: true,
        mode: 'pages',
        perPage: 5,
        position: 'bottom',
        perPageDropdown: [5, 10, 20],
        dropdownAllowAll: false,
        setCurrentPage: 1,
        nextLabel: '>',
        prevLabel: '<',
        rowsPerPageLabel: 'Строк на странице',
        ofLabel: '/',
        pageLabel: 'стр.', // for 'pages' mode
        allLabel: 'Все',
      },
    }
  },
  components:{
    VueGoodTable
  }
}
</script>

<style scoped>

</style>
