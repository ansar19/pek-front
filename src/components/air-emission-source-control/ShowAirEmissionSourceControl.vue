<template>
  <d-container fluid class="main-content-container px-4 pb-4">
    <d-row no-gutters class="page-header py-4">
      <d-col lg="12" md="12">
        <div class="card card-small mb-4 pt-3">
          <div class="card-header border-bottom text-center">
            <div class="mb-3 mx-auto"></div>

            <table class="meta-table table-bordered" style="width: 100%">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Наименование источника</th>
                  <th>Код источника</th>
                  <th>Код загрязняющих веществ</th>
                  <th>Наименование загрязняющих веществ</th>
                  <th>Установленный норматив (грамм в секунду; тонна в год)</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(gSecL, index) in gramPerSecondLimit" :key="index">
                  <td>{{index+1}}</td>
                  <td data-label="Наименование источника">{{(gSecL.airEmissionSourceName)}}</td>
                  <td data-label="Код источника">{{ gSecL.airEmissionSourceCode }}</td>
                  <td data-label="Код загрязняющих веществ">
                    {{ gSecL.polCode }}
                  </td>
                  <td data-label="Наименование загрязняющих веществ">
                    {{ gSecL.polName }}
                  </td>
                  <td data-label="Установленный норматив (г/сек; т/год)">{{ gSecL.airEmissionSourceLimit }}</td>
                </tr>
              </tbody>
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
  name: 'show-gram-per-second-limit',
  data() {
    return {
      gramPerSecondLimit: [
        {
        airEmissionSourceName: "Строительные работы",
        airEmissionSourceCode: "6001",
        polCode: "0123",
        polName: "Железо (II, III) оксиды (диЖелезо триоксид, Железа оксид) /в пересчете на (274)",
        airEmissionSourceLimit: 0.232
      },
      {
        airEmissionSourceName: "Строительные работы",
        airEmissionSourceCode: "6001",
        polCode: "0143",
        polName: "Марганец и его соединения /в пересчете на марганца (IV) оксид/ (327)",
        airEmissionSourceLimit: 0.0247
      },
      {
        airEmissionSourceName: "Строительные работы",
        airEmissionSourceCode: "6001",
        polCode: "2902",
        polName: "Взвешенные частицы (116)",
        airEmissionSourceLimit: 0.001147
      },
      {
        airEmissionSourceName: "Строительные работы",
        airEmissionSourceCode: "6001",
        polCode: "2754",
        polName: "Алканы С12-19 (Углеводороды предельные С12-19)",
        airEmissionSourceLimit: 0.0012
      },
      {
        airEmissionSourceName: "Строительные работы",
        airEmissionSourceCode: "6001",
        polCode: "0337",
        polName: "Углерод оксид (Угарный газ) (584)",
        airEmissionSourceLimit: 0.00478
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