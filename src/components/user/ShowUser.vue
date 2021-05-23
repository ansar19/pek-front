<template>
  <d-container fluid class="main-content-container px-4 pb-4">
    <d-row no-gutters class="page-header py-4">
      <d-col lg="12" md="12">
        <div class="card card-small mb-4 pt-3">
          <div class="card-header border-bottom text-center">
            <div class="mb-3 mx-auto"></div>
            <!-- vertical table head example -->
            <table
              v-for="(u, index) in users"
              :key="index"
              class="table table-bordered"
              style="width: 100%"
            >
              <tr>
                <th class="text-left">Имя пользователя:</th>
                <td>{{ u.userName }}</td>
              </tr>
              <tr>
                <th class="text-left">Зарегистрирован:</th>
                <td>{{ u.createdAt }}</td>
              </tr>
            </table>
          </div>
          <div class="card-footer">
            <div class="col text-left view-report">
              <a @click="goBack()"> &larr; Вернуться назад </a>
            </div>
          </div>
        </div>
      </d-col>
    </d-row>
  </d-container>
</template>

<script>
export default {
  name: 'show-user',
  data() {
    return {
      users: [
        {
          userName: 'Иван Иванов',
          createdAt: '2011-01-01',
        },
      ],
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
