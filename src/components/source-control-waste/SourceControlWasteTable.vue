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
        <router-link to="/new-source-control-waste">
          <button type="button" class="btn btn-outline-primary btn-sm mr-2">
            + Новый лимит отходов
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
          <router-link to="/edit-source-control-waste">
            <button class="btn-success btn-small btn mr-2">
              <i class="material-icons">open_in_new</i>
            </button>
          </router-link>
          <router-link to="/show-source-control-waste">
            <button class="btn-info btn-small btn mr-2">
              <i class="material-icons">visibility</i>
            </button>
          </router-link>
          <button class="btn-danger btn-small btn mr-2">
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
  name: "SourceControlWasteTable",
  data(){
    return{
      columns: [
        {
          label: 'Наименование места хранения и захоронения отходов (расположение)',
          field: 'name',
        },
        {
          label: 'Виды отходов',
          field: 'wasteName',
        },
        {
          label: 'Норматив эмиссии (тонн в год)',
          field: 'limit',
        },
        {
          label: 'Действия',
          field: 'action',
          sortable: false,
        },
      ],
      rows: [
  //       {
  //   wasteName: "Золошлаки",
  //   wasteHazardLevel: "15"
  // },
  // {
  //   wasteName: "Вскрышные породы",
  //   wasteHazardLevel: "19"
  // },
  // {
  //   wasteName: "Хвосты сульфидной флотации",
  //   wasteHazardLevel: "935"
  // },
  // {
  //   wasteName: "Углеродный продукт",
  //   wasteHazardLevel: "6"
  // },
  // {
  //   wasteName: "Вмещающая порода",
  //   wasteHazardLevel: "9"
  // },

        {
          id:1,
          name: 'Внешний отвал',
          wasteName: 'Золошлаки',
          state: '10.0',
          index: 'AC030',
          limit: '120',
          limitkzt: '15000',
        },
        {
          id:2,
          name: 'Внешний отвал',
          wasteName: 'Вскрышные породы',
          state: 'Твердые',
          index: 'AA170',
          limit: '100',
          limitkzt: '50000',
        },
        {
          id:3,
          name: 'Внешний отвал',
          wasteName: 'Хвосты сульфидной флотации',
          state: 'Пастообразные',
          index: 'AE030',
          limit: '80',
          limitkzt: '25000',
        },
        {
          id:4,
          name: 'Внешний отвал',
          wasteName: 'Углеродный продукт',
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

<style scoped>

</style>
