<template>
  <d-container fluid class="main-content-container px-4 pb-4">
    <d-row no-gutters class="page-header py-4">
      <d-col lg="12" md="12">
        <d-card class="card-small">
          <!-- Form Example -->
          <d-card-header class="border-bottom">
            <h6 class="m-0">Новый пользователь</h6>
          </d-card-header>
          <d-card-body>
            <d-list-group flush>
              <d-list-group-item class="p-3">
                <d-row>
                  <d-col>
                    <d-form>
                      <div class="form-group">
                        <label for="user-name">Имя пользователя: </label>
                        <d-input
                          id="user-name"
                          placeholder="Иван Иванов"
                          v-model="userName"
                        />
                      </div>
                      <div class="form-group">
                        <label for="created-at">Зарегистрирован: </label>
                        <d-input
                          id="created-at"
                          placeholder="2011-01-01"
                          v-model="createdAt"
                        />
                      </div>
                    </d-form>
                  </d-col>
                </d-row>
              </d-list-group-item>
            </d-list-group>
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
      userName: '',
      createdAt: '',
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
