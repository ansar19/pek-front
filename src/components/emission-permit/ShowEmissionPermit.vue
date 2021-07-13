<template>
  <d-container fluid class="main-content-container px-4 pb-4">
    <d-row no-gutters class="page-header py-4">
      <d-col lg="12" md="12">
        <div class="card card-small mb-4 pt-3">
          <div class="card-header border-bottom text-center">
            <table v-for="(em, index) in emissionPermits" :key="index" class="table table-bordered" style="width: 100%">
              <tr>
                <th class="text-left">Наименование аккредитованной испытательной лаборатории:</th>
                <td>{{ em.emissionPermitNumber }}</td>
              </tr>
              <tr>
                <th class="text-left">Номер аттестата аккредитации испытательной лаборатории:</th>
                <td>{{ em.emissionPermitName }}</td>
              </tr>
              <tr>
                <th class="text-left">Дата выдачи аттестата аккредитации:</th>
                <td>{{ em.emissionPermitIssueDate }}</td>
              </tr>
              <tr>
                <th class="text-left">Дата срока аттестата аккредитации:</th>
                <td>{{ em.emissionPermitDueDate }}</td>
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
  name: 'show-emission-permit',
  data: () => ({
    emissionPermits: [{
        emissionPermitName: "Строительство здания Общежития No5 на 96 мест Вахтового поселка",
        emissionPermitNumber: '№: KZ28VDD00145762',
        emissionPermitIssueDate: new Date(),
        emissionPermitDueDate: new Date(),
      }

    ]

  }),
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  }
};
</script>