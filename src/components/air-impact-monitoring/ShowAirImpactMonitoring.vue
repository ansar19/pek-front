<template>
  <d-container fluid class="main-content-container px-4 pb-4">
    <d-row no-gutters class="page-header py-4">
      <d-col lg="12" md="12">
        <div class="card card-small mb-4 pt-3">
          <div class="card-header border-bottom text-center">
            <!-- Limit table -->
            <legend>Наименование Точки отбора проб: {{airImpactSamplePoint}}</legend>
            <div class="table-responsive">
              <table class="meta-table">
                <thead class="vertical-align: middle;">
                  <tr>
                    <th style="width: 5%;">
                      <label>#</label>
                    </th>
                    <th style="width: 75%;">
                      <label>Наименование загрязняющих веществ</label>
                    </th>
                    <th style="width: 20%;">
                      <label>Норма предельно допустимых концентраций (макс. разовых, мг/м3)</label>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(f,n) in airImpactsLimitsTable" :key="n">
                    <td><label :for="'pollutant'+n">{{n+1}}</label></td>
                    <td data-label="Наименование загрязняющих веществ">
                      {{airImpactsLimitsTable[n].airPollutant.polName}}
                    </td>
                    <td data-label="Норма ПДК (макс. разовых, мг/м3)">
                      {{airImpactsLimitsTable[n].airPollutionLimit}}
                    </td>
                  </tr>
                </tbody>
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
  name: 'show-air-impact-monitoring',
  data() {
    return {
      airImpactSamplePoint: 'Обобщенная граница СЗЗ предприятия №7',
      airImpactsLimitsTable: [{
          airPollutant: {
            polCode: "0123",
            polName: "Железо (II, III) оксиды (диЖелезо триоксид, Железа оксид) /в пересчете на (274)"
          },
          airPollutionLimit: 0.23
        },
        {
          airPollutant: {
            polCode: "0143",
            polName: "Марганец и его соединения /в пересчете на марганца (IV) оксид/ (327)"
          },
          airPollutionLimit: 0.0023
        }
      ],
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
