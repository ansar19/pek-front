<template>
  <d-container fluid class="main-content-container px-4 pb-4">
    <d-row no-gutters class="page-header py-4">
      <d-col lg="12" md="12">

        <div class="card card-small">
          <!-- Form Example -->
          <div class="card-header border-bottom">
            <h6 class="m-0">Новая лаборатория</h6>
          </div>

          <div class="col s12 m6 mt-2">
            <div>
              <form @submit.prevent="submitHandler">

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="lab-name">Наименование аккредитованной испытательной лаборатории</label>
                    <input type="text" v-model="laboratoryName" class="form-control" name="labe-name">
                  </div>

                  <div class="form-group col-md-6">
                    <label for="lab-accreditation-number">Номер аттестата аккредитации испытательной лаборатории</label>
                    <input type="text" v-model="labAttestateNumber" class="form-control"
                      name="lab-accreditation-number">
                    <small class="form-text text-muted">
                      пример: №KZ.Т.07.0215
                    </small>
                  </div>

                  <div class="form-group col-md-6">
                    <label for="lab-accreditation-issue-date">Дата выдачи аттестата аккредитации:</label>
                    <input type="date" v-model="accreditationIssueDate" class="form-control"
                      name="lab-accreditation-issue-date" value="2020-07-22">
                  </div>

                  <div class="form-group col-md-6">
                    <label for="lab-accreditation-due-date">Дата срока аттестата аккредитации:</label>
                    <input type="date" v-model="accreditationDueDate" class="form-control"
                      name="lab-accreditation-due-date" value="2020-07-22">
                  </div>

                  <div class="mb-3 col-md-12">
                    <label for="laboratory-accreditation-scope" class="form-label">Область аккредитации испытательной
                      лаборатории</label>
                    <textarea id="laboratory-accreditation-scope" type="textarea" v-model="accreditationScopeArea"
                      class="form-control"></textarea>
                  </div>

                  <div class="mb-3">
                    <label for="formFileMultiple" class="form-label">Аттестат аккредитации лаборатории</label>
                    <input class="form-control" type="file" id="formFileMultiple" multiple>
                  </div>

                </div>
              </form>
            </div>
          </div>

          <div class="card-footer border-top mb">
            <button class="btn btn-success waves-effect waves-light mb-4" type="submit">
              Создать
              <i class="material-icons right">send</i>
            </button>
          </div>
        </div>
      </d-col>
    </d-row>
  </d-container>
</template>

<script>
import localizeFilter from '@/filters/localize.filter'

export default {
  data: () => ({
    laboratoryName: "Аналитическая лаборатория ТОО «Лаборатория Атмосфера»",
    labAttestateNumber: "№KZ.Т.07.0215",
    accreditationIssueDate: new Date().toISOString().substr(0, 10),
    accreditationDueDate: "",
    accreditationScopeArea: "1.   Физические факторы рабочей зоны, селитебной территории, жилых и общественных зданий \n 2.   Воздух рабочей зоны \n 3.   Выбросы промышленных предприятий в атмосферу \n 4.   Атмосферный воздух населенных мест, санитарно-защитной зоны, селитебной территории \n 5.   Вода природная (поверхностная, подземная) \n 6.   Сточные воды \n 7.   Почва, грунты, промотходы, осадки с очистных сооружений, золошлаковые отходы",
    items: [],
  }),
  validations: {
    laboratoryName: {},
    labAttestateNumber: {}
  },
  mounted() {
    // M.updateTextFields()
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      try {
        const transporter = await this.$store.dispatch('createLaboratory', {
          laboratoryName: this.laboratoryName,
          labAttestateNumber: this.labAttestateNumber,
          accreditationIssueDate: this.accreditationIssueDate,
          accreditationDueDate: this.accreditationDueDate,
          accreditationScopeArea: this.accreditationScopeArea
        })
        this.laboratoryName = ''
        this.labAttestateNumber = ''
        this.accreditationIssueDate = ''
        this.accreditationDueDate = ''
        this.accreditationScopeArea = ''
        this.$v.$reset()
        this.$message(localizeFilter('Laboratory_HasBeenCreated'))
        this.$emit('created', laboratory)
      } catch (e) {}
    }
  }
}
</script>

<style scoped>
  .form-control-input{
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
</style>
