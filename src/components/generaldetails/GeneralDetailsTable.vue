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
        <router-link to="/new-general-detail">
          <button type="button" class="btn btn-outline-primary btn-sm mr-2">
            + Новый объект
          </button>
        </router-link>

        <button class="btn btn-outline-primary btn-sm mr-2">
          <i class="fa fa-download"></i>
        </button>
      </div>
      <template slot="table-row" slot-scope="props">
        <span v-if="props.column.field == 'action'">
          <router-link to="/edit-general-detail">
            <button class="btn-success btn-sm btn mr-2">
              <i class="fa fa-edit"></i>
            </button>
          </router-link>
          <router-link to="/show-general-detail">
            <button class="btn-info btn-sm btn mr-2">
              <i class="fa fa-eye"></i>
            </button>
          </router-link>
          <button class="btn-danger btn-sm btn mr-2">
            <i class="fa fa-trash"></i>
          </button>
        </span>
      </template>
    </vue-good-table>
  </div>
</template>

<script>
import 'vue-good-table/dist/vue-good-table.css';
import { VueGoodTable } from 'vue-good-table';

export default {
  name: 'GeneralDetailsTable',
  data() {
    return {
      columns: [
        {
          label: 'Наименование производственного объекта (месторасположение)',
          field: 'siteName',
          width: '20%',
          tdClass: 'align-middle',
        },
        {
          label: 'Краткая характеристика производственного процесса',
          field: 'siteComments',
          width: '60%',
          tdClass: 'align-middle',
        },
        {
          label: 'Действия',
          field: 'action',
          width: '20%',
          tdClass: 'align-middle text-center',
        },
      ],
      rows: [
        {
          id: 1,
          siteName: 'ТОО «Бакырчикского горнодобывающее предприятие» (пос.Ауэзов, в 32 км к западу от асфальтированной трассы «Алматы - Усть-Каменогорск»)',
          siteComments: `Предприятие ТОО «Бакырчикское горнодобывающее предприятие» относится к горнодобывающим и металлургическим производствам. Исходным сырьем является золотосодержащая руда месторождения «Бакырчик», добываемая на собственном руднике.
          Основной вид деятельности: добыча и переработка золотосодержащих руд.
          Предприятие имеет в своем составе следующие объекты:
            ─участок перемещения существующих отвалов вскрышных пород;
          ─промышленная разработка месторождения открытым способом;
          ─АБК карьера;
          ─вахтовый поселок;
          ─старая промплощадка основного промлощадка;
          ─установка для сжигания отходов« Костер - 1 МА»;
          ─водозабор подземных вод Кызыл - Ту;
          ─обогатительная фабрика;─котельная угольная предприятия;─хвостохранилище для складирования хвостов сульфидной флотации и углеродного продукта обогатительной фабрики;─бетонно - растворный узел;─дробильно - сортировочный комплекс по изготовлению щебня;─АЗС ТОО« БГП»;─общежитие пос.Ауэзов;─участок« Глубокий лог»(отвал вскрышных пород);─участок захоронения мышьяксодержащего шлама;─железнодорожный тупик со складом ГСМ на станции Шалабай.
          `,
        }, ],
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
    };
  },
  components: {
    VueGoodTable,
  },
};
</script>

<style scoped>
</style>
