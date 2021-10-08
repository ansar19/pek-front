<template>
  <div class="main-content-container container-fluid px-4">
    <div class="card card-small mb-4">
      <div class="card-body">
        <EditRadiationCoordinates />
        <div class="card-footer">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import EditRadiationCoordinates from '@/components/radiation-monitoring/EditRadiationCoordinates';
  export default {
    name: "edit-sampling-points-map",
    components: {
      EditRadiationCoordinates
    }
  }
</script>
