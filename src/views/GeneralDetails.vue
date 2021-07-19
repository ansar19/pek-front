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
            <GeneralDetailsTable />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GeneralDetailsTable from '@/components/generaldetails/GeneralDetailsTable';

export default {
  data() {
    return {};
  },
  components: {
    GeneralDetailsTable,
  },
};
</script>
