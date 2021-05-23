<template>
  <div>
    <vue-good-table :columns="columns" :rows="records" :search-options="{ enabled: true, placeholder: 'Введите текст для поиска' }"
                    :pagination-options="paginationOptions"
                    >
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
import { VueGoodTable } from 'vue-good-table';
export default {
  data() {
    return {

      columns: [
        {
          label: 'Наименование лаборатории',
          field: 'laboratoryName',
        },
        {
          label: 'Дата мониторинга',
          field: 'monitoringDate',
          type: "date",
          dateInputFormat: "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
          dateOutputFormat: "dd-MM-yyyy",
        },
        // {
        //   label: 'Название',
        //   field: 'categoryName',
        // },
        // {
        //   label: 'Уровень опасности',
        //   field: 'wasteColor'
        // },
        // {
        //   label: 'Вид отхода',
        //   field: 'wasteType'
        // },
        // {
        //   label: 'Место вывоза',
        //   field: 'siteName',
        // },
        // {
        //   label: 'Название перевозчика',
        //   field: 'transporterName',
        // },
        // {
        //   label: 'Название места утилизации',
        //   field: 'utilizatorName',
        // },
        // {
        //   label: 'РОП?',
        //   field: 'type',
        // },
        // {
        //   label: 'Тип',
        //   field: 'typeText',

        // },
        {
          label: 'Действия',
          field: 'action',
        }
      ],
      records: [
         {
           "recordId": "-M1uZcMNr6MT_ODRykAc",
          "laboratoryName" : "Аналитическая лаборатория ТОО «Лаборатория Атмосфера»",
          "categoryId" : "-M1pyJIRblItfvuQVplG",
          "date" : "2020-01-08T14:35:29.723Z",
          "categoryName" : "Твердые бытовые (коммунальные) отходы",
          "wasteColor" : "Янтарный",
           "wasteType" : "нефтешламы",
           "siteName" : "Баутино",
           "monitoringDate" : "2020-01-10T18:00:00.000Z",
          "transporterName" : "ТОО \"Перевозчик ТБО\"",
          "type" : "",
           "typeText" : "Вывезено",
          "utilizatorName" : "ТОО \"Котельная №2\"",
          "utilizatorId" : "-M1uDaVMTiI6nEGcPAl7"
        },
        {
          "recordId" : "-M1uxAxnQFODjekR0PLy",
          "laboratoryName" : "Аналитическая лаборатория ТОО «Лаборатория Атмосфера»",
          "categoryId" : "-M1jfloeUXksbH8T8x9q",
          "date" : "2020-02-08T16:22:47.013Z",
          "categoryName" : "Отходы лакокрасочных материалов",
          "wasteColor" : "Зеленый",
          "wasteType" : "прочие опасные отходы зеленого уровня",
          "siteName" : "Карабатан",
          "monitoringDate" : "2020-02-10T18:00:00.000Z",
          "transporterName" : "ТОО \"Перевозчик опасных отходов\"",
          "type" : "",
          "typeText" : "Вывезено",
          "utilizatorName" : "ТОО \"Цех переработки пластмасс\"",
          "utilizatorId" : "-M1uDnMsWSs-m-V6zajm"
        },
        {
          "recordId": "-M1uxcONNf46t0SqHQaq",
          "laboratoryName" : "Аналитическая лаборатория ТОО «Лаборатория Атмосфера»",
          "categoryId" : "-M1jWBNWLIdx3aC7HLmC",
          "date" : "2020-03-08T16:24:43.461Z",
          "categoryName" : "Отработанное масло",
          "wasteColor" : "Не применимо",
          "wasteType" : "отходы лаков и красок",
          "siteName" : "База Костанай",
          "monitoringDate" : "2020-03-10T18:00:00.000Z",
          "transporterName" : "ТОО \"Нефтетранс\"",
          "type" : "",
          "typeText" : "Вывезено",
          "utilizatorName" : "ГКП \"Полигон ТБО\"",
          "utilizatorId" : "-M1uxNO0XFoPIg1mmrGS"
        },
        {
          "recordId": "-M1uZcMNr6MT_ODRykAc",
          "laboratoryName" : "Аналитическая лаборатория ТОО «Лаборатория Атмосфера»",
          "categoryId" : "-M1pyJIRblItfvuQVplG",
          "date" : "2020-04-08T14:35:29.723Z",
          "categoryName" : "Твердые бытовые (коммунальные) отходы",
          "wasteColor" : "Янтарный",
          "wasteType" : "нефтешламы",
          "siteName" : "Баутино",
          "monitoringDate" : "2020-04-10T18:00:00.000Z",
          "transporterName" : "ТОО \"Перевозчик ТБО\"",
          "type" : "",
          "typeText" : "Вывезено",
          "utilizatorName" : "ТОО \"Котельная №2\"",
          "utilizatorId" : "-M1uDaVMTiI6nEGcPAl7"
        },
        {
          "recordId" : "-M1uxAxnQFODjekR0PLy",
          "laboratoryName" : "Аналитическая лаборатория ТОО «Лаборатория Атмосфера»",
          "categoryId" : "-M1jfloeUXksbH8T8x9q",
          "date" : "2020-05-08T16:22:47.013Z",
          "categoryName" : "Отходы лакокрасочных материалов",
          "wasteColor" : "Зеленый",
          "wasteType" : "прочие опасные отходы зеленого уровня",
          "siteName" : "Карабатан",
          "monitoringDate" : "2020-05-10T18:00:00.000Z",
          "transporterName" : "ТОО \"Перевозчик опасных отходов\"",
          "type" : "",
          "typeText" : "Вывезено",
          "utilizatorName" : "ТОО \"Цех переработки пластмасс\"",
          "utilizatorId" : "-M1uDnMsWSs-m-V6zajm"
        },
        {
          "recordId": "-M1uxcONNf46t0SqHQaq",
          "laboratoryName" : "Аналитическая лаборатория ТОО «Лаборатория Атмосфера»",
          "categoryId" : "-M1jWBNWLIdx3aC7HLmC",
          "date" : "2020-06-08T16:24:43.461Z",
          "categoryName" : "Отработанное масло",
          "wasteColor" : "Не применимо",
          "wasteType" : "отходы лаков и красок",
          "siteName" : "База Костанай",
          "monitoringDate" : "2020-06-10T18:00:00.000Z",
          "transporterName" : "ТОО \"Нефтетранс\"",
          "type" : "",
          "typeText" : "Вывезено",
          "utilizatorName" : "ГКП \"Полигон ТБО\"",
          "utilizatorId" : "-M1uxNO0XFoPIg1mmrGS"
        },
        {
          "recordId": "-M1uZcMNr6MT_ODRykAc",
          "laboratoryName" : "Аналитическая лаборатория ТОО «Лаборатория Атмосфера»",
          "categoryId" : "-M1pyJIRblItfvuQVplG",
          "date" : "2020-07-08T14:35:29.723Z",
          "categoryName" : "Твердые бытовые (коммунальные) отходы",
          "wasteColor" : "Янтарный",
          "wasteType" : "нефтешламы",
          "siteName" : "Баутино",
          "monitoringDate" : "2020-07-10T18:00:00.000Z",
          "transporterName" : "ТОО \"Перевозчик ТБО\"",
          "type" : "",
          "typeText" : "Вывезено",
          "utilizatorName" : "ТОО \"Котельная №2\"",
          "utilizatorId" : "-M1uDaVMTiI6nEGcPAl7"
        },
        {
          "recordId" : "-M1uxAxnQFODjekR0PLy",
          "laboratoryName" : "Аналитическая лаборатория ТОО «Лаборатория Атмосфера»",
          "categoryId" : "-M1jfloeUXksbH8T8x9q",
          "date" : "2020-08-08T16:22:47.013Z",
          "categoryName" : "Отходы лакокрасочных материалов",
          "wasteColor" : "Зеленый",
          "wasteType" : "прочие опасные отходы зеленого уровня",
          "siteName" : "Карабатан",
          "monitoringDate" : "2020-08-10T18:00:00.000Z",
          "transporterName" : "ТОО \"Перевозчик опасных отходов\"",
          "type" : "",
          "typeText" : "Вывезено",
          "utilizatorName" : "ТОО \"Цех переработки пластмасс\"",
          "utilizatorId" : "-M1uDnMsWSs-m-V6zajm"
        },
        {
          "recordId": "-M1uxcONNf46t0SqHQaq",
          "laboratoryName" : "Аналитическая лаборатория ТОО «Лаборатория Атмосфера»",
          "categoryId" : "-M1jWBNWLIdx3aC7HLmC",
          "date" : "2020-09-08T16:24:43.461Z",
          "categoryName" : "Отработанное масло",
          "wasteColor" : "Не применимо",
          "wasteType" : "отходы лаков и красок",
          "siteName" : "База Костанай",
          "monitoringDate" : "2020-09-10T18:00:00.000Z",
          "transporterName" : "ТОО \"Нефтетранс\"",
          "type" : "",
          "typeText" : "Вывезено",
          "utilizatorName" : "ГКП \"Полигон ТБО\"",
          "utilizatorId" : "-M1uxNO0XFoPIg1mmrGS"
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
}
</script>
