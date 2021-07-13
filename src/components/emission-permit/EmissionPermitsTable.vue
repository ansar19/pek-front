<template>
  <div class="meta-table">

    <h5 id="z90"> Разрешения на эмиссии</h5>

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
        <router-link to="/new-emission-permit">
          <button type="button" class="btn btn-outline-primary btn-sm mr-2">
            + Разрешение
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
          <router-link to="/edit-emission-permit">
            <button class="btn-success btn-sm btn mr-2">
              <i class="material-icons">open_in_new</i>
            </button>
          </router-link>
          <router-link to="/show-emission-permit">
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
  name: "emission-permits-table",
  data(){
    return{
      columns: [
        {
          label: 'Номер раздрешения на эмиссии',
          field: 'emissionPermitNumber',
          width: '20%',
          tdClass: 'align-middle',
        },
        {
          label: 'Наименование раздрешения на эмиссии',
          field: 'emissionPermitName',
          tdClass: 'align-middle',
          width: '50%',
        },
        {
          label: 'Дата выдачи разрешения на эмиссию',
          field: 'emissionPermitStartDate',
          tdClass: 'text-center align-middle',
          width: '5%',
        },
        {
          label: 'Дата истечения разрешения на эмиссию',
          field: 'emissionPermitDueDate',
          tdClass: 'text-center align-middle',
          width: '5%',
        },
        {
          label: 'Действия',
          field: 'action',
          tdClass: 'align-middle',
          sortable: false,
          width: '20%',
        },
      ],
      rows: [
        {
          id:1,
          emissionPermitName: 'Строительство здания Общежития No5 на 96 мест Вахтового поселка',
          emissionPermitNumber: '№: KZ28VDD00145762',
          emissionPermitStartDate: '2021-01-01',
          emissionPermitDueDate: '2021-12-31',
        },
        {
          id:2,
          emissionPermitName: 'Граница СЗЗ предприятия №1',
          emissionPermitNumber: '0.2',
          emissionPermitStartDate: '2021-01-01',
          emissionPermitDueDate: '2021-12-31',
        },
        {
          id:3,
          emissionPermitName: 'Граница СЗЗ предприятия №1',
          emissionPermitNumber: '0.4',
          emissionPermitStartDate: '2021-01-01',
          emissionPermitDueDate: '2021-12-31',
        },
        {
          id:4,
          emissionPermitName: 'Граница СЗЗ предприятия №2',
          emissionPermitNumber: '0.5',
          emissionPermitStartDate: '2021-01-01',
          emissionPermitDueDate: '2021-12-31',
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
