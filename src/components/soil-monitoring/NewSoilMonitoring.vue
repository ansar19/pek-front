<template>
  <div class="main-content-container container-fluid px-4">
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">Новый лимит эмиссии</span>
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
import soilPollutantsList from '@/data/soil-pollutants-list.js';

export default {
  name: 'NewSoilMonitoring',
  data: () => ({
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

<style scoped>
/* .form-control{
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #9e9e9e;
  border-radius: 0;
  outline: none;
  height: 3rem;
  width: 100%;
  font-size: 16px;
  margin: 0 0 8px 0;
  padding: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  -webkit-transition: border .3s, -webkit-box-shadow .3s;
  transition: border .3s, -webkit-box-shadow .3s;
  transition: box-shadow .3s, border .3s;
  transition: box-shadow .3s, border .3s, -webkit-box-shadow .3s;
}
.form-control-textarea{
  height: auto;
  width: 100%;
  padding: 0.435rem 0.0rem;
  font-size: 0.8125rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  border: 1px solid #e1e5eb;
  font-weight: 300;
  will-change: border-color, box-shadow;
  border-radius: 0.25rem;
  -webkit-box-shadow: none;
  box-shadow: none;
  -webkit-transition: border 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06), -webkit-box-shadow 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06);
  transition: box-shadow 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06), border 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06), -webkit-box-shadow 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06);
}
.btn-small{
  padding: 0px 16px;
  border: none;
  border-radius: 3px;
  box-shadow: 0 3px 3px 0 rgba(0,0,0,0.14), 0 1px 7px 0 rgba(0,0,0,0.12), 0 3px 1px -1px rgba(0,0,0,0.2);
  background-color: #26a69a;
  color: #fff;
  height: 32.4px;
  font-size: 13px;
}
.btn-small:hover {
  background-color: #2bbbad;
} */
/* .small-font {
  font-size: 0.7rem;
} */
/* [data-foo]:after {
    content: attr(data-foo);
    background-color: black;
    color: white;
    white-space: pre;
    display: inline-block;
} */

/* td {padding: 2px 5px;}
td input{margin:0 !important;height:2em !important;}
td .select-wrapper input.select-dropdown{height:2em;line-height:2em;} */
</style>
