<template>
  <div class="main-content-container container-fluid px-4">
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">Редактирование точек</span>
      </div>
    </div>
    <div class="row">
      <div class="col">

            <EditSamplingPointMap />

      </div>
    </div>
  </div>
</template>

<script>
import EditSamplingPointMap from '@/components/sampling-points-map/EditSamplingPointMap';
export default {
  name: "edit-sampling-points-map",
  components: {
    EditSamplingPointMap
  }
}
</script>
