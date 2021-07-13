<template>
  <div class="main-content-container container-fluid px-4">
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">Редактировать лимит эмиссии</span>
      </div>
    </div>

    <div class="card card-small mb-4">
      <div class="card-header border-bottom">
        <h5>3.4. Мониторинг уровня загрязнения земель</h5>
      </div>
      <div class="card-body">
        <form @submit.prevent="submitHandler">

          <div class="from-group">
            <label for="name1">Наименование источников воздействия (контрольные точки)</label>
            <input id="name1" type="text" v-model="soilControlPointName" class="form-control" />
          </div>

          <!-- Limit table -->
          <div class="table mt-2">
            <table class="meta-table table table-stripped table-bordered">
              <tr>
                <th style="width: 40%;">Наименование источников воздействия (контрольные точки) </th>
                <th style="width: 40%;">Наименование загрязняющих веществ</th>
                <th style="width: 20%;">Установленный норматив (миллиграмм на килограмм)</th>
              </tr>
              <tr v-for="releaseSource, index in soilControlPoints" :key="index">
                <td data-label="Наименование источников воздействия">{{ soilControlPointName }}</td>
                <td data-label="Наименование загрязняющих веществ">
                  <v-select :options="options" label="soilPollutantName" :value="releaseSource.soilPollutantName"
                    @input="soilPollutantName => updatesoilPollutantName(releaseSource, soilPollutantName)" />
                </td>
                <td data-label="Установленный норматив (миллиграмм на килограмм)">
                  <input type="number" class="form-control" v-model.number="releaseSource.soilLimit" />
                </td>
              </tr>
            </table>
          </div>
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
import soilPollutantsList from '@/data/soil-pollutants-list.js';

export default {
  name: 'edit-soil-monitoring',
  data: () => ({
    soilControlPoints: [{
          uid: 1,
          soilControlPointName: "Точка 1",
          soilPollutantName: 'Азот аммонийный',
          soilLimit: 0.25,
          soilControlMeasure: ''
        },
        {
          id: 2,
          soilControlPointName: 'Точка 1',
          soilPollutantName: 'Азот нитратный',
          soilLimit: 120,
          soilControlMeasure: ''
        },
        {
          id: 3,
          soilControlPointName: 'Точка 1',
          soilPollutantName: 'Азот нитритный',
          soilLimit: 56,
          soilControlMeasure: ''
        },
        {
          id: 4,
          soilControlPointName: 'Точка 1',
          soilPollutantName: 'Нефтепродукты',
          soilLimit: 44,
          soilControlMeasure: ''
        }
      ],
    soilControlPointName: "Точка 1",
  }),
  computed: {
    options: () => soilPollutantsList,
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    updatesoilPollutantName(releaseSource, soilPollutantName) {
      releaseSource.soilPollutantName = soilPollutantName;
    },

  }
}
</script>
