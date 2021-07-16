<template>
  <div class="meta-table">

    <h3 id="z90"> 3.4. Мониторинг уровня загрязнения земель</h3>

    <!-- <table class="table table-responsive">
    <tr>
      <th>
        <p align="center">
          Наименование источников воздействия (контрольные точки)</p>
      </th>
      <th>
        <p align="center">
          Наименование загрязняющих веществ</p>
      </th>
      <th>
        <p align="center">
          Установленный норматив (миллиграмм на килограмм)</p>
      </th>
      <th>
        <p align="center">
          Фактический результат мониторинга (миллиграмм на килограмм)</p>
      </th>
      <th>
        <p align="center">
          Соблюдение либо превышение нормативов предельно допустимых концентраций фоновая концентрация</p>
      </th>
      <th>
        <p align="center">
          Мероприятия по устранению нарушения</p>
      </th>
    </tr>
    <tr>
      <td><br>
      </td>
      <td><br>
      </td>
      <td><br>
      </td>
      <td><br>
      </td>
      <td><br>
      </td>
      <td><br>
      </td>
    </tr>
  </table> -->

    <vue-good-table :columns="columns" :rows="rows" styleClass="vgt-table condensed striped" :search-options="{
        enabled: true,
        placeholder: 'Введите текст для поиска',
      }" :pagination-options="paginationOptions">
      <div slot="table-actions">
        <router-link to="/new-soil-monitoring">
          <button type="button" class="btn btn-outline-primary btn-sm mr-2">
            + Новый лимит
          </button>
        </router-link>
        <!-- download doc -->

        <button class="btn btn-outline-primary btn-sm mr-2" @click.prevent="exportWord">
          <i class="material-icons">cloud_download</i>
        </button>

        <!-- END download doc -->
      </div>
      <template slot="table-row" slot-scope="props">
        <span v-if="props.column.field == 'action'">
          <router-link to="/edit-soil-monitoring">
            <button class="btn-success btn-sm btn mr-2">
              <i class="material-icons">open_in_new</i>
            </button>
          </router-link>
          <router-link to="/show-soil-monitoring">
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
  name: "soil-monitoring-table",
  data(){
    return{
      columns: [
        {
          label: 'Наименование источников воздействия (контрольные точки)',
          field: 'soilControlPointName',
          width: '25%',
        },
        {
          label: 'Наименование загрязняющих веществ',
          field: 'soilPollutantName',
          width: '50%',
        },
        {
          label: 'Установленный норматив (миллиграмм на килограмм)',
          field: 'soilLimit',
          width: '10%',
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
          soilControlPointName: 'Внешний отвал',
          soilPollutantName: 'Золошлаки',
          state: '10.0',
          index: 'AC030',
          soilLimit: '120',
          limitkzt: '15000',
        },
        {
          id:2,
          soilControlPointName: 'Внешний отвал',
          soilPollutantName: 'Вскрышные породы',
          state: 'Твердые',
          index: 'AA170',
          soilLimit: '100',
          limitkzt: '50000',
        },
        {
          id:3,
          soilControlPointName: 'Внешний отвал',
          soilPollutantName: 'Хвосты сульфидной флотации',
          state: 'Пастообразные',
          index: 'AE030',
          soilLimit: '80',
          limitkzt: '25000',
        },
        {
          id:4,
          soilControlPointName: 'Внешний отвал',
          soilPollutantName: 'Углеродный продукт',
          state: '2.050',
          index: 'AC030',
          soilLimit: '150',
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
