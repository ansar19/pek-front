<template>
  <div class="main-content-container container-fluid px-4">
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle"> 3. Мониторинг эмиссий. 3.1. Атмосферный воздух</span>
      </div>
    </div>
    <!-- Table -->
    <div class="row">
      <div class="col">
        <div class="card card-small mb-4">
          <div class="card-body">
            <AirEmissionSourceControlTable :rows="rows" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import '@/assets/scss/vue-tables.scss';

import AirEmissionSourceControlTable from '@/components/air-emission-source-control/AirEmissionSourceControlTable';

export default {
  data() {
    return {
      rows: [
        {
          id: 1,
          emissionSourceName: 'Строительные работы',
          emissionSourceCode: '6001',
          permissibleLimit: 0.00489,
          actualResult: 0.002445,
          exceedingLimit: '',
          createdAt: '',
          polName: '(0123) Железо (II, III) оксиды (диЖелезо триоксид, Железа оксид) /в пересчете на(274)',
          correctiveMeasures: 'some corrective measures'        
        },
        {
          id: 2,
          emissionSourceName: 'Строительные работы',
          emissionSourceCode: '6001',
          permissibleLimit: 0.0,
          actualResult: 0.254,
          exceedingLimit: '',
          createdAt: '2011-10-31',
          polName: '(0616) Диметилбензол (смесь о-, м-, п- изомеров) (203)',
          correctiveMeasures: 'some corrective measures'        
        },
        {
          id: 3,
          emissionSourceName: 'Строительные работы',
          emissionSourceCode: '6001',
          permissibleLimit: 0.0007685,
          actualResult: 0.254,
          exceedingLimit: '',
          createdAt: '2011-10-30',
          polName: '(0143) Марганец и его соединения /в пересчете на марганца (IV) оксид/ (327)',
          correctiveMeasures: 'some corrective measures'        
        },
        {
          id: 4,
          emissionSourceName: 'Строительные работы',
          emissionSourceCode: '6001',
          permissibleLimit: 0.187815,
          actualResult: 0.254,
          exceedingLimit: '',
          createdAt: '2011-10-11',
          polName: '(0621) Метилбензол (349)',
          correctiveMeasures: 'some corrective measures'        
        },
      ],
    };
  },
  components: {
    AirEmissionSourceControlTable,
  },
};
</script>
