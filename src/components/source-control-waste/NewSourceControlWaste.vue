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
