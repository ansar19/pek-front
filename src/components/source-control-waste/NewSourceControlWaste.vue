<template>
  <div class="main-content-container container-fluid px-4">
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">Новый лимит</span>
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
              <v-select :options="emissionPermitLists" label="emissionPermitName" v-model="emissionPermit" />
            </div>
          </div>

          <div class="from-group">
            <label for="name1">Наименование места хранения и захоронения отходов (расположение)</label>
            <input id="name1" type="text" v-model="wasteEmissionSourceName" class="form-control" />
          </div>

          <!-- Limit table -->
          <div class="table mt-2">
            <table class="meta-table table table-stripped table-bordered">
              <tr>
                <th style="width: 40%;">Наименование места хранения и захоронения отходов (расположение) </th>
                <th style="width: 40%;">Виды отходов</th>
                <th style="width: 20%;">Норматив эмиссии (тонн в год)</th>
              </tr>
              <tr v-for="releaseSource, index in releaseSources" :key="index">
                <td data-label="Наименование места хранения и захоронения отходов">{{ wasteEmissionSourceName }}</td>
                <td data-label="Виды отходов">
                  <v-select :options="options" label="wasteName" :value="releaseSource.wasteLimitName"
                    @input="wasteLimitName => updatewasteLimitName(releaseSource, wasteLimitName)" />
                </td>
                <td data-label="Норматив эмиссии (тонн в год)">
                  <input type="number" class="form-control" v-model.number="releaseSource.wasteSourceLimit" />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>Итог:</td>
                <td>{{ total }}</td>
              </tr>
            </table>
          </div>
        </form>
      </div>
      <!-- <pre>{{$data}}</pre> -->
      <div class="card-footer border-top mb">
        <button class="btn btn-primary  mb-4 mr-2" @click="goBack" type="submit">
          Назад
        </button>
        <button class="btn btn-success  mb-4" type="submit">
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

import emissionPermitLists from '@/data/emission-permits-list';

export default {
  data: () => ({
    emissionPermit: {
    },
    releaseSources: [
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
    emissionPermitLists: () => emissionPermitLists,
    total() {
      return this.releaseSources.reduce(
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
