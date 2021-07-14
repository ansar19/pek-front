<template>
  <div class="main-content-container container-fluid px-4">

    <div class="card card-small mb-4">

      <div class="card-body">
        <fieldset>
          <legend class="stats-small__label text-uppercase">Точки мониторинга</legend>

          <div style="height: 550px; width: 100%">

            <l-map :zoom="zoom" :center="center">
              <!-- <l-control-layers ref="control"></l-control-layers> -->
              <l-control-layers position="topright"  ></l-control-layers>
              <!-- <l-tile-layer :url="url" :attribution="attribution" name="Основная" layer-type="base"></l-tile-layer> -->
              <l-tile-layer
                v-for="tileProvider in tileProviders"
                :key="tileProvider.name"
                :name="tileProvider.name"
                :visible="tileProvider.visible"
                :url="tileProvider.url"
                :attribution="tileProvider.attribution"
                layer-type="base"/>
              <l-layer-group layer-type="overlay" name="Точки мониторинга почв" :visible="true">
                <l-marker v-for="marker in soilImpactSamplingPoints" :key="marker.id" :visible="marker.visible"
                  :lat-lng="marker.position">
                  <l-tooltip :options="{  permanent: true, interactive: true }">{{marker.soilImpactSamplePoint}}
                  </l-tooltip>
                </l-marker>
              </l-layer-group>

              <l-layer-group layer-type="overlay" name="Точки мониторинга воздуха" :visible="true">
                <l-marker v-for="marker in airImpactSamplingPoints" :key="marker.id" :visible="marker.visible"
                  :lat-lng="marker.position">
                  <l-tooltip>{{marker.airImpactSamplePoint}}
                  </l-tooltip>
                  <l-popup >
                    <div>
                      <p>
                        {{marker.comment}}
                      </p>
                    </div>
                  </l-popup>
                </l-marker>
              </l-layer-group>

            </l-map>
          </div>
        </fieldset>
        <button type="button" class="btn btn-primary mt-2" @click="showLongText">Show/Hide</button>
      </div>
      <div class="card-footer">
        <table class="meta-table" v-show="showAdditionalDetails">
          <thead class="thead-light">
            <th style="width:5%">Наименование </th>
            <th style="width:5%">Долгота </th>
            <th style="width:5%">Широта </th>
            <th style="width:85%">Комментарий</th>
          </thead>
          <tbody>
            <tr v-for="marker in airImpactSamplingPoints" :key="marker.id">
              <td data-label="Наименование">{{marker.airImpactSamplePoint}}</td>
              <td data-label="Долгота"> {{marker.position.lat}} </td>
              <td data-label="Широта"> {{marker.position.lng}} </td>
              <td data-label="Комментарий">
                {{marker.comment}}
              </td>
            </tr>
          </tbody>
        </table>
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
  LPopup,
  LControlLayers,
  LLayerGroup
} from "vue2-leaflet";


export default {
  name: 'new-soil-impact-monitoring',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip,
    LPopup,
    LControlLayers,
    LLayerGroup
  },
  data() {
    return {
      // leaflet data
      zoom: 12,
      center: L.latLng(49.7130280, 81.5851838),
      // url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      // attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(49.7130280, 81.5851838),
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
      soilImpactSamplingPoints: [{
          id: "m1",
          position: {
            lat: 49.715072170695755,
            lng: 81.58168414841649
          },
          soilImpactSamplePoint: "Обобщенная граница СЗЗ предприятия. Площадка № 1",
          draggable: false,
          visible: true
        },
        {
          id: "m2",
          position: {
            lat: 49.712832935988885,
            lng: 81.56802669568184
          },
          soilImpactSamplePoint: "Обобщенная граница СЗЗ предприятия. Площадка № 2",
          draggable: false,
          visible: true
        },
        {
          id: "m3",
          position: {
            lat: 49.72638780619652,
            lng: 81.55979480027639
          },
          soilImpactSamplePoint: "Обобщенная граница СЗЗ предприятия. Площадка № 3",
          draggable: false,
          visible: true
        }
      ],
      airImpactSamplingPoints: [{
          id: "k1",
          position: {
            lat: 49.7134916305684,
            lng: 81.5604373358692
          },
          airImpactSamplePoint: "Граница СЗЗ предприятия №1",
          comment: "Тестовый блок для вывода информации про данную точку",
          draggable: false,
          visible: true
        },
        {
          id: "k2",
          position: {
            lat: 49.72274,
            lng: 81.5684
          },
          airImpactSamplePoint: "Граница СЗЗ предприятия №2",
          comment: "Тестовый блок для вывода информации про данную точку",
          draggable: false,
          visible: true
        },
      ],
      showAdditionalDetails: false,
    }
  },
  computed: {},
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    showLongText() {
      this.showAdditionalDetails = !this.showAdditionalDetails;
    },
  }
}
</script>
