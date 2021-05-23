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
                  <th style="width: 40%;">Наименование источников воздействия (контрольные точки)</th>
                  <th style="width: 40%;">Наименование загрязняющих веществ</th>
                  <th style="width: 20%;">Установленный норматив (миллиграмм на килограмм)</th>
                </tr>
                <tr v-for="soilControlPoint, index in soilControlPoints" :key="index">
                  <td data-label="Наименование источников воздействия">{{ soilControlPointName }}</td>
                  <td data-label="Наименование загрязняющих веществ">
                    {{ soilControlPoint.soilPollutantName }}
                  </td>
                  <td data-label="Установленный норматив (миллиграмм на килограмм)">
                    {{ soilControlPoint.soilLimit }}
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
  name: 'show-soil-monitoring',
  data() {
    return {
      soilControlPointName: "Точка 1",
      soilControlPoints: [{
          uid: 1,
          soilControlPointName: "Точка 1",
          soilPollutantName: 'Nox',
          soilLimit: 0.25
        },
        {
          id: 2,
          soilControlPointName: 'Точка 1',
          soilPollutantName: 'SOx',
          soilLimit: 120
        },
        {
          id: 3,
          soilControlPointName: 'Точка 1',
          soilPollutantName: 'CO',
          soilLimit: 56
        },
        {
          id: 4,
          soilControlPointName: 'Точка 1',
          soilPollutantName: 'H2S',
          soilLimit: 44
        }
      ],
    };
  },
  computed: {
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
