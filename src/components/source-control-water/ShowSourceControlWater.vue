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
                  <th style="width: 20%;">Установленный норматив (мг/дм3; тонн в год)</th>
                </tr>
                <tr v-for="releaseSource, index in releaseSources" :key="index">
                  <td>{{ waterEmissionSourceName }}</td>
                  <td>
                    {{ releaseSource.waterLimitPolName }}
                  </td>
                  <td>
                    {{ releaseSource.waterSourceLimit }}
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
  name: 'ShowWastePasport',
  data() {
    return {
      waterEmissionSourceName: "выпуск ВП 10 (х/б сточные воды до очистных сооружений)",
      releaseSources: [{
          uid: 1,
          waterEmissionSourceName: "выпуск ВП 10 (х/б сточные воды до очистных сооружений)",
          waterLimitPolName: "Азот аммонийный",
          calcmethod: "",
          waterSourceLimit: "0.25"
        },
        {
          uid: 2,
          waterEmissionSourceName: "выпуск ВП 10 (х/б сточные воды до очистных сооружений)",
          waterLimitPolName: "Азот нитратный",
          calcmethod: "",
          waterSourceLimit: "0.00023"
        },
        {
          uid: 3,
          waterEmissionSourceName: "выпуск ВП 10 (х/б сточные воды до очистных сооружений)",
          waterLimitPolName: "Азот нитритный",
          calcmethod: "",
          waterSourceLimit: "0.0258"
        },
        {
          uid: 4,
          waterEmissionSourceName: "выпуск ВП 10 (х/б сточные воды до очистных сооружений)",
          waterLimitPolName: "Синтетические поверхностно-активные вещества (СПАВ)",
          calcmethod: "",
          waterSourceLimit: "0.2185"
        }
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
