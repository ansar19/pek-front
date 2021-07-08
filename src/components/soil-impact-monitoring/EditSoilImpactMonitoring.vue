<template>
  <div class="main-content-container container-fluid px-4">
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">Редактировать</span>
      </div>
    </div>

    <div class="card card-small mb-4">
      <div class="card-header border-bottom">
        <h5>4.3. Почвенный покров</h5>
      </div>
      <div class="card-body">
        <form @submit.prevent="submitHandler">

          <fieldset>
            <legend>Основная информация</legend>
            <div class="from-group">
              <label for="soil-impact-sample-point">Наименование Точки отбора проб</label>
              <input id="soil-impact-sample-point" type="text" v-model="soilImpactSamplePoint" class="form-control">
            </div>
          </fieldset>

          <fieldset>
            <legend>Лимиты ЗВ</legend>
            <div class="table-responsive">
              <table class="meta-table">
                <thead class="vertical-align: middle;">
                  <tr>
                    <th style="width: 5%;">
                      <label>#</label>
                    </th>
                    <th style="width: 65%;">
                      <label>Наименование загрязняющих веществ</label>
                    </th>
                    <th style="width: 20%;">
                      <label>Норма ПДК (мг / кг)</label>
                    </th>
                    <th style="width: 10%;"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(f,n) in soilImpactsLimitsTable" :key="n">
                    <td><label :for="'pollutant'+n">{{n+1}}</label></td>
                    <td data-label="Наименование загрязняющих веществ">
                      <v-select :id="'pollutant'+n" :options="soilPollutantsList" label="soilPolName"
                        v-model="soilImpactsLimitsTable[n].soilPollutant" />
                    </td>
                    <td data-label="Норма ПДК (макс. разовых, мг/м3)">
                      <input class="form-control" :id="'pollutant-limit'+n"
                        v-model.number="soilImpactsLimitsTable[n].soilPollutionLimit" type="number"></td>
                    <td>
                      <button class="btn btn-sm btn-danger" @click.prevent="deleteSoilImpactLimit(idx)">
                        <i class="material-icons">delete</i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="4">
                      <button class="btn btn-sm btn-outline-primary mb-4 mr-2 " @click.prevent="addSoilImpactLimit">
                        <i class="material-icons">exposure_plus_1</i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- <button type="button" class="btn btn-primary mt-2" v-on:click='isOpen = !isOpen'>Open/Close JSON</button>
            <span v-show="isOpen">
              <pre>Debug: {{$data}}</pre>
            </span> -->
          </fieldset>
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

let soilPollutantsList = [{
    polCode: "0123",
    soilPolName: "Водородный показатель (рН) водной вытяжки"
  },
  {
    polCode: "0143",
    soilPolName: "Ванадий (вал)"
  },
  {
    polCode: "2902",
    soilPolName: "Кадмий (вал)"
  },
  {
    polCode: "2754",
    soilPolName: "Марганец (вал)"
  },
  {
    polCode: "0337",
    soilPolName: "Медь (вал)"
  }
];

export default {
  name: 'edit-soil-impact-monitoring',
  data: () => ({
    soilImpactSamplePoint: 'Обобщенная граница СЗЗ предприятия. Площадка № 1',
    soilImpactsLimitsTable: [{
        soilPollutant: {
          polCode: "0123",
          soilPolName: "Водородный показатель (рН) водной вытяжки"
        },
        soilPollutionLimit: 0.23
      },
      {
        soilPollutant: {
          polCode: "0143",
          soilPolName: "Ванадий (вал)"
        },
        soilPollutionLimit: 0.0023
      },
      {
        soilPollutant: {
          polCode: "0143",
          soilPolName: "Кадмий (вал)"
        },
        soilPollutionLimit: 0.0023
      },
      {
        soilPollutant: {
          polCode: "0143",
          soilPolName: "Марганец (вал)"
        },
        soilPollutionLimit: 0.0023
      },
      {
        soilPollutant: {
          polCode: "0143",
          soilPolName: "Медь (вал)"
        },
        soilPollutionLimit: 0.0023
      },
    ],
    isOpen: false // toggle pre json data
  }),
  computed: {
    soilPollutantsList: () => soilPollutantsList,
  },
  methods: {
    addSoilImpactLimit() {
      this.soilImpactsLimitsTable.push({
        soilPollutant: '',
        soilPollutionLimit: '',
      })
    },
    deleteSoilImpactLimit(idx) {
      this.soilImpactsLimitsTable.splice(idx, 1)
    },
    goBack() {
      this.$router.go(-1);
    },
  }
}
</script>

<style scoped>

</style>
