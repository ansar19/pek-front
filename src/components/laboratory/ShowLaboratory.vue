<template>
  <d-container fluid class="main-content-container px-4 pb-4">
    <d-row no-gutters class="page-header py-4">
      <d-col lg="12" md="12">
        <div class="card card-small mb-4 pt-3">
          <div class="card-header border-bottom text-center">
            <div class="mb-3 mx-auto"></div>
            <!-- vertical table head example -->
            <table v-for="(l, index) in laboratories" :key="index" class="table table-bordered" style="width: 100%">
              <tr>
                <th class="text-left">Наименование аккредитованной испытательной лаборатории:</th>
                <td>{{ l.laboratoryName }}</td>
              </tr>
              <tr>
                <th class="text-left">Номер аттестата аккредитации испытательной лаборатории:</th>
                <td>{{ l.labAttestateNumber }}</td>
              </tr>
              <tr>
                <th class="text-left">Дата выдачи аттестата аккредитации:</th>
                <td>{{ l.accreditationIssueDate }}</td>
              </tr>
              <tr>
                <th class="text-left">Дата срока аттестата аккредитации:</th>
                <td>{{ l.accreditationDueDate }}</td>
              </tr>
              <tr>
                <th class="text-left">Область аккредитации испытательной
                  лаборатории:</th>
                <td>{{ l.accreditationScopeArea }}</td>
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
  name: 'show-laboratory',
  data() {
    return {
      laboratories: [
        {
          laboratoryName: 'Аналитическая лаборатория ТОО «Лаборатория Атмосфера»',
          labAttestateNumber: "№KZ.Т.07.0215",
          accreditationIssueDate: new Date().toISOString().substr(0, 10),
          accreditationDueDate: "",
          accreditationScopeArea: "1.   Физические факторы рабочей зоны, селитебной территории, жилых и общественных зданий \n 2.   Воздух рабочей зоны \n 3.   Выбросы промышленных предприятий в атмосферу \n 4.   Атмосферный воздух населенных мест, санитарно-защитной зоны, селитебной территории \n 5.   Вода природная (поверхностная, подземная) \n 6.   Сточные воды \n 7.   Почва, грунты, промотходы, осадки с очистных сооружений, золошлаковые отходы",
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