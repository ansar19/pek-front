<template>
  <div class="meta-table">
    <vue-good-table
      :columns="columns"
      :rows="rows"
      compactMode
      styleClass="vgt-table condensed"
      :search-options="{
        enabled: true,
        placeholder: 'Введите текст для поиска',
      }"
      :pagination-options="paginationOptions"
    >
      <div slot="table-actions">
        <router-link to="/new-user">
          <button type="button" class="btn btn-outline-primary btn-sm mr-2">
            + Новый пользователь
          </button>
        </router-link>

        <button class="btn btn-outline-primary btn-sm mr-2">
          <i class="fa fa-download"></i>
        </button>
      </div>
      <template slot="table-row" slot-scope="props">
        <span v-if="props.column.field == 'action'">
          <router-link to="/edit-user">
            <button class="btn btn-primary btn-sm mr-2">
              <i class="fa fa-edit"></i>
            </button>
          </router-link>
          <router-link to="/show-user">
            <button class="btn-info btn-sm btn mr-2">
              <i class="fa fa-eye"></i>
            </button>
          </router-link>
          <button class="btn btn-danger btn-sm mr-2">
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
  name: 'UsersTable',
  data() {
    return {
      columns: [
        {
          label: 'Имя',
          field: 'name',
          tdClass: 'text-center',
          thClass: 'text-center',
        },
        {
          label: 'Зарегистрировался',
          field: 'createdAt',
          tdClass: 'text-center',
          thClass: 'text-center',
          dateInputFormat: 'yyyy-MM-dd', // expects 2018-03-16
          dateOutputFormat: 'MMM do yyyy', // outputs Mar 16th 2018
        },
        {
          tdClass: 'text-center',
          thClass: 'text-center',
          label: 'Действия',
          field: 'action',
        },
      ],
      rows: [
        {
          id: 1,
          name: 'Иван Иванов',
          createdAt: '2011-10-22',
        },
        {
          id: 2,
          name: 'Андрей Богданчиков',
          createdAt: '2011-10-31',
        },
        {
          id: 3,
          name: 'Алексей Кавокин',
          createdAt: '2011-10-30',
        },
        {
          id: 4,
          name: 'Кристофер Мур',
          createdAt: '2011-10-11',
        },
        {
          id: 5,
          name: 'Александр Иванов',
          createdAt: '2011-10-21',
        },
        {
          id: 6,
          name: 'Константин Латута',
          createdAt: '2011-10-31',
        },
        {
          id: 7,
          name: 'Нурсултан Назарбаев',
          createdAt: '2013-09-21',
        },
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
    };
  },
  components: {
    VueGoodTable,
  },
};
</script>

<style scoped>
</style>
