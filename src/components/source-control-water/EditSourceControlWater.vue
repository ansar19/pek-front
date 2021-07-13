<template>
  <div class="main-content-container container-fluid px-4">
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">Новый лимит эмиссии</span>
      </div>
    </div>

    <div class="card card-small mb-4">
      <div class="card-header border-bottom">
        <h5>3.2. Водные ресурсы</h5>
      </div>
      <div class="card-body">
        <form @submit.prevent="submitHandler">

          <div class="from-group">
            <label for="name1">Наименование источников воздействия (контрольные точки)</label>
            <input id="name1" type="text" v-model="waterEmissionSourceName" class="form-control" />
          </div>

          <!-- Water Limit table -->
          <div class="table mt-2">
            
            <table class="meta-table table table-stripped table-bordered">
              <tr>
                <th style="width: 40%;">Наименование источников воздействия (контрольные точки)</th>
                <th style="width: 40%;">Наименование загрязняющих веществ</th>
                <th style="width: 20%;">Установленный норматив (миллиграмм на дециметр кубический; тонн в год)</th>
              </tr>
              <tr v-for="waterEmissionSource, index in waterEmissionSourcesControl" :key="index">
                <td>{{ waterEmissionSourceName }}</td>
                <td>
                  <v-select :options="options" label="waterPolName" :value="waterEmissionSource.waterLimitPolName"
                    @input="waterLimitPolName => updateWaterLimitPolName(waterEmissionSource, waterLimitPolName)" />
                </td>
                <td>
                  <input type="number" class="form-control" v-model="waterEmissionSource.waterSourceLimit" />
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
import waterPolList from '@/data/water-poll-list.js';

export default {
  data: () => ({
    waterEmissionSourcesControl: [
      {
        uid: 1,
        waterEmissionSourceName: "выпуск ВП 10 (х/б сточные воды до очистных сооружений)",
        waterLimitPolName: "Азот аммонийный",
        calcmethod: "",
        waterSourceLimit: ""
      },
      {
        uid: 2,
        waterEmissionSourceName: "выпуск ВП 10 (х/б сточные воды до очистных сооружений)",
        waterLimitPolName: "Азот нитратный",
        calcmethod: "",
        waterSourceLimit: ""
      },
      {
        uid: 3,
        waterEmissionSourceName: "выпуск ВП 10 (х/б сточные воды до очистных сооружений)",
        waterLimitPolName: "Азот нитритный",
        calcmethod: "",
        waterSourceLimit: ""
      },
      {
        uid: 4,
        waterEmissionSourceName: "выпуск ВП 10 (х/б сточные воды до очистных сооружений)",
        waterLimitPolName: "Синтетические поверхностно-активные вещества (СПАВ)",
        calcmethod: "",
        waterSourceLimit: ""
      }
    ],
    waterEmissionSourceName: "выпуск ВП 10 (х/б сточные воды до очистных сооружений)",
  }),
  computed: {
    options: () => waterPolList,
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    updateWaterLimitPolName(waterEmissionSource, waterLimitPolName) {
      waterEmissionSource.waterLimitPolName = waterLimitPolName;
    },
    //
    
  }
}
</script>