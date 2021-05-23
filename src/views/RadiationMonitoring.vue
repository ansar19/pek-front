<template>
  <div class="main-content-container container-fluid px-4">
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">3. Мониторинг эмиссий. 3.5.Радиационный мониторинг</span>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="card card-small mb-4">
          <div class="card-body">
            <RadiationMonitoringTable />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import RadiationMonitoringTable from '@/components/radiation-monitoring/RadiationMonitoringTable';
export default {
  name: "radiation-monitoring",
  components: {
    RadiationMonitoringTable
  }
}
</script>

<style scoped>

</style>
