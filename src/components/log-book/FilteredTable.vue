<template>
  <div>
    <vue-good-table :columns="columns" :rows="records"
      :search-options="{ enabled: true, placeholder: 'Введите текст для поиска' }"
      :pagination-options="paginationOptions">
      <template slot="table-row" slot-scope="props">
        <span v-if="props.column.field == 'action'">
          <!-- <button class="btn-success btn-sm btn mr-2" @click="$router.push('/detail/' + props.row.id)">
            <i class="material-icons">open_in_new</i>
          </button> -->

          <button class="btn-success btn-sm btn mr-2" @click="$router.push('/edit-record/')">
            <i class="material-icons">open_in_new</i>
          </button>

          <router-link to="/show-record">
            <button class="btn-info btn-sm btn mr-2">
              <i class="material-icons">visibility</i>
            </button>
          </router-link>
        </span>
      </template>
    </vue-good-table>
  </div>
</template>

<script>
import 'vue-good-table/dist/vue-good-table.css'
import {
  VueGoodTable
} from 'vue-good-table';
export default {
  data() {
    return {
      columns: [{
          label: 'Отчетный месяц',
          field: 'reporting_month',
        },
        {
          label: 'Дата последнего обновления',
          field: 'last_update',
          type: "date",
          dateInputFormat: "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
          dateOutputFormat: "dd-MM-yyyy",
        },
        {
          label: 'Действия',
          field: 'action',
        }
      ],
      records: [{
          "recordId": "-M1uZcMNr6MT_ODRykAc",
          "reporting_month": "Январь",
          "last_update": "2020-01-10T18:00:00.000Z",
        },
        {
          "recordId": "-M1uxAxnQFODjekR0PLy",
          "reporting_month": "Февраль",
          "last_update": "2020-02-10T18:00:00.000Z",
        },
        {
          "recordId": "-M1uxcONNf46t0SqHQaq",
          "reporting_month": "Март",
          "last_update": "2020-03-10T18:00:00.000Z",
        },
        {
          "recordId": "-M1uZcMNr6MT_ODRykAc",
          "reporting_month": "Апрель",
          "last_update": "2020-04-10T18:00:00.000Z",
        },
        {
          "recordId": "-M1uxAxnQFODjekR0PLy",
          "reporting_month": "Май",
          "last_update": "2020-05-10T18:00:00.000Z",
        },
        {
          "recordId": "-M1uxcONNf46t0SqHQaq",
          "reporting_month": "Июнь",
          "last_update": "2020-06-10T18:00:00.000Z",
        },
        {
          "recordId": "-M1uZcMNr6MT_ODRykAc",
          "reporting_month": "Июль",
          "last_update": "2020-07-10T18:00:00.000Z",
        },
        {
          "recordId": "-M1uxAxnQFODjekR0PLy",
          "reporting_month": "Август",
          "last_update": "2020-08-10T18:00:00.000Z",
        },
        {
          "recordId": "-M1uxcONNf46t0SqHQaq",
          "reporting_month": "Сентябрь",
          "last_update": "2020-09-10T18:00:00.000Z",
        }
      ],
      paginationOptions: {
        enabled: true,
        mode: 'records',
        perPage: 5,
        position: 'bottom',
        dropdownAllowAll: true,
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
  components: {
    VueGoodTable,
  }
};
</script>
