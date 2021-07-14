<template>
  <div class="meta-table">
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
        <router-link to="/new-operational-monitoring">
          <button type="button" class="btn btn-outline-primary btn-sm mr-2">
            + Добавить
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
          <router-link to="/edit-operational-monitoring">
            <button class="btn-success btn-sm btn mr-2">
              <i class="material-icons">open_in_new</i>
            </button>
          </router-link>
          <router-link to="/show-operational-monitoring">
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
  name: "WastePasportTable",
  data(){
    return{
      columns: [
        {
          label: 'Наименование источников воздействия (контрольные точки)',
          field: 'name',
          width: '40%',
        },
        {
          label: 'Наименование загрязняющих веществ',
          field: 'code',
          width: '30%',
        },
        {
          label: 'Установленный норматив (мг/дм3; тонн в год)',
          field: 'state',
          tdClass: 'text-right',
          width: '15%',
        },
        {
          label: 'Действия',
          field: 'action',
          sortable: false,
          width: '15%',
        },
      ],
      rows: [
        {
          id:1,
          name: 'выпуск ВП 10 (х/б сточные воды до очистных сооружений)',
          code: 'Температура',
          state: '10.0',
          index: 'AC030',
          limit: '120',
          limitkzt: '15000',
        },
        {
          id:2,
          name: 'выпуск ВП 10 (х/б сточные воды до очистных сооружений)',
          code: 'Запах',
          state: 'Твердые',
          index: 'AA170',
          limit: '100',
          limitkzt: '50000',
        },
        {
          id:3,
          name: 'выпуск ВП 10 (х/б сточные воды до очистных сооружений)',
          code: 'Цвет',
          state: 'Пастообразные',
          index: 'AE030',
          limit: '80',
          limitkzt: '25000',
        },
        {
          id:4,
          name: 'выпуск ВП 10 (х/б сточные воды до очистных сооружений)',
          code: 'Азот аммонийный',
          state: '2.050',
          index: 'AC030',
          limit: '150',
          limitkzt: '15000',
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
