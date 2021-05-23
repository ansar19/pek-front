<template>
  <div class="meta-table">

    <h5 id="z999"> 4.2. Водные ресурсы</h5>

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
        <router-link to="/new-water-impact-monitoring">
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
          <router-link to="/edit-water-impact-monitoring">
            <button class="btn-success btn-sm btn mr-2">
              <i class="material-icons">open_in_new</i>
            </button>
          </router-link>
          <router-link to="/show-water-impact-monitoring">
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
  name: "water-impact-monitoring-table",
  data(){
    return{
      columns: [
        {
          label: 'Точки отбора проб',
          field: 'waterImpactSamplePoint',
          width: '25%',
          tdClass: 'align-middle',
        },
        {
          label: 'Наименование загрязняющих веществ',
          field: 'waterPolName',
          tdClass: 'align-middle',
          width: '50%',
        },
        {
          label: 'Норма ПДК (макс. разовых, мг/м3)',
          field: 'waterPollutionLimit',
          tdClass: 'text-right',
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
          waterImpactSamplePoint: 'Запруда на ручье Алайгыр ГП5',
          waterPolName: 'Водородный показатель (рН)',
          waterPollutionLimit: '0.6',
        },
        {
          id:2,
          waterImpactSamplePoint: 'Запруда на ручье Алайгыр ГП5',
          waterPolName: 'Температура',
          waterPollutionLimit: '0.2',
        },
        {
          id:3,
          waterImpactSamplePoint: 'Запруда на ручье Алайгыр ГП5',
          waterPolName: 'Азот аммонийный',
          waterPollutionLimit: '0.4',
        },
        {
          id:4,
          waterImpactSamplePoint: 'Граница СЗЗ предприятия №2',
          waterPolName: 'Биологическое потребление кислорода (БПК п)',
          waterPollutionLimit: '0.5',
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
