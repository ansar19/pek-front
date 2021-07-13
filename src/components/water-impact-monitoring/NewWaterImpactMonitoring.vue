<template>
  <div class="main-content-container container-fluid px-4">
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">Новый лимит</span>
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
              <label for="water-impact-sample-point">Наименование Точки отбора проб</label>
              <input id="water-impact-sample-point" type="text" v-model="waterImpactSamplePoint" class="form-control">
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
                      <v-select :id="'pollutant'+n" :options="options" label="waterPolName"
                        v-model="waterImpactsLimitsTable[n].waterPollutant" />
                    </td>
                    <td data-label="Норма ПДК (макс. разовых, мг/м3)">
                      <input class="form-control" :id="'pollutant-limit'+n"
                        v-model.number="waterImpactsLimitsTable[n].waterPollutionLimit" type="number"></td>
                    <td>
                      <button class="btn  btn-sm btn-danger" @click.prevent="deleteWaterImpactLimit(idx)">
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
            <!-- Point coordinates -->
            <div style="height: 350px; width: 100%" class="mt-2">
              <div>
                <p>Координаты точки, широта: {{ waterImpactMonitoringCoord.lat }}, долгота:
                  {{ waterImpactMonitoringCoord.lng }}</p>
                <!-- <p>Center is at {{ currentCenter }} and the zoom is: {{ currentZoom }}</p> -->
              </div>
              <l-map :zoom="zoom" :center="center" :options="mapOptions" style="height: 80%"
                @update:center="centerUpdate" @update:zoom="zoomUpdate">
                <l-control-layers position="topright"></l-control-layers>
                <!-- <l-tile-layer :url="url" :attribution="attribution" /> -->
                <l-tile-layer v-for="tileProvider in tileProviders" :key="tileProvider.name" :name="tileProvider.name"
                  :visible="tileProvider.visible" :url="tileProvider.url" :attribution="tileProvider.attribution"
                  layer-type="base" />
                <l-marker :lat-lng.sync="waterImpactMonitoringCoord" :draggable="true">
                  <l-tooltip :options="{  permanent: true, interactive: true }">{{waterImpactSamplePoint}}
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

import waterPolList from '@/data/water-poll-list.js';


export default {
  name: 'new-water-impact-monitoring',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip,
    LControlLayers
  },
  data: () => ({
    waterImpactSamplePoint: null,
    waterImpactsLimitsTable: [{
      waterPollutant: "",
      waterPollutionLimit: ""
    }],
    // leaflet data
    zoom: 13,
    center: latLng(49.7130280, 81.5851838),
    // url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    // attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    waterImpactMonitoringCoord: latLng(49.72274303391478, 81.56840791897655),
    currentZoom: 11.5,
    currentCenter: latLng(49.7130280, 81.5851838),
    showParagraph: false,
    mapOptions: {
      zoomSnap: 0.5,
      draggable: true
    },
    tileProviders: [{
        name: 'Основная',
        visible: true,
        attribution: '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      },
      {
        name: 'Топографическая',
        visible: false,
        url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
        attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
      },
    ],
    isOpen: false // toggle pre json data
  }),
  computed: {
    options: () => waterPolList,
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
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    goBack() {
      this.$router.go(-1);
    },
  }
}
</script>

<style scoped>

</style>
