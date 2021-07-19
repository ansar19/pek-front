<template>
  <div class="main-content-container container-fluid px-4">
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">Новый лимит</span>
      </div>
    </div>

    <div class="card card-small mb-4">
      <div class="card-header border-bottom">
        <h5>4.1. Атмосферный воздух</h5>
      </div>
      <div class="card-body">
        <form @submit.prevent="submitHandler">

          <fieldset>
            <legend>Основная информация</legend>
            <div class="from-group">
              <label for="air-impact-sample-point">Наименование Точки отбора проб</label>
              <input id="air-impact-sample-point" type="text" v-model="airImpactSamplePoint" class="form-control">
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
                  <tr v-for="(f,n) in airImpactsLimitsTable" :key="n">
                    <td><label :for="'pollutant'+n">{{n+1}}</label></td>
                    <td data-label="Наименование загрязняющих веществ">
                      <v-select :id="'pollutant'+n" :options="options" label="polName"
                        v-model="airImpactsLimitsTable[n].airPollutant" />
                    </td>
                    <td data-label="Норма ПДК (макс. разовых, мг/м3)">
                      <input class="form-control" :id="'pollutant-limit'+n"
                        v-model.number="airImpactsLimitsTable[n].airPollutionLimit" type="number"></td>
                    <td>
                      <button class="btn  btn-sm btn-danger" @click.prevent="deleteAirImpactLimit(n)">
                        <i class="material-icons">delete</i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="4">
                      <button class="btn btn-sm btn-outline-primary mb-4 mr-2 " @click.prevent="addAirImpactLimit">
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
        <button class="btn btn-primary  mb-4 mr-2" @click="goBack" type="submit">
          Назад
        </button>
        <button class="btn btn-success  mb-4" type="submit">
          Создать
          <i class="material-icons right">send</i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import airPollutantsList from '@/data/air-pollutants-list.js';

export default {
  name: 'new-air-impact-monitoring',
  data: () => ({
    airImpactSamplePoint: null,
    airImpactsLimitsTable: [{
      airPollutant: "",
      airPollutionLimit: ""
    }],
    isOpen: false // toggle pre json data
  }),
  computed: {
    options: () => airPollutantsList,
  },
  methods: {
    addAirImpactLimit() {
      this.airImpactsLimitsTable.push({
        airPollutant: '',
        airPollutionLimit: '',
      })
    },
    deleteAirImpactLimit(n) {
      this.airImpactsLimitsTable.splice(n, 1)
    },
    goBack() {
      this.$router.go(-1);
    },
  }
}
</script>
