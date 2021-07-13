<template>
  <d-container fluid class="main-content-container px-4 pb-4">
    <d-row no-gutters class="page-header py-4">
      <d-col lg="12" md="12">
        <d-card class="card-small">
          <!-- Form -->
          <d-card-header class="border-bottom">
            <h6 class="m-0">Новое разрешение на эмиссию</h6>
          </d-card-header>

          <div class="col-12">

            <form @submit.prevent="submitHandler">

              <div class="form-row mt-2">
                <div class="form-group col-md-6">
                  <label for="emission-permit-number">№ разрешения на эмиссии:</label>
                  <textarea rows="2" v-model="emissionPermitNumber" class="form-control"
                    name="emission-permit-number"></textarea>
                </div>
                <div class="form-group col-md-6">
                  <label for="emission-permit-name">Название разрешения на эмиссии:</label>
                  <textarea rows="2" v-model="emissionPermitName" class="form-control"
                    name="emission-permit-name"></textarea>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="emission-permit-issue-date">Дата выдачи разрешения на эмиссию:</label>
                  <input type="date" v-model="emissionPermitIssueDate" class="form-control"
                    name="emission-permit-issue-date">
                </div>
                <div class="form-group col-md-6">
                  <label for="emission-permit-due-date">Дата истечения разрешения на эмиссию:</label>
                  <input type="date" v-model="emissionPermitDueDate" class="form-control"
                    name="emission-permit-due-date">
                </div>
              </div>

            </form>
          </div>

          <div class="card-footer border-top mb">
            <button class="btn btn-success waves-effect waves-light mb-3" type="submit" @click.prevent="save">
              Создать
              <i class="material-icons right">send</i>
            </button>
          </div>
        </d-card>
      </d-col>
    </d-row>
  </d-container>
</template>

<script>
export default {
  name: 'new-emission-permit',
  data: () => ({
    emissionPermitName: "Строительство здания Общежития No5 на 96 мест Вахтового поселка",
    emissionPermitNumber: '№: KZ28VDD00145762',
    emissionPermitIssueDate: new Date(),
    emissionPermitDueDate: new Date(),
  }),
  methods: {
    save(event) {
      alert(JSON.stringify(this.$data))
    },
  }
};
</script>
