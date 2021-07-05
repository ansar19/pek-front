<template>
  <d-container fluid class="main-content-container px-4 pb-4">
    <d-row no-gutters class="page-header py-4">
      <d-col lg="12" md="12">
        <d-card class="card-small">
          <!-- Form Example -->
          <d-card-header class="border-bottom">
            <h6 class="m-0">Новый лимит эмиссии</h6>
          </d-card-header>

          <div class="col s12 m6">
            <div>
              <form @submit.prevent="submitHandler">

                <div class="form-row">
                  <div class="form-group col-md-12">

                    <!--   Разрешение на эмиссии  - год зв, дата начала и конца разрешения       -->
                    <!--     Источники выбросов подлежащие контролю - номер и название        -->
                    <!--        ЗВ подлежащий учету - код и название + лимит    -->
                    <!--      Dependant select - очистить список ЗВ если выбрали новый источник  -->
                    <label for="emission-permit-name">№ и Название разрешения на эмиссии:</label>
                    <textarea rows="2" v-model="emissionPermitName" class="form-control"
                      name="emission-permit-name"></textarea>
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="emission-permit-issue-date">Дата выдачи разрешения на эмиссию:</label>
                    <input type="date" v-model="emissionPermitIssueDate" class="form-control"
                      name="emission-permit-issue-date">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="emission-permit-due-date">Дата истечения разрешения на эмиссию:</label>
                    <input type="date" v-model="emissionPermitDueDate" class="form-control"
                      name="emission-permit-due-date">
                  </div>
                </div>

                <div class="form-group">

                  <label for="sampling-date">Выбор Источника Выбросов:</label>
                  <v-select :options="emissionSourcesList" label="emissionSourceName" v-model="selectedEmissionSource">
                  </v-select>
                </div>

                <div class="form-group">

                  <label for="sampling-date">ЗВ по которому установлен лимит:</label>
                  <v-select :options="pollutantsList" label="polName" v-model="selectedPollutant"></v-select>
                </div>

                <div class="col-auto mb-3">
                  <button type="button" class="btn btn-primary" @click.prevent="addAnother">Добавить ЗВ</button>
                  <!--           <button type="button" class="btn btn-secondary" @click.prevent="clearAllFields">Очистить поля</button>
          <button type="button" class="btn btn-danger" @click.prevent="deleteArray">Удалить все</button> -->
                </div>

                <table class="table table-responsive">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Код загрязняющих веществ</th>
                      <th>Наименование загрязняющих веществ</th>
                      <th>Установленный норматив (грамм в секунду; тонна в год)</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(pollutant, index) in airEmissionSourcesControl" :key="index">
                      <td>{{index+1}}</td>
                      <td>{{pollutant.polCode}}
                        <!--           <input v-model="pollutant.polCode" /> -->
                      </td>
                      <td>{{pollutant.polName}}
                        <!--           <input v-model="pollutant.polName" /> -->
                      </td>
                      <td><input type="number" class="form-control" v-model="pollutant.gSecLimit" /></td>
                      <td>
                        <div class="col-sm-2 text-left">
                          <button type="button" class="btn btn-sm btn-light" @click.prevent="removeOne(index)"
                            v-show="quantity > 1">
                            <span aria-hidden="true">×</span>
                            Удалить
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>

              </form>
            </div>
          </div>
          <div class="card-footer border-top mb">
            <button class="btn btn-success waves-effect waves-light mb-3" type="submit" @click.prevent="save">
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
import localizeFilter from '@/filters/localize.filter'

export default {
  data: () => ({
    emissionPermitName: "№: KZ28VDD00145762 (Строительство здания Общежития No5 на 96 мест Вахтового поселка)",
    emissionPermitIssueDate: new Date(),
    emissionPermitDueDate: new Date(),
    emissionSourcesList: [{
        emissionSourceName: "Строительные работы",
        emissionSourceCode: "6001"
      },
      {
        emissionSourceName: "Газовая резка",
        emissionSourceCode: "6002"
      }
    ],
    selectedEmissionSource: "",
    pollutantsList: [{
        polCode: "0123",
        polName: "Железо (II, III) оксиды (диЖелезо триоксид, Железа оксид) /в пересчете на (274)"
      },
      {
        polCode: "0143",
        polName: "Марганец и его соединения /в пересчете на марганца (IV) оксид/ (327)"
      },
      {
        polCode: "2902",
        polName: "Взвешенные частицы (116)"
      },
      {
        polCode: "2754",
        polName: "Алканы С12-19 (Углеводороды предельные С12-19)"
      },
      {
        polCode: "0337",
        polName: "Углерод оксид (Угарный газ) (584)"
      }
    ],
    selectedPollutant: "",
    airEmissionSourcesControl: [],
    title: '',
    utilizatorPhone: '',
    utilizatorBankDetail: ''
  }),
  validations: {
    // title: {  },
    // utilizatorPhone: {  }
  },
  // mounted() {
  //   M.updateTextFields()
  // },
  computed: {
    quantity() {
      return this.airEmissionSourcesControl.length;
    }
  },
  methods: {
    addAnother() {
      this.airEmissionSourcesControl.push({
        id: new Date().getTime(), // generate "unique" id
        polCode: this.selectedPollutant.polCode,
        polName: this.selectedPollutant.polName,
        actual: this.actual,
        gSecLimit: this.gSecLimit,
        actionItem: this.actionItem
      });
      // this.clearAllFields();
    },
    removeOne(index) {
      this.airEmissionSourcesControl.splice(index, 1);
    },
    save(event) {
      alert(JSON.stringify(this.$data))
    },
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      try {
        const utilizator = await this.$store.dispatch('createUtilizator', {
          title: this.title,
          utilizatorPhone: this.utilizatorPhone,
          utilizatorBankDetail: this.utilizatorBankDetail
        })
        this.title = ''
        this.utilizatorPhone = ''
        this.utilizatorBankDetail = ''
        this.$v.$reset()
        this.$message(localizeFilter('Utilizator_HasBeenCreated'))
        this.$emit('created', utilizator)
      } catch (e) {}
    }
  }
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
  margin-top: 10px;
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
