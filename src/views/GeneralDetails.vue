<template>
  <div class="main-content-container container-fluid px-4">
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle"> 1. Общие сведения</span>
      </div>
    </div>
    <!-- Default Light Table -->
    <div class="row">
      <div class="col">
        <div class="card card-small mb-4">
          <div class="card-body">
            <!-- <GeneralDetailsTable /> -->
            <CrudTable
              :rows="rows"
              :columns="columns"
              :loading="loading"
              :error="error"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import GeneralDetailsTable from "@/components/generaldetails/GeneralDetailsTable";
import CrudTable from "@/components/Base/CrudTable.vue";
import { useQuery, useResult } from "@vue/apollo-composable";
import gql from "graphql-tag";

export default {
  name: "GeneralDetails",
  setup() {
    const { result, loading, error } = useQuery(gql`
      query list {
        pek_facilities {
          id
          name
          description
        }
      }
    `);

    function truncate(text) {
      return text.substring(0, 5)
    }

    function trName(obj) {
      return truncate(obj.name)
    }

    function trDescription(obj) {
      return truncate(obj.description)
    }

    const rows = useResult(result, [], (data) => data.pek_facilities);

    const columns = [
      {
        label: "Наименование производственного объекта (месторасположение)",
        field: trName,
        width: "20%",
        tdClass: "align-middle",
      },
      {
        label: "Краткая характеристика производственного процесса",
        field: trDescription,
        width: "60%",
        tdClass: "align-middle",
      },
      {
        label: "Действия",
        field: "action",
        width: "20%",
        tdClass: "align-middle text-center",
      },
    ];

    return { rows, columns, loading, error };
  },
  components: {
    CrudTable,
    // GeneralDetailsTable,
  },
};
</script>
