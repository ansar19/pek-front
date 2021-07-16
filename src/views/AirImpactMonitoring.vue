<template>
  <div class="main-content-container container-fluid px-4">
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">4. Мониторинг воздействия на границе санитарно-защитной зоны. 4.1. Атмосферный воздух</span>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="card card-small mb-4">
          <div class="card-body">
            <AirImpactMonitoringTable />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AirImpactMonitoringTable from '@/components/air-impact-monitoring/AirImpactMonitoringTable';
export default {
  name: "air-impact-monitoring",
  components: {
    AirImpactMonitoringTable
  }
}
</script>
