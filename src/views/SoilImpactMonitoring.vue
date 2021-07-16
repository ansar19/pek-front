<template>
  <div class="main-content-container container-fluid px-4">
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">4. Мониторинг воздействия на границе санитарно-защитной зоны. 4.3. Почвенный покров</span>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="card card-small mb-4">
          <div class="card-body">
            <SoilImpactMonitoringTable />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SoilImpactMonitoringTable from '@/components/soil-impact-monitoring/SoilImpactMonitoringTable';
export default {
  name: "soil-impact-monitoring",
  components: {
    SoilImpactMonitoringTable
  }
}
</script>
