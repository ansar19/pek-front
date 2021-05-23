<template>
  <d-container fluid class="main-content-container px-4 pb-4">
    <d-row no-gutters class="page-header py-4">
      <d-col lg="12" md="12">
        <div class="card card-small mb-4 pt-3">
          <div class="card-header border-bottom text-center">
            <!-- Limit table -->
            <div class="table mt-2">

              <h5> {{emissionPermitName}} </h5>

              <table class="meta-table table table-stripped table-bordered">
                <tr>
                  <th style="width: 40%;">Наименование места хранения и захоронения отходов (расположение)</th>
                  <th style="width: 40%;">Виды отходов</th>
                  <th style="width: 20%;">Норматив эмиссии (тонн в год)</th>
                </tr>
                <tr v-for="releaseSource, index in releaseSources" :key="index">
                  <td data-label="Наименование места хранения и захоронения отходов">{{ wasteEmissionSourceName }}</td>
                  <td data-label="Виды отходов">
                    {{ releaseSource.wasteLimitName }}
                  </td>
                  <td data-label="Норматив эмиссии (тонн в год)">
                    {{ releaseSource.wasteSourceLimit }}
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>Итог:</td>
                  <td>{{ total }}</td>
                </tr>
              </table>
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
  name: 'ShowSourceControlWaste',
  data() {
    return {
      emissionPermitName: "по Комплексному разрешению№: KZ22VCZ00510312 от 20.11.2019г. Действует с 1 декабря 2019 г.",
      wasteEmissionSourceName: "Внешний отвал",
      releaseSources: [{
        uid: 1,
        wasteLimitName: "Золошлаки",
        wasteSourceLimit: 0.25,
        quantity: 1
      },
      {
        uid: 2,
        wasteLimitName: "Вскрышные породы",
        wasteSourceLimit: 124,
        quantity: 1
      },
      {
        uid: 3,
        wasteLimitName: "Хвосты сульфидной флотации",
        wasteSourceLimit: 56,
        quantity: 1
      },
      {
        uid: 4,
        wasteLimitName: "Углеродный продукт",
        wasteSourceLimit: 85,
        quantity: 1
      },
      {
        uid: 5,
        wasteLimitName: "Вмещающая порода",
        wasteSourceLimit: 32,
        quantity: 1
      }
      ],
    };
  },
  computed: {
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
  },
};
</script>
