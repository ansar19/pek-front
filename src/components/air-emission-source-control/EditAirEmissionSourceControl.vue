<template>
  <d-container fluid class="main-content-container px-4 pb-4">
    <d-row no-gutters class="page-header py-4">
      <d-col lg="12" md="12">
        <d-card class="card-small">
          <!-- Form -->
          <d-card-header class="border-bottom">
            <h6 class="m-0">Редактировать источник эмиссии в атмосферу
            </h6>
          </d-card-header>
          <div class="col s12 m6 mt-2">
            <div>
              <form @submit.prevent="submitHandler">

                <div class="form-row">
                  <div class="form-group col-md-12">
                    <label for="emission-permit-name">№ и Название разрешения на эмиссии:</label>
                    <v-select :options="emissionPermitLists" label="emissionPermitName" v-model="emissionPermit" />
                  </div>
                </div>

                <div class="form-group">
                  <label for="sampling-date">Выбор Источника Выбросов:</label>
                  <v-select :options="airEmissionSourcesList" label="airEmissionSourceName"
                    v-model="selectedAirEmissionSource">
                  </v-select>
                </div>
                <!-- Limits Table -->
                <fieldset>
                  <legend>ЗВ по которому установлены лимиты:</legend>
                  <div>
                    <table class="meta-table">
                      <thead class="vertical-align: middle;">
                        <tr>
                          <th style="width: 5%;">
                            <label>#</label>
                          </th>
                          <th style="width: 50%;">
                            <label>Наименование загрязняющих веществ</label>
                          </th>
                          <th style="width: 20%;">
                            <label>Установленный норматив (г/сек; т/год)</label>
                          </th>
                          <th style="width: 20%;"><label>Перидичность контроля</label></th>
                          <th style="width: 5%;"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(f,n) in airEmissionSourcesControl" :key="n">
                          <td><label :for="'pollutant'+n">{{n+1}}</label></td>
                          <td data-label="Наименование загрязняющих веществ">
                            <v-select :id="'pollutant'+n" :options="airPollutantsList" label="polName"
                              v-model="airEmissionSourcesControl[n].airPollutant" />
                          </td>
                          <td data-label="Норма ПДК (макс. разовых, мг/м3)">
                            <input class="form-control" :id="'pollutant-limit'+n"
                              v-model.number="airEmissionSourcesControl[n].airEmissionSourceLimit" type="number"></td>
                          <td data-label="Перидичность контроля" class="align-middle">
                            <div class="form-group">
                              <v-select :options="controlPeriodicityList" :searchable="false"
                                label="controlPeriodicityName"
                                v-model="airEmissionSourcesControl[n].controlPeriodicity" />
                            </div>
                          </td>
                          <td>
                            <button class="btn  btn-sm btn-danger" @click.prevent="deleteAirEmissionSourceLimit(n)">
                              <i class="material-icons">delete</i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td colspan="4">
                            <button class="btn btn-sm btn-outline-primary mb-4 mr-2 "
                              @click.prevent="addAirEmissionSourceLimit">
                              <i class="material-icons">exposure_plus_1</i>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </fieldset>
                <!-- END Limits Table -->
              </form>
            </div>

          </div>
          <div class="card-footer border-top mb">
            <button class="btn btn-success mb-3" type="submit" @click.prevent="save">
              Создать
              <i class="material-icons right">send</i>
            </button>
          </div>
        </d-card>
      </d-col>
    </d-row>
  </d-container>
</template>

<script>
// import localizeFilter from '@/filters/localize.filter'
import airPollutantsList from '@/data/air-pollutants-list.js';
import airEmissionSourcesList from '@/data/air-emission-sources-list.js';
import controlPeriodicityList from '@/data/control-periodicity-list.js';
import emissionPermitLists from '@/data/emission-permits-list';


export default {
  props: {},
  data: () => ({
    emissionPermit: {
      "id": 1,
      "emissionPermitName": "Строительство здания Общежития No5 на 96 мест Вахтового поселка",
      "emissionPermitNumber": "KZ28VDD00145762",
      "emissionPermitStartDate": "2021-01-01",
      "emissionPermitDueDate": "2021-12-31"
    },
    selectedAirEmissionSource: [{
      airEmissionSourceName: "Строительные работы",
      airEmissionSourceCode: "6001"
    }],
    airEmissionSourcesControl: [{
        "airPollutant": {
          "polCode": "0123",
          "polName": "Железо (II, III) оксиды (диЖелезо триоксид, Железа оксид) /в пересчете на (274)"
        },
        "airEmissionSourceLimit": 0.23,
        "controlPeriodicity": {
          "controlPeriodicityName": "Ежемесячно",
          "controlPeriodicity": "monthly"
        }
      },
      {
        "airPollutant": {
          "polCode": "0143",
          "polName": "Марганец и его соединения /в пересчете на марганца (IV) оксид/ (327)"
        },
        "airEmissionSourceLimit": 0.11,
        "controlPeriodicity": {
          "controlPeriodicityName": "Ежемесячно",
          "controlPeriodicity": "monthly"
        }
      },
      {
        "airPollutant": {
          "polCode": "2902",
          "polName": "Взвешенные частицы (116)"
        },
        "airEmissionSourceLimit": 0.22,
        "controlPeriodicity": {
          "controlPeriodicityName": "Ежемесячно",
          "controlPeriodicity": "monthly"
        }
      },
      {
        "airPollutant": {
          "polCode": "2754",
          "polName": "Алканы С12-19 (Углеводороды предельные С12-19)"
        },
        "airEmissionSourceLimit": 0.0033,
        "controlPeriodicity": {
          "controlPeriodicityName": "Ежемесячно",
          "controlPeriodicity": "monthly"
        }
      },
      {
        "airPollutant": {
          "polCode": "0337",
          "polName": "Углерод оксид (Угарный газ) (584)"
        },
        "airEmissionSourceLimit": 0.0036,
        "controlPeriodicity": {
          "controlPeriodicityName": "Ежемесячно",
          "controlPeriodicity": "monthly"
        }
      }
    ],
  }),
  validations: {},
  watch: {},
  created() {},
  computed: {
    airPollutantsList: () => airPollutantsList,
    airEmissionSourcesList: () => airEmissionSourcesList,
    controlPeriodicityList: () => controlPeriodicityList,
    emissionPermitLists: () => emissionPermitLists,

  },
  methods: {
    addAirEmissionSourceLimit() {
      this.airEmissionSourcesControl.push({
        airPollutant: '',
        airEmissionSourceLimit: '',
        controlPeriodicity: ''
      })
    },
    deleteAirEmissionSourceLimit(n) {
      this.airEmissionSourcesControl.splice(n, 1)
    },
    save(event) {
      alert(JSON.stringify(this.$data))
    },
    // async submitHandler() {
    //   if (this.$v.$invalid) {
    //     this.$v.$touch()
    //     return
    //   }

    //   try {
    //     const utilizatorData = {
    //       id: this.current,
    //       title: this.title,
    //       utilizatorPhone: this.utilizatorPhone,
    //       utilizatorBankDetail: this.utilizatorBankDetail
    //     }
    //     await this.$store.dispatch('updateUtilizator', utilizatorData)
    //     this.$message(localizeFilter('Utilizator_HasBeenUpdated'))
    //     this.$emit('updated', utilizatorData)
    //   } catch (e) {}
    // }
  },
  // mounted() {
  //   this.select3 = M.FormSelect.init(this.$refs.select3)
  //   M.updateTextFields()
  // },
  // destroyed() {
  //   if (this.select3 && this.select3.destroy) {
  //     this.select3.destroy()
  //   }
  // }
}
</script>
<style scoped>
/* .form-control-input{
  border: none;
  border-radius: 0;
  background-color: transparent;
  border-bottom: 1px solid #9e9e9e;
  margin-bottom: 10px;
}
.form-control-input:focus {
  border-bottom: 1px solid #26a69a;
  box-shadow: 0 1px 0 0 #26a69a;
}
label{
  font-size: .8rem;
  color: #9e9e9e;
}
.form-option{
  font-size: 16px;
  color: #26a69a;
  display: block;
  line-height: 22px;
  padding: 14px 16px;
} */


/* This fix the long text for closed vue-selects, fix long text in options during the search (they now break line). */
.vs__selected-options {
  flex-wrap: nowrap;
  max-width: calc(100% - 41px);
}
.vs__selected {
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 100%;
  overflow: hidden;
}
.vs__search {
  position: absolute;
}
.vs--open .vs__search {
  position: static;
}
.vs__dropdown-option {
  white-space: normal;
}
.vs__dropdown-option--disabled {
  background: #ededed;
  color: #3b3b3b;
}
/* This fix the long text for closed vue-selects, fix long text in options during the search (they now break line). */
/* .vs__dropdown-menu {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.vs__dropdown-option {
  min-width: 100%;
}
 */
.style-chooser .vs__search::placeholder,
.style-chooser .vs__dropdown-toggle,
.style-chooser .vs__dropdown-menu {
  background: #dfe5fb;
  border: none;
  color: #394066;
  font-size: 12px;
  /*     text-transform: lowercase; */
  /*     font-variant: small-caps; */
}
.style-chooser .vs__clear,
.style-chooser .vs__open-indicator {
  fill: #394066;
}

</style>


