<template>
  <d-container fluid class="main-content-container px-4 pb-4">
    <d-row no-gutters class="page-header py-4">
      <d-col lg="12" md="12">
        <d-card class="card-small">
          
          <d-card-header class="border-bottom">
            <h6 class="m-0">Новый пользователь</h6>
          </d-card-header>
          <d-card-body>
            <!-- Form -->
            <div class="row">
              <div class="col-sm-12 col-md-4 col-lg-4">
                <div class="form-group">
                  <label for="userSurename">Фамилия</label>
                  <input name="userSurename" class="mb-2 mr-sm-2 mb-sm-0 form-control" v-model="surename"
                    placeholder="Введите Фамилию">
                </div>
              </div>
              <div class="col-sm-12 col-md-4 col-lg-4">
                <label>Имя:</label>
                <input class="mb-3 form-control" type="text" id="user_name" v-model="firstname"
                  placeholder="Введите Имя пользователя" />
              </div>
              <div class="col-sm-12 col-md-4 col-lg-4">
                <label>Отчество:</label>
                <input class="mb-3 form-control" type="text" id="user_patronymic" v-model="patronymic"
                  name="user_patronymic" placeholder="Введите Отчество пользователя">
              </div>
            </div>

            <div class="row">
              <div class="col-sm-12 col-md-6 col-lg-8">
                <label>Должность:</label>
                <input class="mb-3 form-control" type="text" v-model="position" placeholder="Введите должность" />
              </div>
              <div class="col-sm-12 col-md-6 col-lg-4">
                <div class="form-group">
                  <label>Подразделение:</label>
                  <input class="mb-3 form-control" type="text" v-model="department"
                    placeholder="Введите Подразделение" />
                </div>
              </div>
            </div>
          <!-- END Form -->
          </d-card-body>

          <d-card-footer class="border-top">
            <div class="d-flex">
              <router-link to="/users">Отменить</router-link>
              <button class="btn btn-success ml-auto" type="submit">
                Сохранить
              </button>
            </div>
          </d-card-footer>
        </d-card>
      </d-col>
    </d-row>
  </d-container>
</template>

<script>
export default {
  data() {
    return {
      firstname: '',
      surename: '',
      patronymic: '',
      position: '',
      department: ''
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
