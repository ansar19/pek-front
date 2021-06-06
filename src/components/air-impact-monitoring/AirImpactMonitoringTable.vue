<template>
  <div class="meta-table">

    <h5 id="z90"> 4.1. Атмосферный воздух </h5>

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
        <router-link to="/new-air-impact-monitoring">
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
          <router-link to="/edit-air-impact-monitoring">
            <button class="btn-success btn-sm btn mr-2">
              <i class="material-icons">open_in_new</i>
            </button>
          </router-link>
          <router-link to="/show-air-impact-monitoring">
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
  name: "air-impact-monitoring-table",
  data(){
    return{
      columns: [
        {
          label: 'Точки отбора проб',
          field: 'airImpactSamplePoint',
          width: '25%',
          tdClass: 'align-middle',
        },
        {
          label: 'Наименование загрязняющих веществ',
          field: 'polName',
          tdClass: 'align-middle',
          width: '50%',
        },
        {
          label: 'Норма ПДК (макс. разовых, мг/м3)',
          field: 'airPollutionLimit',
          tdClass: 'text-right align-middle',
          width: '10%',
        },
        {
          label: 'Действия',
          field: 'action',
          tdClass: 'align-middle',
          sortable: false,
          width: '15%',
        },
      ],
      rows: [
        {
          id:1,
          airImpactSamplePoint: 'Граница СЗЗ предприятия №1',
          airPollutionLimit: '0.6',
          polName: 'Железо (II, III) оксиды (диЖелезо триоксид, Железа оксид) /в пересчете на (274)'
        },
        {
          id:2,
          airImpactSamplePoint: 'Граница СЗЗ предприятия №1',
          airPollutionLimit: '0.2',
          polName: 'Марганец и его соединения /в пересчете на марганца (IV) оксид/ (327)'
        },
        {
          id:3,
          airImpactSamplePoint: 'Граница СЗЗ предприятия №1',
          airPollutionLimit: '0.4',
          polName: 'Взвешенные частицы (116)'
        },
        {
          id:4,
          airImpactSamplePoint: 'Граница СЗЗ предприятия №2',
          airPollutionLimit: '0.5',
          polName: 'Алканы С12-19 (Углеводороды предельные С12-19)'
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
