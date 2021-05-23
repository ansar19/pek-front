<template>
  <d-container fluid class="main-content-container px-4 pb-4">
    <d-row no-gutters class="page-header py-4">
      <d-col lg="12" md="12">
        <div class="card card-small mb-4 pt-3">
          <div class="card-header border-bottom text-center">
            <!-- Limit table -->
            <div class="table mt-2">
              <table class="meta-table table table-stripped table-bordered">
                <tr>
                  <th style="width: 60%;">Наименование источников воздействия</th>
                  <th style="width: 40%;">Установленный норматив (единица измерения в микрозивертах в час*)</th>
                </tr>
                <tr v-for="radiationControlPoint, index in radiationControlPoints" :key="index">
                  <td data-label="Наименование источников воздействия">{{ radiationControlPointName }}</td>
                  <td data-label="Установленный норматив (единица измерения в микрозивертах в час*)">
                    {{ radiationControlPoint.radiationLimit }}
                  </td>
                </tr>
              </table>
            </div>
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
  name: 'show-radiation-monitoring',
  data() {
    return {
      radiationControlPointName: "Граница СЗЗ предприятия №1",
      radiationControlPoints: [{
        uid: 1,
        radiationControlPointName: "Граница СЗЗ предприятия №1",
        radiationLimit: 0.6
      }],
    };
  },
  computed: {},
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
