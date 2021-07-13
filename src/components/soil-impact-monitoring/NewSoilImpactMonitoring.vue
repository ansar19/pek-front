<template>
  <div class="main-content-container container-fluid px-4">
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">Новый лимит</span>
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
                      <v-select :id="'pollutant'+n" :options="options" label="soilPolName"
                        v-model="soilImpactsLimitsTable[n].soilPollutant" />
                    </td>
                    <td data-label="Норма ПДК (мг / кг)">
                      <input class="form-control" :id="'pollutant-limit'+n"
                        v-model.number="soilImpactsLimitsTable[n].soilPollutionLimit" type="number"></td>
                    <td>
                      <button class="btn  btn-sm btn-danger" @click.prevent="deleteSoilImpactLimit(idx)">
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

            <!-- Point coordinates -->
            <div style="height: 350px; width: 100%" class="mt-2">
              <div >
                <p>Координаты точки, широта: {{ soilImpactMonitoringCoord.lat }}, долгота: {{ soilImpactMonitoringCoord.lng }}</p>
                <!-- <p>Center is at {{ currentCenter }} and the zoom is: {{ currentZoom }}</p> -->
              </div>
              <l-map :zoom="zoom" :center="center" :options="mapOptions" style="height: 80%"
                @update:center="centerUpdate" @update:zoom="zoomUpdate">
                <l-control-layers position="topright"  ></l-control-layers>
                <!-- <l-tile-layer :url="url" :attribution="attribution" /> -->
                <l-tile-layer
                  v-for="tileProvider in tileProviders"
                  :key="tileProvider.name"
                  :name="tileProvider.name"
                  :visible="tileProvider.visible"
                  :url="tileProvider.url"
                  :attribution="tileProvider.attribution"
                  layer-type="base"/>
                <l-marker :lat-lng.sync="soilImpactMonitoringCoord" :draggable="true">
                  <l-tooltip :options="{  permanent: true, interactive: true }">{{soilImpactSamplePoint}}
                  </l-tooltip>
                </l-marker>
              </l-map>
            </div>
            <!-- END Point coordinates -->

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
import {
  latLng
} from "leaflet";

import {
  LMap,
  LTileLayer,
  LMarker,
  LTooltip,
  LControlLayers
} from "vue2-leaflet";

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
  name: 'new-soil-impact-monitoring',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip,
    LControlLayers
  },
  data() {
    return {
      soilImpactSamplePoint: null,
      soilImpactsLimitsTable: [{
        soilPollutant: "",
        soilPollutionLimit: ""
      }],
      // leaflet data
      zoom: 13,
      center: latLng(49.7130280, 81.5851838),
      // url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      // attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      soilImpactMonitoringCoord: latLng(49.72274303391478, 81.56840791897655),
      currentZoom: 11.5,
      currentCenter: latLng(49.7130280, 81.5851838),
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5,
        draggable: true
      },
      tileProviders: [
        {
          name: 'Основная',
          visible: true,
          attribution:
            '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
          url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        },
        {
          name: 'Топографическая',
          visible: false,
          url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
          attribution:
            'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
        },
      ],
      // debug
      isOpen: false // toggle pre json data
    }
  },
  computed: {
    options: () => soilPollutantsList,
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
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
  }
}
</script>
