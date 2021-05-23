<template>
  <div class="main-content-container container-fluid px-4">
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">Новый лимит эмиссии</span>
      </div>
    </div>

    <div class="card card-small mb-4">
      <div class="card-header border-bottom">
        <h5>3.3. Отходы производства и потребления</h5>
      </div>
      <div class="card-body">
        <form @submit.prevent="submitHandler">

          <div class="form-row">
            <div class="form-group col-md-12">
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
              <input type="date" v-model="emissionPermitDueDate" class="form-control" name="emission-permit-due-date">
            </div>
          </div>

          <div class="from-group">
            <label for="waste-emission-source-name">Наименование места хранения и захоронения отходов (расположение)</label>
            <input id="waste-emission-source-name" type="text" v-model="wasteEmissionSourceName" class="form-control" />
          </div>

          <!-- Limit table -->
          <div class="table mt-2">
            <table class="meta-table table table-stripped table-bordered">
              <thead>
                <tr>
                  <th style="width: 40%;" class="align-middle">Наименование места хранения и захоронения отходов
                    (расположение) </th>
                  <th style="width: 40%;" class="align-middle">Виды отходов</th>
                  <th style="width: 20%;" class="align-middle">Норматив эмиссии (тонн в год)</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="wasteDisposalSite, index in wasteDisposalSites" :key="index">
                  <td data-label="Наименование места хранения и захоронения отходов">{{ wasteEmissionSourceName }}</td>
                  <td data-label="Виды отходов">
                    <v-select :options="options" label="wasteName" :value="wasteDisposalSite.wasteLimitName"
                      @input="wasteLimitName => updatewasteLimitName(wasteDisposalSite, wasteLimitName)" />
                  </td>
                  <td data-label="Норматив эмиссии (тонн в год)">
                    <input type="number" class="form-control" v-model.number="wasteDisposalSite.wasteSourceLimit" />
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>Итог:</td>
                  <td>{{ wasteSourceLimitSubTotal }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      </div>
      <div class="card-footer border-top mb">
        <button class="btn btn-primary waves-effect waves-light mb-4 mr-2" @click="goBack" type="submit">
          Назад
        </button>
        <button class="btn btn-success waves-effect waves-light mb-4" type="submit">
          Создать
          <i class="material-icons right">send</i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
const wasteList = [
  {
    wasteName: "Золошлаки",
    wasteHazardLevel: "15"
  },
  {
    wasteName: "Вскрышные породы",
    wasteHazardLevel: "19"
  },
  {
    wasteName: "Хвосты сульфидной флотации",
    wasteHazardLevel: "935"
  },
  {
    wasteName: "Углеродный продукт",
    wasteHazardLevel: "6"
  },
  {
    wasteName: "Вмещающая порода",
    wasteHazardLevel: "9"
  },
];

export default {
  data: () => ({
    emissionPermitName: "по Комплексному разрешению№: KZ22VCZ00510312 от 20.11.2019г. Действует с 1 декабря 2019 г.",
    wasteDisposalSites: [
      {
        uid: 1,
        wasteLimitName: "",
        wasteSourceLimit: 0,
        quantity: 1
      },
      {
        uid: 2,
        wasteLimitName: "",
        wasteSourceLimit: 0,
        quantity: 1
      },
      {
        uid: 3,
        wasteLimitName: "",
        wasteSourceLimit: 0,
        quantity: 1
      },
      {
        uid: 4,
        wasteLimitName: "",
        wasteSourceLimit: 0,
        quantity: 1
      }
    ],
    wasteEmissionSourceName: "Внешний отвал",
  }),
  computed: {
    options: () => wasteList,
    wasteSourceLimitSubTotal() {
      return this.wasteDisposalSites.reduce(
        (acc, item) => acc + (item.wasteSourceLimit * item.quantity),
        0
      );
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    updatewasteLimitName(releaseSource, wasteLimitName) {
      releaseSource.wasteLimitName = wasteLimitName;
    },
    
  }
}
</script>
