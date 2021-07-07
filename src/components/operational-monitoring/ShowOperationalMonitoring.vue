<template>
  <d-container fluid class="main-content-container px-4 pb-4">
    <d-row no-gutters class="page-header py-4">
      <d-col lg="12" md="12">
        <div class="card card-small mb-4 pt-3">
          <div class="card-header border-bottom text-center">
            <!-- table -->
            <div class="table mt-2">
              <table class="meta-table table table-stripped table-bordered">
                <thead>
                  <tr>
                    <th style="width: 15%;" class="align-middle">Источник</th>
                    <th style="width: 15%;" class="align-middle">Контролируемые процессы и параметры</th>
                    <th style="width: 15%;" class="align-middle">Единица измерения</th>
                    <th style="width: 15%;" class="align-middle">Количество по проекту (ПДВ, ОВОС, ПДС)
                      (год)</th>
                    <th style="width: 30%;" class="align-middle">Ответственное лицо за контроль</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="oml, index in operationalMonitoringList" :key="index">
                    <td data-label="Источник" class="align-middle">{{oml.source}}</td>
                    <td data-label="Контролируемые процессы и параметры" class="align-middle">
                      {{oml.controlledProcessParameter.controlledProcessParameterName}}
                    </td>
                    <td data-label="Единица измерения" class="align-middle">
                      {{oml.unitOfMeasurement.uomName}}
                    </td>
                    <td data-label="Количество по проекту" class="align-middle">
                      {{oml.limitQty}}
                    </td>
                    <td data-label="Ответственное лицо" class="align-middle">
                      {{oml.responsible.userFullName}}
                    </td>
                  </tr>
                </tbody>
              </table>
              <pre>{{operationalMonitoringList}}</pre>
            </div>
          </div>
          <div class="card-footer">
            <div class="col text-left view-report">
              <a @click="goBack()"> &larr; Вернуться назад </a>
            </div>
          </div>
        </div>
      </d-col>
    </d-row>
  </d-container>
</template>

<script>
export default {
  name: 'ShowOperationalMonitoring',
  data: () => ({
    operationalMonitoringList: [{
      "id": 1,
      "source": "0001 — Дымовая труба печи ЭЛОУ-АВТ",
      "controlledProcessParameter": {
        "controlledProcessParameterName": "Расход",
        "controlledProcessParameter": "consumption"
      },
      "unitOfMeasurement": {
        "uomName": "т/год",
        "controlledProcessParameter": "tperyear"
      },
      "limitQty": "456",
      "responsible": {
        "userId": "001",
        "userFullName": "Иванов Иван Иванович",
        "poistion": "Начальник ДУО"
      }
    }, {
      "id": 2,
      "source": "0001 — Дымовая труба печи ЭЛОУ-АВТ",
      "controlledProcessParameter": {
        "controlledProcessParameterName": "Производительность",
        "controlledProcessParameter": "productivity"
      },
      "unitOfMeasurement": {
        "uomName": "час/год",
        "controlledProcessParameter": "hour_year"
      },
      "limitQty": "8000",
      "responsible": {
        "userId": "001",
        "userFullName": "Иванов Иван Иванович",
        "poistion": "Начальник ДУО"
      }
    }],
  }),
  computed: {},
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  }
};
</script>
