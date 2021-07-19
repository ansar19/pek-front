<template>
  <div class="main-content-container container-fluid px-4">
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">3. Мониторинг эмиссий. 3.2. Водные ресурсы</span>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="card card-small mb-4">
          <div class="card-body">
            <SourceControlWaterTable />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SourceControlWaterTable from '@/components/source-control-water/SourceControlWaterTable';
export default {
name: "source-control-water",
  components: { SourceControlWaterTable }
}
</script>
