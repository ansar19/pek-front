<template>
  <div class="main-content-container container-fluid px-4">
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">3. Мониторинг эмиссий. 3.3. Отходы производства и потребления</span>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="card card-small mb-4">
          <div class="card-body">
            <SourceControlWasteTable />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SourceControlWasteTable from '@/components/source-control-waste/SourceControlWasteTable';
export default {
name: "source-control-waste",
  components: { SourceControlWasteTable }
}
</script>
