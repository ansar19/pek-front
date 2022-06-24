<template>
  <div class="meta-table">
    <spinner
      v-if="loading || loadingCreate || loadingRemove || loadingUpdate"
    />
    <div v-if="error">{{ error.message }}</div>
    <div v-if="errorCreate">{{ errorCreate.message }}</div>
    <div v-if="errorRemove">{{ errorRemove.message }}</div>
    <div v-if="errorUpdate">{{ errorUpdate.message }}</div>
    <vue-good-table
      v-else-if="rows"
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
        <button v-if="create" type="button" class="btn btn-outline-primary btn-sm mr-2" @click.prevent="create">
          + Добавить
        </button>
        <!-- download doc -->

        <button
          v-if="exportDoc"
          class="btn btn-outline-primary btn-sm mr-2"
          @click.prevent.prevent="exportDoc"
        >
          <i class="material-icons">cloud_download</i>
        </button>

        <!-- END download doc -->
      </div>
      <template slot="table-row" slot-scope="props">
        <span v-if="props.column.field == 'action'">
          <button
            v-if="update"
            class="btn-primary btn-small btn mr-2"
            @click.prevent="update(props.row.id)"
          >
            <i class="material-icons">open_in_new</i>
          </button>

          <button
            v-if="read"
            class="btn-info btn-small btn mr-2"
            @click.prevent="read(props.row.id)"
          >
            <i class="material-icons">visibility</i>
          </button>
          <button
            v-if="remove"
            class="btn-danger btn-small btn mr-2"
            @click.prevent="remove(props.row)"
          >
            <i class="material-icons">delete</i>
          </button>
        </span>
      </template>
    </vue-good-table>
  </div>
</template>

<script>
import "vue-good-table/dist/vue-good-table.css";
import { VueGoodTable } from "vue-good-table";
import "@/assets/scss/meta-table.scss";

export default {
  name: "CrudTable",
  props: {
    columns: {
      type: Array,
      required: true,
    },
    rows: {
      type: Array,
      required: true,
    },
    loading: {
      type: Boolean,
      required: false,
    },
    error: {
      type: Object,
      required: false,
    },
    create: {
      type: Function,
      required: false,
    },
    read: {
      type: Function,
      required: false,
    },
    update: {
      type: Function,
      required: false,
    },
    remove: {
      type: Function,
      required: false,
    },
    loadingCreate: {
      type: Boolean,
      required: false,
    },
    errorCreate: {
      type: Object,
      required: false,
    },
    loadingUpdate: {
      type: Boolean,
      required: false,
    },
    errorUpdate: {
      type: Object,
      required: false,
    },
    loadingRemove: {
      type: Boolean,
      required: false,
    },
    errorRemove: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      columns: [
        {
          label: "Наименование места утилизации",
          field: "name",
        },
        {
          label: "Контакты",
          field: "contacts",
        },
        {
          label: "Действия",
          field: "action",
          sortable: false,
        },
      ],
      paginationOptions: {
        enabled: true,
        mode: "pages",
        perPage: 10,
        position: "bottom",
        perPageDropdown: [10, 50, 100],
        dropdownAllowAll: false,
        setCurrentPage: 1,
        nextLabel: "вперед",
        prevLabel: "назад",
        rowsPerPageLabel: "Строк на странице",
        ofLabel: "/",
        pageLabel: "стр.", // for 'pages' mode
        allLabel: "Все",
      },
    };
  },
  components: {
    VueGoodTable,
  },
};
</script>

</template>
