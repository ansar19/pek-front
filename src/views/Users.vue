<template>
  <div class="main-content-container container-fluid px-4">
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle"> Пользователи</span>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="card card-small mb-4">
          <div class="card-body">
            <UsersTable />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UsersTable from '@/components/user/UsersTable';

export default {
  data() {
    return {};
  },
  components: {
    UsersTable,
  },
};
</script>

<style scoped>
</style>
