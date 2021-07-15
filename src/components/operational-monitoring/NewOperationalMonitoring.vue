<template>
  <div class="main-content-container container-fluid px-4">
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">Новый операционный мониторинг</span>
      </div>
    </div>
    <div class="card card-small mb-4">
      <div class="card-header border-bottom">
        <h5>Наименование точек операционного контроля</h5>
      </div>
      <div class="card-body">
        <form @submit.prevent="submitHandler">
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
                  <th style="width: 25%;" class="align-middle">Ответственное лицо за контроль</th>
                  <th style="width: 5%;" class="align-middle"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="oml, index in operationalMonitoringList" :key="index">
                  <td data-label="Источник" class="align-middle">{{oml.source}}</td>
                  <td data-label="Контролируемые процессы и параметры" class="align-middle">
                    <v-select :options="controlledProcessesParameters" label="controlledProcessParameterName"
                      :value="oml.controlledProcessParameter"
                      @input="controlledProcessParameter => updateControlledProcessParameter(oml, controlledProcessParameter)" />
                  </td>
                  <td data-label="Единица измерения" class="align-middle">
                    <v-select :options="unitOfMeasurementsList" label="uomName" :value="oml.unitOfMeasurement"
                      @input="unitOfMeasurement => updateUnitOfMeasurement(oml, unitOfMeasurement)" />
                  </td>
                  <td data-label="Количество по проекту" class="align-middle">
                    <input type="number" class="form-control" v-model="oml.limitQty" />
                  </td>
                  <td data-label="Ответственное лицо" class="align-middle">
                    <v-select :options="userList" label="userFullName" :value="oml.responsible"
                      @input="responsible => updateResponsible(oml, responsible)" />
                  </td>
                  <td class="align-middle">
                    <button class="btn-danger btn-sm btn mr-2" @click.prevent="deleteOperationalMonitoringItem(index)">
                      <i class="material-icons">delete</i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td colspan="6">
                    <button class="btn btn-sm btn-outline-primary mb-4 mr-2 "
                      @click.prevent="addOperationalMonitoringItem">
                      <i class="material-icons">exposure_plus_1</i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <!-- <pre>{{operationalMonitoringList}}</pre> -->
          </div>
        </form>
      </div>
      <div class="card-footer border-top mb">
        <button class="btn btn-primary  mb-4 mr-2" @click="goBack" type="submit">
          Назад
        </button>
        <button class="btn btn-success  mb-4" type="submit">
          Сохранить
          <i class="material-icons right">send</i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
const controlledProcessesParameters = [{
    controlledProcessParameterName: "Расход",
    controlledProcessParameter: "consumption"
  },
  {
    controlledProcessParameterName: "Время работы",
    controlledProcessParameter: "worked_hour"
  },
  {
    controlledProcessParameterName: "Производительность",
    controlledProcessParameter: "productivity"
  },
];

const unitOfMeasurementsList = [{
    uomName: "м3/ч",
    controlledProcessParameter: "m3perhour"
  },
  {
    uomName: "т/год",
    controlledProcessParameter: "tperyear"
  },
  {
    uomName: "час/год",
    controlledProcessParameter: "hour_year"
  },
];

const userList = [{
    userId: '001',
    userFullName: 'Иванов Иван Иванович',
    poistion: 'Начальник ДУО'
  },
  {
    userId: '002',
    userFullName: 'Петров Петр Сергеевич',
    poistion: 'Завхоз'
  }
]

export default {
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
    }
    ],
  }),
  computed: {
    controlledProcessesParameters: () => controlledProcessesParameters,
    unitOfMeasurementsList: () => unitOfMeasurementsList,
    userList: () => userList
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    updateControlledProcessParameter(oml, controlledProcessParameter) {
      oml.controlledProcessParameter = controlledProcessParameter;
    },
    updateUnitOfMeasurement(oml, unitOfMeasurement) {
      oml.unitOfMeasurement = unitOfMeasurement;
    },
    updateResponsible(oml, responsible) {
      oml.responsible = responsible
    },
    addOperationalMonitoringItem() {
      this.operationalMonitoringList.push({
        id: '',
        source: '',
        controlledProcessParameter: {},
        unitOfMeasurement: {},
        limitQty: 0,
        responsible: {}
      })
    },
    deleteOperationalMonitoringItem(index) {
      this.operationalMonitoringList.splice(index, 1)
    }
  }
}
</script>

<style scoped>
/* .form-control{
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #9e9e9e;
  border-radius: 0;
  outline: none;
  height: 3rem;
  width: 100%;
  font-size: 16px;
  margin: 0 0 8px 0;
  padding: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  -webkit-transition: border .3s, -webkit-box-shadow .3s;
  transition: border .3s, -webkit-box-shadow .3s;
  transition: box-shadow .3s, border .3s;
  transition: box-shadow .3s, border .3s, -webkit-box-shadow .3s;
}
.form-control-textarea{
  height: auto;
  width: 100%;
  padding: 0.435rem 0.0rem;
  font-size: 0.8125rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  border: 1px solid #e1e5eb;
  font-weight: 300;
  will-change: border-color, box-shadow;
  border-radius: 0.25rem;
  -webkit-box-shadow: none;
  box-shadow: none;
  -webkit-transition: border 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06), -webkit-box-shadow 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06);
  transition: box-shadow 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06), border 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06), -webkit-box-shadow 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06);
}
.btn-small{
  padding: 0px 16px;
  border: none;
  border-radius: 3px;
  box-shadow: 0 3px 3px 0 rgba(0,0,0,0.14), 0 1px 7px 0 rgba(0,0,0,0.12), 0 3px 1px -1px rgba(0,0,0,0.2);
  background-color: #26a69a;
  color: #fff;
  height: 32.4px;
  font-size: 13px;
}
.btn-small:hover {
  background-color: #2bbbad;
} */
/* .small-font {
  font-size: 0.7rem;
} */
/* [data-foo]:after {
    content: attr(data-foo);
    background-color: black;
    color: white;
    white-space: pre;
    display: inline-block;
} */

/* td {padding: 2px 5px;}
td input{margin:0 !important;height:2em !important;}
td .select-wrapper input.select-dropdown{height:2em;line-height:2em;} */
</style>
