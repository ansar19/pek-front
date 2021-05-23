<template>
  <div class="main-content-container container-fluid px-4">
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">3. Мониторинг эмиссий. 3.4. Мониторинг уровня загрязнения
          земель</span>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="card card-small mb-4">
          <div class="card-body">
            <SoilMonitoringTable />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import SoilMonitoringTable from '@/components/soil-monitoring/SoilMonitoringTable';
export default {
  name: "soil-monitoring",
  components: {
    SoilMonitoringTable
  }
}
</script>

<style scoped>

</style>
