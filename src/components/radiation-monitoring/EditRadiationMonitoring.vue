<template>
  <div class="main-content-container container-fluid px-4">
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">Редактировать лимит эмиссии</span>
      </div>
    </div>

    <div class="card card-small mb-4">
      <div class="card-header border-bottom">
        <h5>3.5. Радиационный мониторинг</h5>
      </div>
      <div class="card-body">
        <form @submit.prevent="submitHandler">

          <div class="from-group">
            <label for="name1">Наименование источников воздействия</label>
            <input id="name1" type="text" v-model="radiationControlPointName" class="form-control" />
          </div>

          <!-- Limit table -->
          <div class="table mt-2">
            <table class="meta-table table table-stripped table-bordered">
              <tr>
                <th style="width: 60%;">Наименование источников воздействия </th>
                <th style="width: 40%;">Установленный норматив (единица измерения в микрозивертах в час*)</th>
              </tr>
              <tr v-for="radiationControlPoint, index in radiationControlPoints" :key="index">
                <td data-label="Наименование источников воздействия">{{ radiationControlPointName }}</td>
                <td data-label="Установленный норматив (единица измерения в микрозивертах в час*)">
                  <input type="number" class="form-control" v-model.number="radiationControlPoint.radiationLimit" />
                </td>
              </tr>
            </table>
          </div>
        </form>
      </div>
      <div class="card-footer border-top mb">
        <button class="btn btn-primary waves-effect waves-light mb-4 mr-2" @click="goBack" type="submit">
          Назад
        </button>
        <button class="btn btn-success waves-effect waves-light mb-4" type="submit">
          Создать
          <i class="material-icons right">send</i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'edit-radiation-monitoring',
  data: () => ({
    radiationControlPoints: [{
          uid: 1,
          radiationControlPointName: "Граница СЗЗ предприятия №1",
          radiationLimit: 0.25
        }
      ],
    radiationControlPointName: "Граница СЗЗ предприятия №1",
  }),
  computed: { },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  }
}
</script>
