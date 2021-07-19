<template>
  <div class="main-content-container container-fluid px-4">
    <div class="page-header d-flex justify-content-between row no-gutters py-4">

      <h5>Отчеты по результатам производственного экологического контроля
      </h5>
      <h5>{{companyType.nameRu}} {{ companyName }}</h5>
    </div>
    <div class="row">
      <div class="col">
        <div class="card card-small mb-4">
          <div class="card-body">
            <div>

              <Loader v-if="loading" />

              <section v-else>
                <div class="row">
                  <div class="col-lg-12">
                    <!-- <router-link to="/new-record">
                      <button class="btn-sm btn-primary float-right mb-3">Новая запись</button>
                    </router-link> -->
                  </div>
                </div>

                <FilteredTable />
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FilteredTable from '@/components/log-book/FilteredTable'

export default {
  name: 'history',
  data: () => ({
    loading: false,
    companyName : "\"Производственная компания\"",
    companyType:
      {
        "nameEn" : "LLP",
        "nameKz" : "ЖШС",
        "nameLongEn" : "Limited liability partnership",
        "nameLongKz" : "Жауапкершілігі шектеулі серіктестік",
        "nameLongRu" : "Товарищество с ограниченной ответственностью",
        "nameRu" : "ТОО",
        "value" : "llp"
      },
  }),
  // async mounted() {
  //   this.records = await this.$store.dispatch('fetchRecords')
  //   const categoires = await this.$store.dispatch('fetchCategories')
  //   const sites = await this.$store.dispatch('fetchSites')
  //   const transporters = await this.$store.dispatch('fetchTransporters')
  //   const utilizators = await this.$store.dispatch('fetchUtilizators')
  //
  //   this.setup(categoires, sites, transporters, utilizators)
  //
  //   this.loading = false
  // },
  // methods: {
  //   setup(categoires, sites, transporters, utilizators) {
  //     this.setupPagination(
  //       this.records.map(record => {
  //         return {
  //           ...record,
  //           categoryName: categoires.find(c => c.id === record.categoryId)
  //             .title,
  //           wasteColor: categoires.find(
  //             c => c.id === record.categoryId
  //           ).wasteColor,
  //           wasteType: categoires.find(
  //             c => c.id === record.categoryId
  //           ).wasteType,
  //           limit: categoires.find(
  //             c => c.id === record.categoryId
  //           ).limit,
  //           typeClass: record.type === 'income' ? 'green' : 'orange',
  //           transpoterName: transporters.find(
  //             t => t.id === record.transporterId
  //           ).title,
  //           typeText:
  //             record.type === 'income'
  //               ? localizeFilter('Income')
  //               : localizeFilter('Outcome'),
  //           siteName: sites.find(s => s.id === record.siteId).siteName,
  //           utilizatorName: utilizators.find(u => u.id === record.utilizatorId)
  //           // .title,
  //         }
  //       })
  //     )
  //   },
  //
  // },
  // computed: {
  //   companyName() {
  //     return this.$store.getters.info.companyName
  //   },
  //   companyType() {
  //     return this.$store.getters.info.companyType
  //   },
  //   // IE 11 or later
  //   format(date) {
  //     var month = date.toLocaleString('en-US', { month: 'short' })
  //     return date.getDate() + ' ' + month + ' ' + date.getFullYear()
  //   }
  // },
  components: {
    FilteredTable
  }
}
</script>
