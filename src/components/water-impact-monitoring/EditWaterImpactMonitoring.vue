<template>
  <div class="main-content-container container-fluid px-4">
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">Редактировать</span>
      </div>
    </div>

    <div class="card card-small mb-4">
      <div class="card-header border-bottom">
        <h5>4.2. Водные ресурсы</h5>
      </div>
      <div class="card-body">
        <form @submit.prevent="submitHandler">

          <fieldset>
            <legend>Основная информация</legend>
            <div class="from-group">
              <label for="air-impact-sample-point">Наименование Точки отбора проб</label>
              <input id="air-impact-sample-point" type="text" v-model="waterImpactSamplePoint" class="form-control">
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
                      <label>Норма предельно допустимых концентраций (макс. разовых, мг/м3)</label>
                    </th>
                    <th style="width: 10%;"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(f,n) in waterImpactsLimitsTable" :key="n">
                    <td><label :for="'pollutant'+n">{{n+1}}</label></td>
                    <td data-label="Наименование загрязняющих веществ">
                      <v-select :id="'pollutant'+n" :options="waterPollutantsList" label="waterPolName"
                        v-model="waterImpactsLimitsTable[n].waterPollutant" />
                    </td>
                    <td data-label="Норма ПДК (макс. разовых, мг/м3)">
                      <input class="form-control" :id="'pollutant-limit'+n"
                        v-model.number="waterImpactsLimitsTable[n].waterPollutionLimit" type="number"></td>
                    <td>
                      <button class="btn btn-sm btn-danger" @click.prevent="deleteWaterImpactLimit(idx)">
                        <i class="material-icons">delete</i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="4">
                      <button class="btn btn-sm btn-outline-primary mb-4 mr-2 " @click.prevent="addWaterImpactLimit">
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

let waterPollutantsList = [{
    polCode: "0123",
    waterPolName: "Водородный показатель (рН)"
  },
  {
    polCode: "0143",
    waterPolName: "Температура"
  },
  {
    polCode: "2902",
    waterPolName: "Азот аммонийный"
  },
  {
    polCode: "2754",
    waterPolName: "Биологическое потребление кислорода (БПК п)"
  },
  {
    polCode: "0337",
    waterPolName: "Азот нитратный"
  }
];

export default {
  name: 'edit-water-impact-monitoring',
  data: () => ({
    waterImpactSamplePoint: 'Запруда на ручье Алайгыр ГП5',
    waterImpactsLimitsTable: [{
        waterPollutant: {
          polCode: "0123",
          waterPolName: "Водородный показатель (рН)"
        },
        waterPollutionLimit: 0.23
      },
      {
        waterPollutant: {
          polCode: "0143",
          waterPolName: "Температура"
        },
        waterPollutionLimit: 0.0023
      },
      {
        waterPollutant: {
          polCode: "0143",
          waterPolName: "Азот аммонийный"
        },
        waterPollutionLimit: 0.0023
      },
      {
        waterPollutant: {
          polCode: "0143",
          waterPolName: "Биологическое потребление кислорода (БПК п)"
        },
        waterPollutionLimit: 0.0023
      },
    ],
    isOpen: false // toggle pre json data
  }),
  computed: {
    waterPollutantsList: () => waterPollutantsList,
  },
  methods: {
    addWaterImpactLimit() {
      this.waterImpactsLimitsTable.push({
        waterPollutant: '',
        waterPollutionLimit: '',
      })
    },
    deleteWaterImpactLimit(idx) {
      this.waterImpactsLimitsTable.splice(idx, 1)
    },
    goBack() {
      this.$router.go(-1);
    },
  }
}
</script>

<style scoped>

</style>
