<template>
  <d-container fluid class="main-content-container px-4 pb-4">
    <d-row no-gutters class="page-header py-4">
      <d-col lg="12" md="12">
        <div class="card card-small mb-4 pt-3">
          <div class="card-header border-bottom text-center">
            <!-- Limit table -->
            <legend>Наименование Точки отбора проб: {{soilImpactSamplePoint}}</legend>
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
                      <label>Норма ПДК (мг / кг)</label>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(f,n) in soilImpactsLimitsTable" :key="n">
                    <td><label :for="'pollutant'+n">{{n+1}}</label></td>
                    <td data-label="Наименование загрязняющих веществ">
                      {{soilImpactsLimitsTable[n].soilPollutant.soilPolName}}
                    </td>
                    <td data-label="Норма ПДК (мг / кг)">
                      {{soilImpactsLimitsTable[n].soilPollutionLimit}}
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
  name: 'show-soil-impact-monitoring',
  data() {
    return {
      soilImpactSamplePoint: 'Обобщенная граница СЗЗ предприятия. Площадка № 1',
      soilImpactsLimitsTable: [{
          soilPollutant: {
            soilPolCode: "0123",
            soilPolName: "Водородный показатель (рН) водной вытяжки"
          },
          soilPollutionLimit: 0.23
        },
        {
          soilPollutant: {
            soilPolCode: "0143",
            soilPolName: "Ванадий (вал)"
          },
          soilPollutionLimit: 0.0023
        },
        {
          soilPollutant: {
            soilPolCode: "0143",
            soilPolName: "Кадмий (вал)"
          },
          soilPollutionLimit: 0.0023
        },
        {
          soilPollutant: {
            soilPolCode: "0143",
            soilPolName: "Марганец (вал)"
          },
          soilPollutionLimit: 0.0023
        },
        {
          soilPollutant: {
            soilPolCode: "0143",
            soilPolName: "Медь (вал)"
          },
          soilPollutionLimit: 0.0023
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
