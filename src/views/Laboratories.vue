<template>
  <div class="main-content-container container-fluid px-4">
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle"> 2. Сведения о лаборатории</span>
      </div>
    </div>
    <!-- Default Light Table -->
    <div class="row">
      <div class="col">
        <div class="card card-small mb-4">
          <div class="card-body">
            <LaboratoryTable :rows="rows" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import '@/assets/scss/vue-tables.scss';

import LaboratoryTable from '@/components/laboratory/LaboratoryTable';

export default {
  data() {
    return {
      rows: [
        {
          id: 1,
          laboratoryName: 'Аналитическая лаборатория ТОО «Лаборатория Атмосфера»',
          labAttestateNumber: '№KZ.Т.07.0215',
          accreditationIssueDate: '2019-04-03',
          accreditationDueDate: '2024-04-03',
          accreditationScopeArea: `1.   Физические факторы рабочей зоны, селитебной территории, жилых и общественных зданий; 2.   Воздух рабочей зоны; 3.   Выбросы промышленных предприятий в атмосферу; 4.   Атмосферный воздух населенных мест, санитарно-защитной зоны, селитебной территории; 5.   Вода природная (поверхностная, подземная); 6.   Сточные воды; 7.   Почва, грунты, промотходы, осадки с очистных сооружений, золошлаковые отходы`.substr(0, 150) + '...',
        },
        {
          id: 2,
          laboratoryName: 'ТОО БГП',
          labAttestateNumber: 24,
          accreditationIssueDate: '2011-10-31',
          accreditationDueDate: '2011-10-31',
          accreditationScopeArea: `1.   Физические факторы рабочей зоны, селитебной территории, жилых и общественных зданий; 2.   Воздух рабочей зоны; 3.   Выбросы промышленных предприятий в атмосферу; 4.   Атмосферный воздух населенных мест, санитарно-защитной зоны, селитебной территории; 5.   Вода природная (поверхностная, подземная); 6.   Сточные воды; 7.   Почва, грунты, промотходы, осадки с очистных сооружений, золошлаковые отходы`.substr(0, 150) + '...',
        },
      ],
    };
  },
  components: {
    LaboratoryTable,
  },
};
</script>
