<template>
  <div class="main-content-container container-fluid px-4">

    <div class="card card-small mb-4">

      <div class="card-body">
        <fieldset>
          <legend>Точки мониторинга</legend>

          <div style="height: 350px; width: 100%">

            <l-map :zoom="zoom" :center="center">
              <l-control-layers ref="control"></l-control-layers>
              <l-tile-layer :url="url" :attribution="attribution" name="base" layer-type="base"></l-tile-layer>
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
                  <l-tooltip :options="{  permanent: true, interactive: true }">{{marker.airImpactSamplePoint}}
                  </l-tooltip>
                </l-marker>
              </l-layer-group>

            </l-map>
          </div>
        </fieldset>
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
    LControlLayers,
    LLayerGroup
  },
  data() {
    return {
      // leaflet data
      zoom: 12,
      center: L.latLng(49.7130280, 81.5851838),
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(49.7130280, 81.5851838),
      soilImpactSamplingPoints: [{
          id: "m1",
          position: {
            lat: 49.715072170695755,
            lng: 81.58168414841649
          },
          soilImpactSamplePoint: "Soil 1",
          draggable: true,
          visible: true
        },
        {
          id: "m2",
          position: {
            lat: 49.712832935988885,
            lng: 81.56802669568184
          },
          soilImpactSamplePoint: "Soil 2",
          draggable: true,
          visible: true
        },
        {
          id: "m3",
          position: {
            lat: 49.72638780619652,
            lng: 81.55979480027639
          },
          soilImpactSamplePoint: "Soil 3",
          draggable: true,
          visible: true
        }
      ],
      airImpactSamplingPoints: [{
          id: "k1",
          position: {
            lat: 49.72274303391478,
            lng: 81.56840791897655
          },
          airImpactSamplePoint: "Air 1",
          draggable: true,
          visible: true
        },
        {
          id: "k2",
          position: {
            lat: 49.72274,
            lng: 81.5684
          },
          airImpactSamplePoint: "Air 2",
          draggable: true,
          visible: true
        },
      ],
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
  }
}
</script>
